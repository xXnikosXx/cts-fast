"use client"


import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/CFselect";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import React, { useState } from "react";
import { CuGlobe } from "../CuGlobe";
import { useTranslation } from "react-i18next";

import { useForm, SubmitHandler } from "react-hook-form";

interface ContactFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  topic: string;
  option: string;
  message: string;
}

export default function ContactForm() {
  const { t } = useTranslation();

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<ContactFormInputs>();

    const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
        setFormWait(true);
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
          setFormWait(false);
        }
        else {
          alert(t("cf-200"));
          setFormWait(false);
        }

        const result = await response.json();
        console.log(result); // Handle the response from the server
      }
      catch (error) {
        console.error("Error submitting form:", error);
        alert(t("cf-500"))
        setFormWait(false);
      }
    };

    const [formWait, setFormWait] = useState(false);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
        <div className="flex-1 p-4">
          <h1 className="text-4xl font-bold">{t("cf-title")}</h1>
          <p>{t("cf-p")}</p>
          {/* <CuGlobe /> */}
        </div>
        <div className="flex-1 p-4">
          {/* shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] */}
          {/* shadow-[5px_5px_0px_0px_rgba(0,128,128),-10px_-10px_30px_4px_rgba(0,0,0,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)] */}
          {/*  */}
          <div className="flex p-6 justify-center items-center flex-col gap-10 bg-s-bg-primary rounded-xl shadow-[5px_5px_0px_0px_rgba(0,128,128),-10px_-10px_30px_4px_rgba(100,100,100,0.1),10px_10px_30px_4px_rgba(255,255,255,0.15)] rotate-1">
            <div className="flex gap-10 w-full">
              <div className="grid w-full max-w-lg items-center gap-1.5">
                <Label htmlFor="firstName">
                  {t("cf-fn")}
                  <sup> *</sup>
                </Label>
                <Input
                  type="firstName"
                  id="firstName"
                  placeholder={t("cf-fn-ph")}
                  className="bg-s-bg-tertiary placeholder:text-slate-300 text-white dark:text-white"
                  {...register("firstName", {
                    required: `${t("cf-fn-err")}`,
                  })}
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="lastName placeholder:text-white">
                  {t("cf-ln")}
                  <sup> *</sup>
                </Label>
                <Input
                  type="lastName"
                  id="lastName"
                  placeholder={t("cf-ln-ph")}
                  className="bg-s-bg-tertiary placeholder:text-slate-300 text-white dark:text-white"
                  {...register("lastName", {
                    required: `${t("cf-ln-err")}`,
                  })}
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-10 w-full">
              <div className="grid w-full max-w-lg items-center gap-1.5">
                <Label htmlFor="email">
                  {t("cf-em")}
                  <sup> *</sup>
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder={t("cf-em-ph")}
                  className="bg-s-bg-tertiary placeholder:text-slate-300 text-white dark:text-white"
                  {...register("email", { required: `${t("cf-em-err")}` })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="phone">{t("cf-pn")}</Label>
                <Input
                  type="phone"
                  id="phone"
                  placeholder={t("cf-pn-ph")}
                  className="bg-s-bg-tertiary placeholder:text-slate-300 text-white dark:text-white"
                  {...register("phone")}
                />
              </div>
            </div>
            <div className="flex gap-10 w-full">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="message">
                  {t("cf-msg")}
                  <sup> *</sup>
                </Label>
                <Textarea
                  placeholder={t("cf-msg-ph")}
                  id="message"
                  className="bg-s-bg-tertiary placeholder:text-slate-300 text-white dark:text-white"
                  {...register("message", { required: `${t("cf-msg-err")}` })}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex w-full">
              <Button variant={"accent"} type="submit">
                {t("cf-sub")}
              </Button>
              {formWait ? (
                <div className="rounded-md h-7 w-7 border-4 border-t-4 border-p-brand-teal animate-spin ml-7"></div>
              ) : (
                ""
              )}
            </div>
            <p className="text-xs">{t("cf-tos")}</p>
          </div>
        </div>
      </div>
    </form>
  );
};