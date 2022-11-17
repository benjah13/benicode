import React from "react";
import { useTranslation } from "react-i18next";
import i18n, { getLanguage } from "../../i18n";
import classnames from "classnames";
import Image from "next/image";
import i18next from "i18next";

type LanguageSelectorProps = {};

const LanguageSelector = ({}: LanguageSelectorProps) => {
  const { t } = useTranslation();
  const lang = getLanguage();

  const setLanguage = (lang: string) => i18n.changeLanguage(lang);

  return (
    <div className="flex flex-row gap-1">
      <Image
        src="/uk.png"
        className={classnames(
          "rounded-full w-6 h-6 cursor-pointer",
          lang === "en-US" && "border border-white"
        )}
        alt="English"
        onClick={() => setLanguage("en-US")}
        width={24}
        height={24}
      />
      <Image
        src="/fr.png"
        className={classnames(
          "rounded-full w-6 h-6 cursor-pointer",
          lang === "fr-FR" && "border border-white"
        )}
        alt="French"
        onClick={() => setLanguage("fr-FR")}
        width={24}
        height={24}
      />
    </div>
  );
};

export default LanguageSelector;
