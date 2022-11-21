import React from "react";

import { motion } from "framer-motion";
import classNames from "classnames";

enum SkillType {
  BACKEND = "BACKEND",
  FRONTEND = "FRONTEND",
  DEVOPS = "DEVOPS",
}

type Skill = {
  name: string;
  url: string;
  categories: SkillType[];
};
const allSkills: Skill[] = [
  {
    url: "/skills/kubernetes.png",
    name: "Kubernetes",
    categories: [SkillType.DEVOPS],
  },
  {
    url: "/skills/postgres.png",
    name: "PostgreSQL",
    categories: [SkillType.DEVOPS],
  },
  {
    url: "/skills/react.svg",
    name: "ReactJS",
    categories: [SkillType.FRONTEND],
  },
  { url: "/skills/vuejs.png", name: "VueJS", categories: [SkillType.FRONTEND] },
  {
    url: "/skills/nestjs.svg",
    name: "NestJS",
    categories: [SkillType.BACKEND],
  },
  {
    url: "/skills/GraphQL.svg",
    name: "GraphQL",
    categories: [SkillType.BACKEND, SkillType.FRONTEND],
  },
  { url: "/skills/css.png", name: "CSS3", categories: [SkillType.FRONTEND] },
  { url: "/skills/html.png", name: "HTML5", categories: [SkillType.FRONTEND] },
  {
    url: "/skills/js.svg",
    name: "Javascript",
    categories: [SkillType.FRONTEND, SkillType.BACKEND],
  },
  {
    url: "/skills/ts.svg",
    name: "Typescript",
    categories: [SkillType.FRONTEND, SkillType.BACKEND],
  },
  {
    url: "/skills/tailwind.svg",
    name: "TailwindCSS",
    categories: [SkillType.FRONTEND],
  },
  {
    url: "/skills/mongodb.svg",
    name: "MongoDB",
    categories: [SkillType.BACKEND],
  },
  {
    url: "/skills/nodejs.png",
    name: "Nodejs",
    categories: [SkillType.BACKEND],
  },
  { url: "/skills/git.png", name: "Git", categories: [SkillType.DEVOPS] },
  { url: "/skills/gitlab.png", name: "Gitlab", categories: [SkillType.DEVOPS] },
  { url: "/skills/github.png", name: "Github", categories: [SkillType.DEVOPS] },
  { url: "/skills/java.svg", name: "Java", categories: [SkillType.BACKEND] },
];

enum SkillTypeEnum {
  BACKEND = "backend",
  FRONTEND = "frontend",
  DEVOPS = "devops",
}

const Skills = () => {
  const [skills, setSkills] = React.useState<SkillTypeEnum>(
    SkillTypeEnum.FRONTEND
  );

  const getIcons = () => {
    switch (skills) {
      case SkillTypeEnum.BACKEND:
        return allSkills.filter((skill) =>
          skill.categories.includes(SkillType.BACKEND)
        );
      case SkillTypeEnum.FRONTEND:
        return allSkills.filter((skill) =>
          skill.categories.includes(SkillType.FRONTEND)
        );
      case SkillTypeEnum.DEVOPS:
        return allSkills.filter((skill) =>
          skill.categories.includes(SkillType.DEVOPS)
        );
      default:
        return allSkills;
    }
  };

  const icons = [...getIcons()];

  return (
    <div className="w-full flex justify-center flex-col gap-2 p-8  -skew-y-3">
      <div className="skew-y-3 flex flex-col justify-center w-full">
        <span className="w-100 text-center">Mes compétances</span>
        <div className="w-full flex flex-row gap-2 p-8 justify-center items-center">
          <button
            className={classNames(
              "p-2 w-48 rounded-lg",
              skills === SkillTypeEnum.BACKEND ? "bg-rose" : "bg-blue-500"
            )}
            onClick={() => setSkills(SkillTypeEnum.BACKEND)}
          >
            backend
          </button>
          <button
            className={classNames(
              "p-2 w-48 rounded-lg",
              skills === SkillTypeEnum.FRONTEND ? "bg-rose" : "bg-blue-500"
            )}
            onClick={() => setSkills(SkillTypeEnum.FRONTEND)}
          >
            frontend
          </button>
          <button
            className={classNames(
              "p-2 w-48 rounded-lg",
              skills === SkillTypeEnum.DEVOPS ? "!bg-rose" : "bg-blue-500"
            )}
            onClick={() => setSkills(SkillTypeEnum.DEVOPS)}
          >
            Devops
          </button>
        </div>
        <div className="flex flew-row justify-center p-4 flex-wrap  gap-4">
          {icons.map((icon) => (
            <motion.div
              className="w-12 md:w-24 rounded flex flex-col gap-2 items-center p-4"
              key={icon.name}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-12 md:h-24 w-12 md:w-24 flex justify-center items-center">
                <img
                  className="h-12 md:h-24 w-12 md:w-24"
                  src={icon.url}
                  alt={icon.name}
                />
              </div>
              <h2 className="text text-xs md:text-md">{icon.name}</h2>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Skills;
