import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { CuGlobe } from "@/components/CuGlobe";
import ContactForm from "@/components/ContactForm";
import ThreeColLayout from "@/components/ThreeColLayout";

export default function Contact() {
    return (
      <main className="relative z-10">
        <div className="mb-[70px]"></div>
        <section className="pt-10" id="contactForm">
          <ThreeColLayout />
        </section>
        <section className="pt-10">
          <ContactForm />
        </section>
      </main>
    );
}