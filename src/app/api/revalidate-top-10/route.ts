import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export const GET = () => {
  revalidateTag("getTop10Rackets");
  return NextResponse.json({ status: 200, revalidated: true });
};
