"use server";

import { auth } from "@clerk/nextjs/server";
import { stripe } from "@/lib/stripe";
import db from "@/lib/db";

export const createCheckoutSession = async () => {
  const user = await auth();

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: process.env.PRODUCT_PRIZE_ID,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_URL}/payment-success?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/payment-cancel?canceled=true`,
      mode: "payment",
      metadata: {
        userId: user.userId,
      },
    });

    // Create a pending payment record
    await db.payment.create({
      data: {
        userId: user.userId as string,
        amountCents: session.amount_subtotal || 39.99,
        stripeSessionId: session.id,
        status: "pending",
      },
    });

    return { url: session.url, status: 200 };
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return { error: "Error creating checkout session", status: 500 };
  }
};


















// ========================== Lemon Squeezy Code ==========================
// import { lemonSqueezyClient } from "@/lib/lemonsqueezy";

// export const buySubscription = async (id: string) => {
//   try {
//     const res = await lemonSqueezyClient().post("/checkouts", {
//       data: {
//         type: "checkouts",
//         attributes: {
//           checkout_data: {
//             custom: {
//               buyerUserId: id,
//             },
//           },
//           product_options: {
//             redirect_url: `https://www.autokinspection.com`,
//           },
//         },
//         relationships: {
//           store: {
//             data: {
//               type: "stores",
//               id: process.env.LEMONSQUEEZY_STORE_ID,
//             },
//           },
//           variant: {
//             data: {
//               type: "variants",
//               id: process.env.LEMONSQUEEZY_VARIANT_ID,
//             },
//           },
//         },
//       },
//     });

//     const checkoutUrl = res.data.data.attributes.url;
//     return { url: checkoutUrl, status: 200 };
//   } catch (error) {
//     console.log("Error buying subscription", error);
//     return { message: "Internal server error", status: 500 };
//   }
// };
