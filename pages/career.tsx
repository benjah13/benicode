import classNames from "classnames";
import Header from "../components/Header";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type EducationItem = {
  title: string;
  description: string;
  establishment: string;
  firstYear: number;
  lastYear: number;
  grade?: string;
};

const makeEducationItem = (
  title: string,
  description: string,
  establishment: string,
  firstYear: number,
  lastYear: number,
  grade?: string
): EducationItem => ({
  title,
  description,
  establishment,
  firstYear,
  lastYear,
  grade,
});

export default function About() {
  const { t } = useTranslation();
  const educationItems: EducationItem[] = [
    makeEducationItem(
      t("education.sicom.title"),
      t("education.sicom.description"),
      t("education.sicom.establishment"),
      2012,
      2015,
      t("education.sicom.grade")
    ),
    makeEducationItem(
      t("education.glasgow.title"),
      t("education.glasgow.description"),
      t("education.glasgow.establishment"),
      2014,
      2014
    ),
  ];

  return (
    <div className="bg-background w-full h-screen">
      <Header />
      <div className="flex w-lg p-8 justify-center items-center">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {educationItems.map((item) => (
            <motion.li
              key={item.title}
              className="mb-10 ml-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-blue-600 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.firstYear} - {item.lastYear}
                {item.grade && (
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                    {item.grade}
                  </span>
                )}
              </time>
              <p className="mb-4 max-w-xl text-base font-normal text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
}
