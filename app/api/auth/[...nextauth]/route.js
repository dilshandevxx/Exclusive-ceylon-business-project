import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/lib/prisma"

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
        // Simple mock check for demo purposes
        if (credentials?.email === "sandun@example.com" && credentials?.password === "123") {
            // Check if user exists in DB
            let user = await prisma.user.findUnique({ where: { email: credentials.email } });
            
            if (!user) {
                user = await prisma.user.create({
                    data: {
                        email: credentials.email,
                        name: "Sandun Traveler",
                        role: "ADMIN", // Force Admin for this test user
                        password: "hashed_password_placeholder" 
                    }
                });
            } else if (user.role !== 'ADMIN') {
                // Auto-upgrade to ADMIN for testing if they already exist
                user = await prisma.user.update({
                    where: { email: credentials.email },
                    data: { role: 'ADMIN' }
                });
            }
            return user;
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
