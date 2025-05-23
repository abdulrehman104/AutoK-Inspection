import db from "@/lib/db";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get("stripe-signature") as string;

  if (!signature) {
    return NextResponse.json(
      { error: "Missing stripe signature" },
      { status: 400 }
    );
  }
  try {
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );

    const session = event.data.object as Stripe.Checkout.Session;

    if (event.type == "checkout.session.completed") {
      const userId = session.metadata?.userId;

      if (!userId) {
        return NextResponse.json(
          { error: "Mising userId or coins" },
          { status: 400 }
        );
      }

      // Update payment status
      await db.payment.update({
        where: { stripeSessionId: session.id },
        data: { status: "completed" },
      });
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" }, 
      { status: 400 }
    );
  }
}
