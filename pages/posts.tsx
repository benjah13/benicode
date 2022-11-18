import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
type Post = {
  title: string;
  image: string;
  url: string;
};

export default function Posts() {
  const { t } = useTranslation();
  const posts: Post[] = [
    {
      title:
        "Construire une API pour les architectures orientées microservices avec Apollo Federation",
      image: "/frontendfirst.webp",
      url: "https://tech.gojob.com/frontend-first/",
    },
    {
      title:
        "Construire une API pour les architectures orientées microservices avec Apollo Federation",
      image: "/apollo-federation.webp",
      url: "https://tech.gojob.com/apollo-federation/",
    },
  ];

  return (
    <div className="bg-background w-full h-screen">
      <Header />
      <div className="w-full h-full gap-8 pt-8 flex flex-col items-center font-bold text-white text-lg px-8">
        {t("postPageDescription")}
        <div className=" flex flex-row items-center justify-evenly">
          {posts.map((post) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={post.title}
              className="bg-white border w-1/3 border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <a href={post.url}>
                <img className="rounded-t-lg w-full" src={post.image} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {post.title}
                  </h5>
                </a>
                <a
                  href={post.url}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <span>{t("readMore")}</span>

                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <span className="text-sm">{t("englishSorry")}</span>
      </div>
    </div>
  );
}
