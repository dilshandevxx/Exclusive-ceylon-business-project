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
            // Check if user exists in DB, if not create to ensure relationships work
            let user = await prisma.user.findUnique({ where: { email: credentials.email } });
            if (!user) {
                user = await prisma.user.create({
                    data: {
                        email: credentials.email,
                        name: "Sandun Traveler",
                        role: "USER",
                        password: "hashed_password_placeholder" // in real app use bcrypt
                    }
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
