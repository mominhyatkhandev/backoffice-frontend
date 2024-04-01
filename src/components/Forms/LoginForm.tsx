"use client";
import { useState } from "react";
import PrimaryButton from "../UI/Buttons/PrimaryButton";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Form submited", email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 shadow-sm border rounded-lg border-border-dark p-6 bg-border-light">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-primary-base">
            Back Office Portal
          </h2>
        </div>
        <div>
          <h2 className="mt-6 text-center text-3xl font-semibold text-secondary-base">
            Login
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-2">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-border-light placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-border-light placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary-600 focus:ring-primary-base border-primary-base rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-secondary-base"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-primary-base hover:text-blue-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <PrimaryButton
              type="submit"
              classes="group relative w-full flex justify-center py-2 px-4 border border-border-light text-sm font-medium rounded-md text-screen-white bg-primary-base hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-warning-900"
              clickHandler={handleSubmit}
              label={"Login"}
            />

            {/* <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-border-light text-sm font-medium rounded-md text-screen-white bg-primary-base hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-warning-900"
            >
              Login
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
