"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import { Content } from "@/components/HomeShowcase/content";

export function HomeShowcase() {
  return (
    <div className="p-10">
      <StickyScroll content={Content} />
    </div>
  );
}
