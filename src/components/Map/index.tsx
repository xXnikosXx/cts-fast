"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";

export function Map() {
  return (
    <div
      className="h-[40rem] w-full flex items-center justify-center"
      onClick={() =>
        window.open("https://maps.app.goo.gl/9i98NaRodMhk9gj36", "_blank")
      }
    >
      <PinContainer
        title="maps.google.com"
        href="https://maps.app.goo.gl/9i98NaRodMhk9gj36"
      >
        <div className="w-[25rem] md:w-[45rem] xl:w-[40rem] 2xl:w-[45rem] h-[35rem]">
          <Image
            src={`/map.png`}
            alt="hero"
            height={720}
            width={1400}
            className="rounded-2xl object-cover h-full w-full"
            draggable={false}
          />
        </div>
      </PinContainer>
    </div>
  );
}
