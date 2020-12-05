import React from "react";
import Fade from "react-reveal/Fade";

import { Title } from "../../index";
import { SkillsContainer } from "./skills.style";
import SkillCard from "../skillCard/skillCard";
import { data } from "../../../constants/skillsCard";
const Skills = () => {
  return (
    <SkillsContainer>
      <Fade right distance="80px">
        <Title>Skills</Title>
        <div className="skills">
          {data.map(_el => (
            <SkillCard
              key={_el.id}
              post={_el.id}
              name={_el.name}
              description={_el.description}
              Icon={_el.Icon}
            />
          ))}
        </div>
      </Fade>
    </SkillsContainer>
  );
};

export default Skills;
