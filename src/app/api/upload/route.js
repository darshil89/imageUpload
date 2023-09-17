import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
export async function POST(req) {
  const data = await req.formData();
  const file = data.get("file");
  if (!file) {
    return NextResponse.json({ error: "No file found" }, { status: 400 });
  }
  //convert image to buffer
  const byteData = await file.arrayBuffer();
  const buffer = Buffer.from(byteData);
  //path to uplaod image
  const path = `./public/uploads/${file.name}`;
  await writeFile(path, buffer);
  return NextResponse.json({ message: "File uploaded" }, { status: 200 });
}
