import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { FaGithub, FaInstagram, FaWhatsapp, FaEnvelopeOpenText, FaPhone, FaLinkedinIn } from "react-icons/fa";

export default function Reflect() {

  return (
    <main className="relative z-10">
      <div className="pt-[100px] pb-10 px-12 flex justify-center items-center flex-col gap-7">
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="Nikolaos Motos"
          />
          <AvatarFallback>NM</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-bold">Nikolaos Motos</h1>
        <p className="pl-2">
          I'm Nikos, a student and business owner from Greece! I came @ Reflect
          in order to meet new, interesting people, make connections with
          like-minded individuals, learn new things and exchanges ideas.
        </p>
        <Link
          className="transition md:w-[420px] w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-black hover:scale-95 relative"
          target="_blank"
          href="https://www.instagram.com/nikolas_motos/"
        >
          <FaInstagram className="absolute left-6 h-5 w-5" /> Instagram
        </Link>
        <Link
          className="transition md:w-[420px] w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-black hover:scale-95 relative"
          target="_blank"
          href="https://wa.me/306974029087"
        >
          <FaWhatsapp className="absolute left-6 h-5 w-5" /> Whatsapp
        </Link>
        <Link
          className="transition md:w-[420px] w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-black hover:scale-95 relative"
          target="_blank"
          href="mailto:nmotos@ctsolutions.gr"
        >
          <FaEnvelopeOpenText className="absolute left-6 h-5 w-5" /> Email
        </Link>
        <Link
          className="transition md:w-[420px] w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-black hover:scale-95 relative"
          target="_blank"
          href="tel://+306974029087"
        >
          <FaPhone className="absolute left-6 h-5 w-5" /> Phone Number
        </Link>
        <Link
          className="transition md:w-[420px] w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-black hover:scale-95 relative"
          target="_blank"
          href="https://www.linkedin.com/in/nikosmotos/"
        >
          <FaLinkedinIn className="absolute left-6 h-5 w-5" /> LinkedIn
        </Link>
        <Link
          className="transition md:w-[420px] w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-black hover:scale-95 relative"
          target="_blank"
          href="https://github.com/xxnikosxx"
        >
          <FaGithub className="absolute left-6 h-5 w-5" /> Github
        </Link>
      </div>
    </main>
  );
}