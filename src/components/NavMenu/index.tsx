"use client";

// ? React Imports
import * as React from "react";

// ? Next Imports
import Image from "next/image";

// ? i18n Imports
import { useTranslation } from "react-i18next";

// ? Component Imports
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavLarge from "@/components/NavMenu/Large";
import NavMedium from "@/components/NavMenu/Medium";

export default function NavMenu() {

  // ? Localization
  const { t } = useTranslation();

  return (
    <NavigationMenu className="w-screen fixed top-0 h-[70px] bg-s-bg-primary z-40 shadow-[0px_-40px_40px_5px_#81e6d9]">
      <NavigationMenuList className="w-screen justify-start" id="nav-menu">
        <Image
          src="/logo.png"
          className="ml-5"
          alt="logo"
          width="70"
          height="70"
        />
        <NavLarge />
        <NavMedium />
      </NavigationMenuList>
    </NavigationMenu>
  );

}
