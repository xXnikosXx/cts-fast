"use client"

// * React Imports
import React from "react";
import { useEffect, useState, useRef } from "react"


// * Framer Motion Imports
import { AnimatePresence } from "framer-motion";
import { motion, useScroll, useTransform } from "framer-motion";


// * Next Imports
import Image from "next/image";
import Link from "next/link";


// * SHADCN/UI Imports
import { buttonVariants } from "@/components/ui/button";


// * i18n Imports
import { useTranslation } from "react-i18next";


// * Components Imports
import Preloader from "@/components/Preloader"
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { NewsletterSignup } from "@/components/NewsletterSignuo";
import { HomeMeteorsCard } from "@/components/MeteorsCard";
import { Map } from "@/components/Map";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RocketIcon } from "@radix-ui/react-icons";
import { HoverEffect } from "@/components/ui/card-hover-effect";


export default function Home() {
  // ? Localization
  const { t } = useTranslation();

  // ? useState used for the Preloader
  const [isLoading, setIsLoading] = useState(true);


  // ? This useEffect asynchronously imports the `locomotive-scroll` library, creates a new instance of
  // ? `LocomotiveScroll` and runs this setup logic when the component mounts. Since it has an empty dependency
  // ? array, it only runs once when the component mounts.
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default
        const locomotiveScroll = new LocomotiveScroll();

        // ? set isLoading state to false (removing the preloader) after 2000ms.
        setTimeout( () => {
          setIsLoading(false);
          document.body.style.cursor = "default";
          window.scrollTo(0,0);
        }, 2000)

      }
    )()
  }, [])


  // ? Code below used for circle container (see before footer)

      const container = useRef(null);
      const { scrollYProgress } = useScroll({
        target: container,

        offset: ["start end", "end start"],
      });
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  // Code for alert
  const [showAlert, setShowAlert] = useState(true);

  const services = [
    {
      title: t("s2-1-title"),
      description:
        t("s2-1-p"),
      link: "",
    },
    {
      title: t("s2-2-title"),
      description:
        t("s2-2-p"),
      link: "",
    },
    {
      title: t("s2-3-title"),
      description: t("s2-3-p"),
      link: "",
    },
    {
      title: t("s2-4-title"),
      description: t("s2-4-p"),
      link: "",
    },
    {
      title: t("s2-5-title"),
      description: t("s2-5-p"),
      link: "",
    },
    {
      title: t("s2-6-title"),
      description: t("s2-6-p"),
      link: "",
    },
  ];

  return (
    <>
      {/* AnimatePresence */}
      <AnimatePresence mode="wait">
        {/* Render the `Preloader` component if isLoading is true. */}
        {isLoading && <Preloader />}
      </AnimatePresence>
      <main className="relative z-10">
        {/* Under Construction Alert */}
        {showAlert ? (
          <Alert className="top-[70px] absolute bg-p-neutral-darker z-50 flex flex-row items-center">
            <RocketIcon className="h-4 w-4" />
            <AlertDescription className="mt-1">
              {t("alertMsg")}
            </AlertDescription>
            <Link
              href=""
              onClick={() => {
                setShowAlert(false);
              }}
              className={
                buttonVariants({ variant: "none" }) +
                " ml-auto text-xl text-red-500 hover:cursor-pointer"
              }
            >
              &#10006;
            </Link>
          </Alert>
        ) : (
          ""
        )}

        {/* Above the Fold */}
        <section className="flex flex-col xl:flex-row column-2 h-screen items-center">
          <div className="text-wrap mx-auto mt-[200px] xl:mt-0 xl:pl-10 flex flex-col justify-start">
            <HeroHighlight>
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: [20, -5, 0],
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0.0, 0.2, 1],
                  delay: 2.7,
                }}
                className="pl-10 lg:pl-0 text-4xl lg:text-5xl font-bold max-w-4xl leading-normal lg:leading-snug mb-5"
              >
                {t("hero1")} <br />
                <Highlight className="text-black dark:text-white">
                  {t("hero2")}
                </Highlight>{" "}
                {t("hero3")} <br /> {t("hero4")}
              </motion.h1>
            </HeroHighlight>
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
                delay: 2.7,
              }}
              className="px-10 lg:px-0 text-xl mb-10"
            >
              {t("hero-sub-1")} <br /> {t("hero-sub-2")} <br />{" "}
              {t("hero-sub-3")}
            </motion.p>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
                delay: 2.7,
              }}
              className="px-10 lg:px-0 flex justify-start"
            >
              <Link
                href="/contact"
                className={buttonVariants({ variant: "accent" })}
              >
                {t("hero-cta")}
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
              delay: 2.7,
            }}
            className="flex mx-auto relative top-[-220px] xl:top-0"
          >
            <ContainerScroll titleComponent={<></>}>
              <Image
                src={`/linear.jpg`}
                alt="hero"
                height={720}
                width={1400}
                className="mx-auto rounded-2xl object-cover h-full object-left-top"
                draggable={false}
              />
            </ContainerScroll>
          </motion.div>
        </section>

        <div className="h-[400px] md:h-[500px] xl:hidden"></div>
        {/* Below the Fold */}
        {/*  */}
        {/* IT Support Section */}
        <section className="mb-32">
          <div className="flex column-2 items-center flex-col-reverse lg:flex-row">
            <div className="lg:w-[50%] w-full flex justify-center">
              <HomeMeteorsCard />
            </div>
            <div className="px-5 mb-20 text-wrap w-[90%] lg:w-[50%]">
              <h6>{t("s1-sub")}</h6>
              <h1 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                {t("s1-title")}
              </h1>
              <p className="text-lg lg:text-2xl mb-12">{t("s1-p")}</p>
              <div className="flex flex-col md:flex-row column-2 mb-12">
                <div className="mb-10 md:mb-0">
                  <h4 className="text-2xl font-bold mb-3">{t("s1-1-title")}</h4>
                  <p className="mr-10">{t("s1-1-p")}</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-3">{t("s1-2-title")}</h4>
                  <p className="mr-10">{t("s1-2-p")}</p>
                </div>
              </div>
              <div className="flex column-2">
                <Link
                  href="/contact"
                  className={buttonVariants({ variant: "outline" })}
                >
                  {t("s1-cta")}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="h-[500px] xl:hidden"></div> */}
        {/*  */}
        {/* More Services Section */}
        <section className="mb-32">
          <div className="columns-1 text-center p-10 lg:p-0">
            <h6 className="text-lg font-semibold mb-5">{t("s2-sub")}</h6>
            <h1 className="text-4xl lg:text-5xl font-bold mb-10">
              {t("s2-title")} <br /> {t("s2-title-2")}
            </h1>
            <p className="text-lg lg:text-2xl lg:mb-24">
              {t("s2-p")} <br /> {t("s2-p-2")} <br /> {t("s2-p-3")}
            </p>
          </div>
            <HoverEffect items={services} />
          <div className="flex justify-center column-2">
            <Link
              href="/contact"
              className={buttonVariants({ variant: "outline", size: "xl" })}
            >
              {t("s2-cta")}
            </Link>
          </div>
        </section>


        {/*  */}
        {/* Newsletter Signup Form */}
        <section className="relative mb-32 w-[90vw] left-[5vw] border-4 border-p-brand-grey bg-s-bg-primary">
          <NewsletterSignup />
        </section>

        {/*  */}
        {/* Contact Info Section */}
        <section className="p-16">
          <div className="mb-24">
            <h6 className="text-md mb-5">{t("s3-sub")}</h6>
            <h1 className="text-4xl lg:text-5xl font-bold mb-5">
              {t("s3-title")} <br className="md:hidden" /> {t("s3-title-2")}
            </h1>
            <p className="text-lg">{t("s3-p")}</p>
          </div>
          <div className="flex flex-col xl:flex-row">
            <div className="flex flex-col flex-1">
              <div className="flex-1 mb-10">
                <h2 className="text-2xl font-semibold mb-3">
                  {t("s3-1-title")}
                </h2>
                <p className="text-lg mb-3">{t("s3-1-p")}</p>
                <Link
                  href="mailto://hello@ctsolutions.gr/"
                  className={buttonVariants({
                    variant: "linkTealLg",
                    size: "none",
                  })}
                >
                  {t("s3-1-link")}
                </Link>
              </div>
              <div className="flex-1 mb-10">
                <h2 className="text-2xl font-semibold mb-3">
                  {t("s3-2-title")}
                </h2>
                <p className="text-lg mb-3">{t("s3-2-p")}</p>
                <Link
                  href="tel://00302105621995"
                  className={buttonVariants({
                    variant: "linkTealLg",
                    size: "none",
                  })}
                >
                  {t("s3-2-link")}
                </Link>
              </div>
              <div className="flex-1 mb-10">
                <h2 className="text-2xl font-semibold mb-3">
                  {t("s3-3-title")}
                </h2>
                <p className="text-lg mb-3">
                  {t("s3-3-p")}
                  <br /> {t("s3-3-p-2")}
                </p>
                <Link
                  href="https://maps.app.goo.gl/9i98NaRodMhk9gj36"
                  className={buttonVariants({
                    variant: "linkTealLg",
                    size: "none",
                  })}
                >
                  {t("s3-3-link")}
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <Map />
            </div>
          </div>
        </section>

        {/*  */}
        {/* Circle Container */}
      </main>
    </>
  );

}