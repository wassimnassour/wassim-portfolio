import React from "react";
import { Title } from "../../index";
import DesignIcon from "../../../images/assets/ui.svg";
import FastLearnerIcon from "../../../images/assets/fastLearner.svg";
import CodingIcon from "../../../images/assets/coding.svg";
import SeoIcon from "../../../images/assets/seo.svg";
import { SkillsContainer } from "./skills.style";
import SkillCard from "../skillCard/skillCard";
const Skills = () => {
  const data = [
    {
      name: "Front-End Develompent",
      description:
        "Build Front-End Applications using the latest Tools and Technologies with Best Practices",
      Icon: CodingIcon,
    },
    {
      name: "Ui Design",
      description: "build Good looking user interfaces  ",
      Icon: DesignIcon,
    },
    {
      name: "Seo",
      description:
        "Build Fast and optimize Apps that's respect Search engine rules",
      Icon: SeoIcon,
    },
    {
      name: "Fast Learner",
      description:
        "being self-taught made me good at teaching my self by books, videos, docs, and solve my  problem",
      Icon: FastLearnerIcon,
    },
  ];
  return (
    <SkillsContainer>
      <Title>Skills</Title>
      <div className="skills">
        {data.map(_el => (
          <SkillCard
            name={_el.name}
            description={_el.description}
            Icon={_el.Icon}
          />
        ))}
      </div>
    </SkillsContainer>
  );
};

export default Skills;
