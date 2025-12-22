import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
// import { PrismaAdapter } from "@next-auth/prisma-adapter"
// import prisma from "@/lib/prisma"

export const authOptions = {
  // Uncomment the adapter when you have a valid DATABASE_URL in .env
  // adapter: PrismaAdapter(prisma),
  
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Mock authentication for demonstration
        // Replace this with real password verification against the database
        if (credentials?.email === "sandun@example.com" && credentials?.password === "123") {
            return { id: "1", name: "Sandun Traveler", email: "sandun@example.com", role: "USER" }
        }
        
        // Return null if user data could not be retrieved
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
