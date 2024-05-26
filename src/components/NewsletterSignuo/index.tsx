"use client";
import React from "react";
import { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useTranslation } from "react-i18next";


import { Form, useForm } from "react-hook-form";

export function NewsletterSignup() {

  const { register, handleSubmit, reset } = useForm();

  const [email, setEmail] = useState("");

  const [waiting, setWaiting] = useState(false);

  const onSubmit = async (e: any) => {
    setWaiting(true);
    try {
      // console.log(e.email)
      // Make a POST request to the custom server's endpoint
      const response = await fetch("/api/submit-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ "email": e.email }),
      });

      if (response.ok) {
        alert("Email submitted successfully");
        // Reset the email input field after successful submission
        setEmail("");
        setWaiting(false);
      } else {
        console.error("Failed to submit email:", response.statusText);
        setWaiting(false);
        alert("Failed to submit email")
      }
    } catch (error: any) {
      console.error("Error submitting email:", error.message);
    }
  };
  
  const { t } = useTranslation();

  return (
    <div className="h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl mb-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-p-brand-teal  text-center font-sans font-bold">
          {t("newsletter-title")}
        </h1>
        <p></p>
        <p className="max-w-2xl mx-auto my-2 text-lg text-center relative z-10 mb-10">
          {t("newsletter-p")}
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex relative items-center space-x-2 mb-10 z-30 justify-center"
        >
          <Input
            type="email"
            {...register("email", { required: true })}
            className="min-w-[100px]"
            placeholder={t("newsletter-placeholder")}
          />
          <Button variant="accent" type="submit">
            {t("newsletter-btn")}
          </Button>
          {waiting ? (
            <div className="rounded-md h-7 w-7 border-4 border-t-4 border-p-brand-teal animate-spin ml-7"></div>
          ) : (
            ""
          )}
        </form>
        <p className="text-neutral-400 max-w-2xl mx-auto my-2 text-sm text-center relative z-10 mb-10">
          {t("newsletter-tos")}
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
