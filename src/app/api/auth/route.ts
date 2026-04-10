import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  theme: {
        colorScheme: "light"
  },
  providers: [
    GoogleProvider(
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    )
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60
  },
  jwt: {
    maxAge: 100,
  },
  pages: {
    signIn: '/signIn',
    signOut: '/signOut',
    newUser: '/signUp'
  }
})

export { handler as GET, handler as POST }
