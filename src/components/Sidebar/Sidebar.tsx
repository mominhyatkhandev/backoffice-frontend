"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const path = usePathname().split("/");
  const pathLink = path[path.length - 1];
  let selectedTab = pathLink.replace(/-/g, " ").split(" ");
  let capitalizedSelectedTab = selectedTab.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  let result = capitalizedSelectedTab.join(" ");
  return (
    <div className="bg-border-light text-secondary-base w-1/3">
      <div className="p-4">
        <h1 className="text-3xl font-bold">
          {/* {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}
           */}
          {result}
        </h1>
      </div>
      <nav className="mt-4">
        <ul className="">
          <Link href="/dashboard/careem-voucher">
            <li
              className={`px-4 py-2 cursor-pointer border border-border-dark ${
                pathLink === "careem-voucher"
                  ? "bg-border-dark font-semibold"
                  : ""
              }`}
            >
              Careem Voucher
            </li>
          </Link>
          <Link href="/dashboard/refresh-otp">
            <li
              className={`px-4 py-2 cursor-pointer border border-border-dark ${
                pathLink === "refresh-otp" ? "bg-border-dark font-semibold" : ""
              }`}
            >
              Refresh OTP
            </li>
          </Link>
          {/* Add more sidebar tabs as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
