import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/lib/prisma"
import bcrypt from 'bcryptjs'

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        console.log("Authorize called with:", credentials?.email);

        // 1. Special Admin Backdoor (Keep existing logic)
        if (credentials?.email === "sandun@example.com" && credentials?.password === "123") {
            try {
                let user = await prisma.user.findUnique({ where: { email: credentials.email } });
                
                if (!user) {
                    const hashedPassword = await bcrypt.hash("123", 10);
                    user = await prisma.user.create({
                        data: {
                            email: credentials.email,
                            name: "Sandun Traveler",
                            role: "ADMIN",
                            password: hashedPassword 
                        }
                    });
                } else if (user.role !== 'ADMIN') {
                    user = await prisma.user.update({
                        where: { email: credentials.email },
                        data: { role: 'ADMIN' }
                    });
                }
                return user;
            } catch (e) {
                console.error("Admin backdoor error:", e);
                return null;
            }
        }

        // 2. Standard User Login (Real DB Check)
        try {
            const user = await prisma.user.findUnique({ 
                where: { email: credentials.email } 
            });

            console.log("User found:", user ? "YES" : "NO");

            if (user && user.password) {
                // Verify password
                const isValid = await bcrypt.compare(credentials.password, user.password);
                console.log("Password valid:", isValid);
                
                if (isValid) {
                    return user;
                }
            } else {
                console.log("User missing or no password set");
            }
        } catch (error) {
            console.error("Login Error:", error);
            throw new Error(`Login failed: ${error.message}`);
        }
        
        return null; // Return null if login fails
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
