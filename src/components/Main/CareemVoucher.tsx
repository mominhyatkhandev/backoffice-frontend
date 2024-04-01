"use client";
import React, { ChangeEvent, useState } from "react";
import Input from "../UI/Inputs/Input";
import PrimaryButton from "../UI/Buttons/PrimaryButton";

const CareemVoucher = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const clickHandler = () => {
    console.log("Button clicked CareemVoucher!");
    if (selectedFile) {
      // Perform actions with the selected file
      console.log("Selected file:", selectedFile);
    } else {
      console.log("No file selected");
    }
  };
   const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0];
        setSelectedFile(file);
      }
   };
  return (
    <div className="w-full h-screen flex flex-col gap-2 items-center justify-center bg-primary-base">
      {/* <h2 className="text-2xl font-bold p-4">CareemVoucher</h2> */}
      <Input label="Choose a file" type="file" changeHandler={handleFileChange} />
      <PrimaryButton clickHandler={clickHandler} label={"Submit"} />
    </div>
  );
};

export default CareemVoucher;
