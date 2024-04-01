"use client";

import React, { useState } from "react";

interface IInput {
  label: string;
  type: string;
  inputClass?: string;
  changeHandler?: (e: any) => void;
  input?: string | number;
}

function Input({ label, type, inputClass, changeHandler, input }: IInput) {
  console.log(input);

  return (
    <div className="w-1/2">
      <label className="font-semibold font-base text-secondary-base">
        {label}
      </label>
      <input
        className={`"h-10 w-full border-border-light border-2 p-2 rounded-lg bg-screen-white" ${inputClass}`}
        type={type}
        value={input}
        onChange={changeHandler}
      />
    </div>
  );
}

export default Input;
