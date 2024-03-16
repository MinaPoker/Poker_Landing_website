import { NextResponse } from "next/server";
import ConnectDB from "@/app/lib/mongodb";
import WhiteList from "@/app/models/whitelist";

export async function POST(req) {
  const { userName, email, country, format } = await req.json();
  try {
    await ConnectDB();
    await WhiteList.create({ userName, email, country, format });

    return NextResponse.json({
      msg: ["Successfully registered"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(e.message);
      }
      return NextResponse.json({ msg: errorList, success: false });
    } else {
      return NextResponse.json({ msg: "Internal Server Error" });
    }
  }
}