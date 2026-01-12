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
        // 1. Special Admin Backdoor (Keep existing logic or ensure it works)
        if (credentials?.email === "sandun@example.com" && credentials?.password === "123") {
            let user = await prisma.user.findUnique({ where: { email: credentials.email } });
            
            if (!user) {
                // If admin test user doesn't exist, create it
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
                // Auto-upgrade to ADMIN
                user = await prisma.user.update({
                    where: { email: credentials.email },
                    data: { role: 'ADMIN' }
                });
            }
            return user;
        }

        // 2. Standard User Login (Real DB Check)
        const user = await prisma.user.findUnique({ 
            where: { email: credentials.email } 
        });

        if (user && user.password) {
            // Verify password
            const isValid = await bcrypt.compare(credentials.password, user.password);
            if (isValid) {
                return user;
            }
        }
        
        return null
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
