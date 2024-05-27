"use client"
import React from "react";

import { HoverEffectLi } from "@/components/ui/card-hover-effect-li";
import { useTranslation } from "react-i18next";


interface ColumnProps {
  title: string;
  content: string;
  linkText: string;
  linkHref: string;
}

const Column: React.FC<ColumnProps> = ({
  title,
  content,
  linkText,
  linkHref,
}) => (
  <div className="p-4">
    <h1 className="text-xl font-bold mb-2">{title}</h1>
    <p className="mb-4">{content}</p>
    <a href={linkHref} className="text-p-brand-teal hover:underline">
      {linkText}
    </a>
  </div>
);

const ThreeColLayout: React.FC = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      title: t("email"),
      description: t("email-p"),
      link: "mailto:hello@ctsolutions.gr",
      linkPreview: t("email-link"),
    },
    {
      title: t("phone"),
      description: t("phone-p"),
      link: "tel:+306974029087",
      linkPreview: t("phone-link"),
    },
    {
      title: t("office"),
      description: t("office-p"),
      link: "https://maps.app.goo.gl/9i98NaRodMhk9gj36",
      linkPreview: t("office-link"),
    },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-center items-center gap-20">
        <Column
          title={t("email")}
          content={t("email-p")}
          linkText={t("email-link")}
          linkHref="mailto:info@ctsolutions.gr"
        />
        <Column
          title={t("phone")}
          content={t("phone-p")}
          linkText={t("phone-link")}
          linkHref="tel:+306974029087"
        />
        <Column
          title={t("office")}
          content={t("office-p")}
          linkText={t("office-link")}
          linkHref="https://maps.app.goo.gl/9i98NaRodMhk9gj36"
        />
      </div> */}
      <HoverEffectLi items={contactInfo} />
    </div>
  );
};

export default ThreeColLayout;
