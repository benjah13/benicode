import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import { motion } from "framer-motion";

type NavBarItem = {
  path: string;
  name: string;
};

export default function Header({ className }: { className?: string }) {
  const [navbar, setNavbar] = useState(false);

  const { t } = useTranslation();
  const router = useRouter();

  const navBarItems: NavBarItem[] = [
    { path: "/", name: t("home") },
    { path: "/about", name: t("about") },
    { path: "/career", name: t("career") },
    { path: "/posts", name: t("posts") },
    { path: "/contact", name: t("contact") },
  ];

  return (
    <nav className={classNames("w-full bg-white ", className)}>
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 z-10">
        <div>
          <div className="flex flex-row items-center justify-between py-3 md:py-5 md:block">
            <h2 className="text-2xl font-bold text">BeniCode</h2>

            <div className="md:hidden">
              <button
                className="p-2 text rounded-md outline-none"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 flex-row justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {navBarItems.map((item) => {
                const active = router.pathname == item.path;
                return (
                  <>
                    <li
                      key={item.path}
                      className={classNames(
                        "relative text hover:text-lightBlue",
                        router.pathname == item.path ? "text-lightBlue" : ""
                      )}
                    >
                      <Link href={item.path}>{item.name}</Link>{" "}
                      {active ? (
                        <motion.div
                          layoutId="navbar-items"
                          className="absolute -bottom-2 left-0 right-0 h-[1px] w-24 md:w-full bg-lightBlue"
                        />
                      ) : null}
                    </li>
                  </>
                );
              })}

              <LanguageSelector />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
