import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import { motion } from "framer-motion";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="bg-background w-full h-screen">
      <Header />
      <motion.section
        className="relative bg-[url(/hero.jpeg)] bg-cover bg-center bg-no-repeat"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-background/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-background/50 sm:to-background/25"></div>

        <div className="relative h-100 mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
              Buléon Benjamin
              <strong className="text-2xl sm:text-5xl block font-extrabold text-rose ">
                {`<Fullstack Software Engineer />`}
              </strong>
            </h1>

            <p className="mt-4 text-white max-w-lg sm:text-xl sm:leading-relaxed">
              {t("herosub")}
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
