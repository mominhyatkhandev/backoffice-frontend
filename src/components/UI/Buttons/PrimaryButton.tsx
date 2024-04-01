"use client";

import React from "react";

interface IButton {
  label: string;
  clickHandler: (e: any) => void;
  type?: "button" | "submit";
  classes?: string;
}

function PrimaryButton({ clickHandler, label, type, classes }: IButton) {
  return (
    <div>
      <button
        type={type || "button"}
        className={`p-2 items-center border-2 rounded-lg font-semibold border-border-light justify-center bg-secondary-200 text-sm text-secondary-base hover:text-screen-white hover:bg-secondary-500 ${classes}`}
        onClick={clickHandler}
      >
        {label}
      </button>
    </div>
  );
}

export default PrimaryButton;
