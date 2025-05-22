"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { buySubscription } from "@/actions/lemon-squeezy";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function CheckoutButton({ id }: { id: string }) {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  // ========================== Lemon Squeezy Code ==========================
  const handlePayment = async () => {
    try {
      setLoading(true);

      const res = await buySubscription(id);

      if (res.status !== 200) {
        throw new Error("Failed to Buy Report");
      }

      router.push(res.url);
    } catch (error) {
      console.error("Error buying subscription", error);
      toast({
        title: "Error",
        description: "Something went wrong while buying report",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button onClick={handlePayment}>
      {loading ? "Buying..." : "Buy your report"}
    </Button>
  );
}

// ========================== Paypal Code ==========================
// const createOrder = async (price: string, planDetails: any) => {
//   try {
//     if (
//       !userDetails.firstName ||
//       !userDetails.lastName ||
//       !userDetails.email
//     ) {
//       toast({
//         variant: "destructive",
//         title: "Missing Information",
//         description: "Please fill in all required fields",
//       });
//       return;
//     }

//     const response = await axios.post("/api/paypal/create-order", {
//       price: price.replace(/[^0-9.]/g, ""),
//       firstName: userDetails.firstName,
//       lastName: userDetails.lastName,
//       email: userDetails.email,
//       vnNumber: vnNumber, // Include VIN number from store
//       plan: planDetails.planName,
//     });

//     return response.data.id;
//   } catch (error) {
//     console.error("Error creating order:", error);
//     throw error;
//   }
// };

// const onApprove = async (data: { orderID: string }) => {
//   try {
//     const response = await axios.post("/api/paypal/capture-order", {
//       orderID: data.orderID,
//       firstName: userDetails.firstName,
//       lastName: userDetails.lastName,
//       email: userDetails.email,
//       vnNumber: vnNumber,
//     });

//     // Close dialog after successful payment
//     setOpenDialogId(null);

//     // Show toast notification
//     if (response.data.success) {
//       toast({
//         title: "Payment Successful",
//         description: "Your payment has been processed successfully!",
//       });
//     } else {
//       toast({
//         variant: "destructive",
//         title: "Payment Failed",
//         description: "There was an issue processing your payment",
//       });
//     }

//     // Redirect based on response
//     if (response.data.redirectUrl) {
//       router.push(response.data.redirectUrl);
//     }
//   } catch (error) {
//     console.error("Payment capture error:", error);
//     toast({
//       variant: "destructive",
//       title: "Payment Failed",
//       description: "Payment processing failed",
//     });

//     // Redirect to cancel page on error
//     router.push("/payment-cancel");
//   }
// };

{
  /* // ========================== Paypal Code ========================== */
}
{
  /* <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{ layout: "vertical", color: "silver" }}
          createOrder={() => createOrder(plan.price, { planName: plan.plan })}
          onApprove={(data) => onApprove(data)}
        />
      </PayPalScriptProvider> */
}
