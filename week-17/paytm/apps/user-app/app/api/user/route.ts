import { NextResponse } from "next/server";
import { PrismaClient } from "@repo/db/client";

const client = new PrismaClient();

export const GET = async () => {
  await client.user.create({
    data: {
      email: "asd@gail.in",
      name: "adsads",
    },
  });
  const res = await client.user.findMany();
  return NextResponse.json({
    message: res,
  });
};
