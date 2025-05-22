"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState, useEffect } from "react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { useUserStore } from "@/store/user-store";
import { handleContactForm } from "@/actions/contact";

// Form Schema
const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." }),
  lastName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  vnnumber: z
    .string()
    .min(17, { message: "VIN Number must be 17 characters." })
    .max(17, { message: "VIN Number must be 17 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { firstName, lastName, email, vnNumber, setUserData } = useUserStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || "",
      vnnumber: vnNumber || "",
      message: "",
    },
  });

  // Update form when store data changes
  useEffect(() => {
    form.setValue("firstName", firstName || "");
    form.setValue("lastName", lastName || "");
    form.setValue("email", email || "");
    form.setValue("vnnumber", vnNumber || "");
  }, [firstName, lastName, email, vnNumber, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setIsSubmitting(true);

    // Update store with new values
    setUserData({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      vnNumber: values.vnnumber,
    });

    try {
      const response = await handleContactForm(values);

      if (response) {
        console.log("Form submitted successfully");
        form.reset();
        toast({
          title: "Form Submitted",
          description: "Thank you for submitting the form.",
        });
      } else {
        console.error("Failed to submit form");
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: "An error occurred. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form", error);
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20 mx-auto container"
    >
      {/* Left Image */}
      <div
        className="relative h-[400px] lg:h-full"
      >
        <Image
          src="/images/contact/contact.png"
          alt="Mechanic inspecting a vehicle"
          fill
          className="object-cover rounded-l-xl"
          priority
        />
      </div>

      {/* Contact Form */}
      <div className="bg-custom_red p-8 lg:p-12 rounded-r-xl">
        <div className="max-w-xl">
          <h2 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
            CONTACT US
          </h2>
          <h3 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s work together
          </h3>
          <p className="text-lg mb-8">
            Have questions or need assistance? Contact us today for personalized
            support and expert guidance on all things automotive.
          </p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 p-3 md:p-6"
            >
              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-semibold">
                        First Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter First Name"
                          {...field}
                          className="focus:ring-red-500"
                        />
                      </FormControl>
                      <FormMessage className="text-white" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-semibold">
                        Last Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Last Name"
                          {...field}
                          className="focus:ring-red-500"
                        />
                      </FormControl>
                      <FormMessage className="text-white" />
                    </FormItem>
                  )}
                />
              </div>

              {/* Email and VIN Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-semibold">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Your Email"
                          {...field}
                          className="focus:ring-red-500"
                        />
                      </FormControl>
                      <FormMessage className="text-white" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="vnnumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-semibold">
                        Car VIN Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter VIN Number"
                          {...field}
                          className="focus:ring-red-500"
                        />
                      </FormControl>
                      <FormMessage className="text-white" />
                    </FormItem>
                  )}
                />
              </div>

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white font-semibold">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className="bg-white min-h-[150px]"
                        placeholder="Enter Your Message"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-white" />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-fit bg-neutral-800 hover:bg-neutral-900/90 text-white font-semibold py-2 rounded-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};
