// ? Framer-Motion Imports
import { motion } from "framer-motion";

import { height } from "@/components/NavMenu/anim";

// ? React Imports
import React from "react";

// ? Next Imports
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// ? Component Imports
import { cn } from "@/lib/utils";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/themes/ThemeToggle";
import LanguageChanger from "@/components/LanguageChanger";
import { WebServices, HwServices, ITServices } from "@/components/NavMenu/links";

import { useTranslation } from "react-i18next";

export default function NavMdDropdown() {

  const { t } = useTranslation();

    const pathname = usePathname();

    let isHome = undefined;
    if (pathname === "/el") {
      isHome = true;
    } else if (pathname === "/") {
      isHome = true;
    } else if (pathname === "/el/contact") {
      isHome = undefined;
    } else if (pathname === "/contact") {
      isHome = undefined;
    }

    return (
      <motion.div
        variants={height}
        initial="initial"
        animate="enter"
        exit="exit"
        className="xl:hidden overflow-auto w-screen h-screen bg-s-bg-primary absolute left-0 top-[55px] m-0"
      >
        <div className="flex gap-[50px] mb-[10px]">
          <div className="flex flex-col lg:flex-row justify-items-center lg:justify-between">
            <span className="grid gap-3 p-4 grid-cols-1 justify-items-center lg:flex xl:hidden lg:p-0 pl-5 w-screen">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={
                      `${isHome ? "underline " : ""}` +
                      navigationMenuTriggerStyle()
                    }
                  >
                    {t("nav-home")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={
                      `${!isHome ? "underline " : ""}` +
                      navigationMenuTriggerStyle()
                    }
                  >
                    {t("nav-contact")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </span>
            <span className="flex flex-col gap-4 justify-center md:flex-row xl:hidden p-5 lg:p-0 mt-1 relative lg:pl-0 lg:mt-0 lg:absolute lg:right-0">
              <span className="flex justify-center">
                <NavigationMenuItem className="mx-2">
                  <Link href="" legacyBehavior passHref>
                    <ThemeToggle />
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="mx-2">
                  {/* <Link href="" legacyBehavior passHref> */}
                  <LanguageChanger />
                  {/* </Link> */}
                </NavigationMenuItem>
              </span>
              <NavigationMenuItem className="flex justify-center lg:list-item mx-2">
                <Link href="" legacyBehavior passHref>
                  <Link
                    href=""
                    className={
                      buttonVariants({ variant: "outlineDisabled" }) +
                      " w-[80%] md:w-auto cursor-not-allowed"
                    }
                  >
                    {t("navLogin")}
                  </Link>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="flex justify-center lg:item-list mx-2 lg:mr-5">
                <Link
                  href="/contact"
                  className={
                    buttonVariants({ variant: "accent" }) + " w-[80%] md:w-auto"
                  }
                >
                  {t("navCTA")}
                </Link>
              </NavigationMenuItem>
            </span>
          </div>
        </div>
      </motion.div>
    );
}

const ListItem: any = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";