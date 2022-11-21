import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import { motion } from "framer-motion";
import React from "react";
import { Cloud, renderSimpleIcon, fetchSimpleIcons } from "react-icon-cloud";
import Skills from "../components/Skills";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="bg-background z-10 w-full h-screen">
      <Header />
      <motion.section
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-blue-300  overflow-hidden   relative h-100 mx-auto z-0 px-4 items-center lg:justify-center sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row items-center">
            <img
              src="/logo2.png"
              className="z-0 w-1/2 md:mt-24 scale-125 md:w-100 invisible md:visible"
            />
            <div className="flex flex-col justify-center items-center text-center sm:text-left ">
              <h1 className="text-3xl -mt-24 md:mt-0 text font-extrabold sm:text-5xl">
                Buléon Benjamin
                <strong className="text-2xl sm:text-5xl block font-extrabold text-rose ">
                  {`<Fullstack Software Engineer />`}
                </strong>
              </h1>
              <p className="mt-4 text max-w-lg sm:text-xl sm:leading-relaxed">
                {t("herosub")}
              </p>
            </div>
            <img
              src="/logo2.png"
              className="z-0 w-2/3 md:-mt-24 md:w-100 scale-110 md:invisible"
            />
          </div>
        </div>
      </motion.section>
      <Skills />
    </div>
  );
}
