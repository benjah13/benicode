import classNames from "classnames";
import Header from "../components/Header";
import { motion } from "framer-motion";

type EducationItem = {
  title: string;
  description: string;
  establishment: string;
  firstYear: number;
  lastYear: number;
};

const makeEducationItem = (
  title: string,
  description: string,
  establishment: string,
  firstYear: number,
  lastYear: number
): EducationItem => ({
  title,
  description,
  establishment,
  firstYear,
  lastYear,
});

export default function About() {
  const educationItems: EducationItem[] = [
    makeEducationItem(
      "Bachelor of Science in Computer Science",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa, amet quidem vero ipsum distinctio nam error rerum! Nobis, facere dignissimos saepe rem voluptas enim debitis alias ratione voluptatem vitae, totam aut possimus non ipsam eos repellat accusamus iure veritatis tempore similique! Alias debitis quisquam, reprehenderit, praesentium ut suscipit tempora magni atque architecto, aperiam illum? Magnam ea, repudiandae quaerat tenetur sequi harum omnis sed quae nostrum eaque aspernatur neque hic porro beatae quidem repellendus modi quos officiis alias incidunt delectus eligendi dolore. Earum et repudiandae architecto illum ducimus iure culpa quod quasi delectus nulla. Ipsam ipsa magni mollitia sapiente tenetur rerum natus quis officiis nam, vitae iste, hic minus accusamus! Dicta non vel molestias repudiandae natus earum rerum cupiditate explicabo, in labore, similique necessitatibus veniam est sed ipsam aspernatur laboriosam temporibus eius inventore. Voluptatum fugiat blanditiis, assumenda nemo eos molestiae sapiente aliquam? Ipsum quis inventore at dolorem iusto ad! Voluptatem nobis explicabo distinctio asperiores deserunt quibusdam atque sit laboriosam, molestias porro rem nemo nihil, perspiciatis repellendus earum dolorum quaerat assumenda dicta consectetur laborum aperiam. Reprehenderit voluptatum molestiae at, aperiam optio vitae minus id vero vel autem in atque iure cumque? Rem repudiandae vel deserunt modi alias et debitis dolor exercitationem.",
      "University of the Philippines Diliman",
      2016,
      2020
    ),
    makeEducationItem(
      "High School",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa, amet quidem vero ipsum distinctio nam error rerum! Nobis, facere dignissimos saepe rem voluptas enim debitis alias ratione voluptatem vitae, totam aut possimus non ipsam eos repellat accusamus iure veritatis tempore similique! Alias debitis quisquam, reprehenderit, praesentium ut suscipit tempora magni atque architecto, aperiam illum? Magnam ea, repudiandae quaerat tenetur sequi harum omnis sed quae nostrum eaque aspernatur neque hic porro beatae quidem repellendus modi quos officiis alias incidunt delectus eligendi dolore. Earum et repudiandae architecto illum ducimus iure culpa quod quasi delectus nulla. Ipsam ipsa magni mollitia sapiente tenetur rerum natus quis officiis nam, vitae iste, hic minus accusamus! Dicta non vel molestias repudiandae natus earum rerum cupiditate explicabo, in labore, similique necessitatibus veniam est sed ipsam aspernatur laboriosam temporibus eius inventore. Voluptatum fugiat blanditiis, assumenda nemo eos molestiae sapiente aliquam? Ipsum quis inventore at dolorem iusto ad! Voluptatem nobis explicabo distinctio asperiores deserunt quibusdam atque sit laboriosam, molestias porro rem nemo nihil, perspiciatis repellendus earum dolorum quaerat assumenda dicta consectetur laborum aperiam. Reprehenderit voluptatum molestiae at, aperiam optio vitae minus id vero vel autem in atque iure cumque? Rem repudiandae vel deserunt modi alias et debitis dolor exercitationem.",
      "University of the Philippines Diliman",
      2012,
      2016
    ),
    makeEducationItem(
      "Elementary School",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa, amet quidem vero ipsum distinctio nam error rerum! Nobis, facere dignissimos saepe rem voluptas enim debitis alias ratione voluptatem vitae, totam aut possimus non ipsam eos repellat accusamus iure veritatis tempore similique! Alias debitis quisquam, reprehenderit, praesentium ut suscipit tempora magni atque architecto, aperiam illum? Magnam ea, repudiandae quaerat tenetur sequi harum omnis sed quae nostrum eaque aspernatur neque hic porro beatae quidem repellendus modi quos officiis alias incidunt delectus eligendi dolore. Earum et repudiandae architecto illum ducimus iure culpa quod quasi delectus nulla. Ipsam ipsa magni mollitia sapiente tenetur rerum natus quis officiis nam, vitae iste, hic minus accusamus! Dicta non vel molestias repudiandae natus earum rerum cupiditate explicabo, in labore, similique necessitatibus veniam est sed ipsam aspernatur laboriosam temporibus eius inventore. Voluptatum fugiat blanditiis, assumenda nemo eos molestiae sapiente aliquam? Ipsum quis inventore at dolorem iusto ad! Voluptatem nobis explicabo distinctio asperiores deserunt quibusdam atque sit laboriosam, molestias porro rem nemo nihil, perspiciatis repellendus earum dolorum quaerat assumenda dicta consectetur laborum aperiam. Reprehenderit voluptatum molestiae at, aperiam optio vitae minus id vero vel autem in atque iure cumque? Rem repudiandae vel deserunt modi alias et debitis dolor exercitationem.",
      "University of the Philippines Diliman",
      2006,
      2012
    ),
    makeEducationItem(
      "Pre-School",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa, amet quidem vero ipsum distinctio nam error rerum! Nobis, facere dignissimos saepe rem voluptas enim debitis alias ratione voluptatem vitae, totam aut possimus non ipsam eos repellat accusamus iure veritatis tempore similique! Alias debitis quisquam, reprehenderit, praesentium ut suscipit tempora magni atque architecto, aperiam illum? Magnam ea, repudiandae quaerat tenetur sequi harum omnis sed quae nostrum eaque aspernatur neque hic porro beatae quidem repellendus modi quos officiis alias incidunt delectus eligendi dolore. Earum et repudiandae architecto illum ducimus iure culpa quod quasi delectus nulla. Ipsam ipsa magni mollitia sapiente tenetur rerum natus quis officiis nam, vitae iste, hic minus accusamus! Dicta non vel molestias repudiandae natus earum rerum cupiditate explicabo, in labore, similique necessitatibus veniam est sed ipsam aspernatur laboriosam temporibus eius inventore. Voluptatum fugiat blanditiis, assumenda nemo eos molestiae sapiente aliquam? Ipsum quis inventore at dolorem iusto ad! Voluptatem nobis explicabo distinctio asperiores deserunt quibusdam atque sit laboriosam, molestias porro rem nemo nihil, perspiciatis repellendus earum dolorum quaerat assumenda dicta consectetur laborum aperiam. Reprehenderit voluptatum molestiae at, aperiam optio vitae minus id vero vel autem in atque iure cumque? Rem repudiandae vel deserunt modi alias et debitis dolor exercitationem.",
      "Major in Science",
      2000,
      2025
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
                <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  Latest
                </span>
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.firstYear} - {item.lastYear}
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
