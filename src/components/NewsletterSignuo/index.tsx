"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useTranslation } from "react-i18next";


import { Form, useForm } from "react-hook-form";

export function NewsletterSignup() {

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: object) => {
    try {
      const response = await fetch("/api/submit-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        reset();
        alert(t("newsletter-200"));
      } else {
        alert(result.message || "Failed to submit email.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(t("newsletter-500"));
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
        </form>
        <p className="text-neutral-400 max-w-2xl mx-auto my-2 text-sm text-center relative z-10 mb-10">
          {t("newsletter-tos")}
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
