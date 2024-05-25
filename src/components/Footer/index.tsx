"use client"
// ? Next Imports
import Image from "next/image";
import Link from "next/link";

// ? Component Imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import { useTranslation } from "react-i18next";


// ? Icon Imports
import { FaWhatsapp, FaXTwitter, FaInstagram, FaThreads, FaYoutube, FaFacebookMessenger, FaViber } from "react-icons/fa6"



export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="flex gap-4 xl:hidden justify-self-end flex-wrap justify-center items-center mx-10 mt-10">
        <Link
          href="https://wa.me/306974029087"
          className={buttonVariants({ variant: "none" })}
        >
          <FaWhatsapp
            className="text-3xl 2xl:text-4xl ml-1 text-[#25D366]"
            style={{ transition: "filter 0.2s" }}
          />
        </Link>

        <Link
          href="https://www.instagram.com/ctsolutions.gr/"
          className={buttonVariants({ variant: "none" })}
        >
          <FaInstagram
            className="text-3xl 2xl:text-4xl ml-1 fill-ig"
            style={{ transition: "filter 0.2s" }}
          />
        </Link>

        <Link
          href="viber://chat?number=306974029087"
          className={buttonVariants({ variant: "none" })}
        >
          <FaViber
            className="text-3xl 2xl:text-4xl ml-1 text-[#7360f2]"
            style={{ transition: "filter 0.2s" }}
          />
        </Link>
      </div>
      <hr className="mt-10 xl:hidden" />
      <div className="grid grid-rows-1 grid-cols-2">
        <div className="text-nowrap justify-self-start flex-col flex m-10 text-sm md:text-lg lg:text-md">
          <p className="mb-5 xl:mb-0">
            {t("footer-1")}
            <br className="xl:hidden" /> {t("footer-2")}
          </p>
        </div>
        <div className="hidden xl:flex justify-self-end flex-wrap justify-end items-center mr-5">
          <Link
            href="https://wa.me/306974029087"
            className={buttonVariants({ variant: "none" })}
          >
            <FaWhatsapp
              className="text-3xl 2xl:text-4xl ml-1 text-[#25D366]"
              style={{ transition: "filter 0.2s" }}
            />
          </Link>

          <Link
            href="https://www.instagram.com/ctsolutions.gr/"
            className={buttonVariants({ variant: "none" })}
          >
            <FaInstagram
              className="text-3xl 2xl:text-4xl ml-1 fill-ig"
              style={{ transition: "filter 0.2s" }}
            />
          </Link>

          <Link
            href="viber://chat?number=306974029087"
            className={buttonVariants({ variant: "none" })}
          >
            <FaViber
              className="text-3xl 2xl:text-4xl ml-1 text-[#7360f2]"
              style={{ transition: "filter 0.2s" }}
            />
          </Link>
        </div>
      </div>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="svg-settings h-0"
      >
        <defs>
          <linearGradient id="ig-lin">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="25%" stopColor="#e6683c" />
            <stop offset="50%" stopColor="#dc2743" />
            <stop offset="75%" stopColor="#cc2366" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="svg-settings h-0"
      >
        <defs>
          <linearGradient id="fm-lin">
            <stop offset="0%" stopColor="#00c6ff" />
            <stop offset="100%" stopColor="#0078ff" />
          </linearGradient>
        </defs>
      </svg>
    </footer>
  );
}
