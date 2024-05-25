// ? React Imports
import React from "react";
import { useState } from "react";

// ? Next Imports
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// ? Framer-Motion Imports
import { motion, AnimatePresence } from "framer-motion";

// ? Component Imports
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/themes/ThemeToggle";
import LanguageChanger from "@/components/LanguageChanger";
import { WebServices, HwServices, ITServices } from "@/components/NavMenu/links";
import { opacity, background } from "@/components/NavMenu/anim";
import NavMdDropdown from "./NavMdDropdown";


export default function NavMedium() {

    const [isActive, setIsActive] = useState(false);

  return (
    <>
      <span className="flex xl:hidden absolute right-0 ml-0">
        <div>
          <button className="relative group mr-5">
            <div
              onClick={() => {
                setIsActive(!isActive);
              }}
              className={`relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-gray-300 hover:ring-8 ring-opacity-30 duration-200 shadow-md ${
                isActive ? "ring-4" : ""
              }`}
            >
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div
                  className={`${"bg-p-neutral-white h-[2px] w-7 transform transition-all duration-300 origin-left"} ${
                    isActive ? "translate-x-10" : ""
                  }`}
                ></div>
                <div
                  className={`bg-p-neutral-white h-[2px] w-7 rounded transform transition-all duration-300 delay-75 ${
                    isActive ? "translate-x-10" : ""
                  }`}
                ></div>
                <div
                  className={`bg-p-neutral-white h-[2px] w-7 transform transition-all duration-300 origin-left delay-150 ${
                    isActive ? "translate-x-10" : ""
                  }`}
                ></div>

                <div
                  className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0 ${
                    isActive ? "w-12 translate-x-0" : ""
                  }`}
                >
                  <div
                    className={`absolute bg-p-neutral-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${
                      isActive ? "rotate-45" : ""
                    }`}
                  ></div>
                  <div
                    className={`absolute bg-p-neutral-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${
                      isActive ? "-rotate-45" : ""
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </span>
      <AnimatePresence mode="wait">
        {isActive && <NavMdDropdown />}
      </AnimatePresence>
    </>
  );
}
