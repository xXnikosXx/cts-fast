// ? Next Imports
import type { Metadata } from "next";

// ? Font Imports
import { JetBrains_Mono } from "next/font/google";

// ? StyleSheet Imports
import "./globals.css";

// ? Components Imports
import CursorFollow from "@/components/CursorFollow";
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/themes/ThemeProvider";
import { DotsMotionBackground } from "@/components/Background";

// ? Localization
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import i18nConfig from "../../../i18nConfig";
import { dir } from "i18next";
const i18nNamespaces = ["home"];
export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}


// ? Font init
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

// ? Layout Metadata
export const metadata: Metadata = {
  title: "Custom Tech Solutions",
  description: "Delivering exceptional IT services to cover any business need.",
};



export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {

  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={jetBrainsMono.className + " bg-s-bg-primary"}>
        <TranslationsProvider
          namespaces={i18nNamespaces}
          locale={locale}
          resources={resources}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* <CursorFollow /> */}
            <NavMenu />
            <DotsMotionBackground>
              {/* <div className="h-[70px]"></div> */}
              {children}
            </DotsMotionBackground>
            <Footer />
          </ThemeProvider>
        </TranslationsProvider>
      </body>
    </html>
  );
}
