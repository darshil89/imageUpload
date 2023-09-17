"use client";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState();
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(file);
    const data = new FormData();
    data.set("file", file);
    const res = await fetch("/api/upload", {
      method: "POST",
      body: data,
    });
    const result = await res.json();
    if (result.error) {
      alert(result.error);
    }
    if (result.message) {
      alert(result.message);
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center align-center w-full h-screen">
        <h1 className="text-3xl font-bold mb-5">Upload Image</h1>
        <form onSubmit={onSubmit}>
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
