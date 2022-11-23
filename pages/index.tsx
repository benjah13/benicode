import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import { motion } from "framer-motion";
import React from "react";
import Skills from "../components/Skills";
import ShortDescription from "../components/ShortDescription";

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
        <div className="bg-blue-300 overflow-hidden relative  h-100 mx-auto z-0 px-4 items-center lg:justify-center sm:px-6 lg:h-screen lg:items-center lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row items-center">
            <img
              src="/logo2.png"
              className="z-0 w-1/2 md:mt-24 scale-125 md:w-100 hidden md:block"
            />
            <div className="flex flex-col grow w-full pt-12 md:pt-0 justify-center items-center gap-12 sm:text-left ">
              <h1 className="text-center w-full text text-3xl uppercase font-extrabold ">
                {`salut, moi c'est `}
                <span className="text-blueHighlight">BULEON Benjamin</span>
                👋
              </h1>
              <div className="w-full pt-8 md:pt-0 flex items-center justify-center">
                <div className="relative bg-vscode-background rounded-xl overflow-hidden ">
                  <div className="w-full h-10 bg-vscode-header"></div>
                  <div className="w-4 z-1 h-4 left-2 top-3  absolute rounded-full bg-vscode-red"></div>
                  <div className="w-4 z-1 h-4 left-8 top-3  absolute rounded-full bg-vscode-grey"></div>
                  <div className="w-4 z-1 h-4 left-14 top-3  absolute rounded-full bg-vscode-green"></div>
                  <div className="text-white text-lg md:text-2xl font-mono m-2">
                    <span className="text-vscode-greyTag">&#10094;</span>
                    <span className="text-vscode-blueTag">h1</span>
                    <span className="text-vscode-greyTag"> &#10095;</span>
                    {<br />}
                    &nbsp;&nbsp;
                    <span className="text-vscode-greyTag">&#10094;</span>
                    <span className="text-vscode-blueTag">
                      SeniorFullStackSoftwareEngineer
                    </span>
                    <span className="text-vscode-greyTag"> /&#10095;</span>
                    {<br />}
                    <span className="text-vscode-greyTag">&#10094;/</span>
                    <span className="text-vscode-blueTag">h1</span>
                    <span className="text-vscode-greyTag">&#10095;</span>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/logo2.png"
              className="z-0 w-2/3 md:-mt-24 md:w-100 scale-110 md:hidden"
            />
          </div>
        </div>
      </motion.section>
      <ShortDescription />
      <Skills />
    </div>
  );
}
