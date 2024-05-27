import React from "react";
import { Meteors } from "@/components/ui/meteors";
import Image from "next/image";
import { useTranslation } from "react-i18next";


export function HomeMeteorsCard() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="relative left-2 max-w-[85%] lg:max-w-[60%] h-[500px] mx-auto">
        {/* <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" /> */}
        <div className="relative bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start shadow-[-5px_5px_rgba(0,_98,_90,_0.4),_-10px_10px_rgba(0,_98,_90,_0.3),_-15px_15px_rgba(0,_98,_90,_0.2),_-20px_20px_rgba(0,_98,_90,_0.1),_-25px_25px_rgba(0,_98,_90,_0.05)]">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 z-50 relative">
            {t("meteors-title")}
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            {t("meteors-p")}
          </p>

          <Image
            src={`/linear.jpg`}
            alt="hero"
            height={720}
            width={1400}
            className="rounded-2xl object-cover h-full object-left-top relative z-50"
            draggable={false}
          />

          {/* Meaty part - Meteor effect */}
          <Meteors number={15} />
        </div>
      </div>
    </div>
  );
}
