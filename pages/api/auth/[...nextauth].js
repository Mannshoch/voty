import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import Adapters from "next-auth/adapters";
import { PrismaClient } from "@prisma/client";
import { sendMail } from "../../../util/email";

// use global.prisma in dev due to hot-module loading
let prisma;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

process.env.NEXTAUTH_URL = process.env.BASE_URL;

const options = {
  site: process.env.BASE_URL,
  providers: [
    Providers.Email({
      server: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      from: process.env.EMAIL,
      sendVerificationRequest: ({
        identifier: email,
        url,
        token,
        site,
        provider,
      }) => {
        sendMail(
          process.env.EMAIL,
          email,
          "Login-Link für voty",
          "verification",
          {
            email, // : `${email.replace(/\./g, "&#8203;.")}`,
            url,
            site,
          }
        );
      },
    }),
  ],
  adapter: Adapters.Prisma.Adapter({ prisma }),

  pages: {
    signIn: "/user/login",
    signOut: "/user/logout",
    error: "/user/error", // Error code passed in query string as ?error=
    verifyRequest: "/user/verify", // (used for check email message)
    newUser: null, // If set, new users will be directed here on first sign in
  },

  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `jwt` is automatically set to `true` if no database is specified.
    // jwt: false,
    // Seconds - How long until an idle session expires and is no longer valid.
    // maxAge: 30 * 24 * 60 * 60, // 30 days
    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    // updateAge: 24 * 60 * 60, // 24 hours
    // Easily add custom properties to response from `/api/auth/session`.
    // Note: This should not return any sensitive information.
    /*
    get: async (session) => {
      session.customSessionProperty = "ABC123"
      return session
    }
    */
  },

  // JSON Web Token options
  jwt: {
    // secret: 'my-secret-123', // Recommended (but auto-generated if not specified)
    // Custom encode/decode functions for signing + encryption can be specified.
    // if you want to override what is in the JWT or how it is signed.
    // encode: async ({ secret, key, token, maxAge }) => {},
    // decode: async ({ secret, key, token, maxAge }) => {},
    // Easily add custom to the JWT. It is updated every time it is accessed.
    // This is encrypted and signed by default and may contain sensitive information
    // as long as a reasonable secret is defined.
    /*
    set: async (token) => {
      token.customJwtProperty = "ABC123"
      return token
    }
    */
  },

  // Control which users / accounts can sign in
  // You can use this option in conjuction with OAuth and JWT to control which
  // accounts can sign in without having to use a database.
  allowSignin: async (user, account) => {
    // Return true if user / account is allowed to sign in.
    // Return false to display an access denied message.
    return true;
  },

  // Additional options
  // secret: 'abcdef123456789' // Recommended (but auto-generated if not specified)
  debug: true, // Use this option to enable debug messages in the console
};

const Auth = (req, res) => NextAuth(req, res, options);

export default Auth;
