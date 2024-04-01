"use client";
import React, { ChangeEvent, useState } from "react";
import Input from "../UI/Inputs/Input";
import PrimaryButton from "../UI/Buttons/PrimaryButton";

const RefreshOTP = () => {
  const [input, setInput] = useState("");

  const clickHandler = () => {
    console.log("Button clicked!", input);
  };
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setInput(event.target.value);
    }
  };
  return (
    <div className="w-full h-screen flex flex-col gap-2 items-center justify-center">
      <Input
        label="MSSIDN :"
        type="number"
        changeHandler={handleFileChange}
        input={input}
      />
      <PrimaryButton clickHandler={clickHandler} label={"Submit"} />
      {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
      </span> */}
    </div>
  );
};

export default RefreshOTP;
