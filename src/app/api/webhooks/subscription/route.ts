export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";
import db from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const body = JSON.parse(rawBody);
    const { buyerUserId } = body.meta.custom_data;

    if (!buyerUserId) {
      throw new Error("Invalid Buyer User ID or Id does not exist");
    }

    const hmac = crypto.createHmac(
      "sha256",
      process.env.LEMONSQUEEZY_WEBHOOK_SECRET!
    );

    const digest = Buffer.from(hmac.update(rawBody).digest("hex"), "utf8");
    const signature = Buffer.from(req.headers.get("X-Signature") || "", "utf8");

    if (!crypto.timingSafeEqual(digest, signature)) {
      throw new Error("Invalid signature");
    }

    const payment = await db.payment.create({
      data: {
        lemonSessionId: body.data.id,
        amountCents: 39.99,
        currency: body.data.attributes.currency,
        status: body.data.attributes.status,
      },
    });

    if (!payment) {
      return NextResponse.json(
        { message: "Cannot buy report" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { data: payment, message: "Report bought successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error receiving webhook", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
