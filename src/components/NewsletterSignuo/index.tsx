"use client";
import React from "react";
import { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useTranslation } from "react-i18next";


import { Form, useForm, SubmitHandler } from "react-hook-form";

export function NewsletterSignup() {

interface FormInputs {
  email: string;
}



  const [waiting, setWaiting] = useState(false);

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<FormInputs>();

const onSubmit: SubmitHandler<FormInputs> = async (data) => {
  setWaiting(true);
  try {
    const response = await fetch("/api/submit-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
      setWaiting(false);
      alert("Error submitting form");
    } else {
      alert("form submitted successfully!");
      setWaiting(false);
    }

    const result = await response.json();
    console.log(result); // Handle the response from the server
  } catch (error) {
    console.error("Error submitting form:", error);
    alert(t("Error submitting form"));
    setWaiting(false);
  }
};


  
  const { t } = useTranslation();

  return (
    <div className="h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-5xl lg:text-7xl mb-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 dark:from-neutral-200 to-p-brand-teal dark:to-p-brand-teal  text-center font-sans font-bold">
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
            {...register("email", { required: `${t("cf-em-err")}` })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
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
