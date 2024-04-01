"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/icons/logo.svg";

interface NavbarProps {
  isLoggedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-border-dark shadow-sm z-1 rounded-t-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-screen-white hover:bg-secondary-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex items-center">
              <Link href="/" className="text-white text-xl font-bold">
                <Image
                  src={Logo}
                  width={130}
                  height={36}
                  alt="logo"
                  className=""
                />
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6 w-full">
              <div className="flex items-center justify-between w-full space-x-4">
                <div>
                  <Link
                    className="text-secondary-base hover:bg-secondary-200 hover:text-screen-white px-3 py-2 rounded-md text-sm font-medium"
                    href="/"
                  >
                    Home
                  </Link>
                  {isLoggedIn && (
                    <Link
                      className="text-secondary-base hover:bg-secondary-200 hover:text-screen-white px-3 py-2 rounded-md text-sm font-medium"
                      href="/dashboard"
                    >
                      Dashboard
                    </Link>
                  )}
                </div>
                <div>
                  <Link
                    className="text-secondary-base hover:bg-secondary-200 hover:text-screen-white px-3 py-2 rounded-md text-sm font-medium"
                    href="/login"
                  >
                    Login
                  </Link>
                  <Link
                    className="text-secondary-base hover:bg-secondary-200 hover:text-screen-white px-3 py-2 rounded-md text-sm font-medium"
                    href="/signup"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              className="text-secondary-base hover:bg-secondary-200 hover:text-screen-white block px-3 py-2 rounded-md text-base font-medium"
              href="/"
            >
              Home
            </Link>
            {!isLoggedIn && (
              <>
                <Link
                  className="text-secondary-base hover:bg-secondary-200 hover:text-screen-white block px-3 py-2 rounded-md text-base font-medium"
                  href="/login"
                >
                  Login
                </Link>
                <Link
                  className="text-secondary-base hover:bg-secondary-200 hover:text-screen-white block px-3 py-2 rounded-md text-base font-medium"
                  href="/signup"
                >
                  Sign Up
                </Link>
              </>
            )}
            {isLoggedIn && (
              <Link
                className="text-secondary-base hover:bg-secondary-200 hover:text-screen-white block px-3 py-2 rounded-md text-base font-medium"
                href="/dashboard"
              >
                Dashboard
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
