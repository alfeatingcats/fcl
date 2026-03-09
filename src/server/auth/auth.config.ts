import type { NextAuthConfig } from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'

export const authConfig = {
  trustHost: true,
  providers: [DiscordProvider],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id
        token.name = user.name
        token.email = user.email
        token.picture = user.image
      }
      return token
    },
    session: ({ session, token }) => {
      if (session.user && token) {
        session.user.id = token.id as string
        session.user.name = token.name
        session.user.email = token.email!
        session.user.image = token.picture!
      }
      return session
    },
  },
} satisfies NextAuthConfig
