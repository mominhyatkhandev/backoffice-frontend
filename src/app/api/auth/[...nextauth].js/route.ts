import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials: Record<"email" | "password", string>) {
        try {
          const response: any = await axios.post("endpoint", {
            email: credentials.email,
            password: credentials.password,
          });
          if (response.code === "00") {
            return {
              user: response.user,
              token: response.token,
            };
          }
        } catch (e) {
          console.log("ERROR FROM NEXT AUTH", e);
        }
        return undefined;
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
};

export default NextAuth(authOptions);
