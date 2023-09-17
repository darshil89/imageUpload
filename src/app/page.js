"use client";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState();
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(file);
  };
  return (
    <>
      <div className="flex flex-col justify-center align-center w-full h-screen">
        <h1 className="text-3xl font-bold mb-5">Upload Image</h1>
        <form onSubmit={onSubmit} >
          <input
            type="file"
            name="file"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <button type="submit">Upload Image</button>
        </form>
      </div>
    </>
  );
}
