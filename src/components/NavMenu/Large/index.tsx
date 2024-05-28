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

export default function NavLarge() {

  const { t } = useTranslation();

    const pathname = usePathname();
    
    let isHome = undefined
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
    <>
      <span className="hidden xl:flex pl-5">
        <NavigationMenuItem className="justify-self-start">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={
                `${
                  isHome
                    ? "underline "
                    : ""
                }` + navigationMenuTriggerStyle()
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
                `${
                  !isHome
                    ? "underline "
                    : ""
                }` + navigationMenuTriggerStyle()
              }
            >
              {t("nav-contact")}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
      </span>
      <span className="hidden xl:flex absolute right-0">
        <NavigationMenuItem className="mx-2">
          <Link href="" legacyBehavior passHref>
            <ThemeToggle />
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="mx-2">
          <Link href="" legacyBehavior passHref>
            <Link
              href=""
              className={
                buttonVariants({ variant: "outlineDisabled" }) +
                " ml-2 cursor-not-allowed"
              }
            >
              {t("navLogin")}
            </Link>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="ml-2 mr-5">
          <Link
            href="/contact"
            className={buttonVariants({ variant: "accent" })}
          >
            {t("navCTA")}
          </Link>
        </NavigationMenuItem>
      </span>
    </>
  );

}

const ListItem = React.forwardRef<
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