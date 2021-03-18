import React from "react";

import { Title } from "../../index";
import { SkillsContainer } from "./skills.style";
import SkillCard from "../skillCard/skillCard";
import { data } from "../../../constants/skillsCard";
const Skills = () => {
  return (
    <SkillsContainer>
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
    </SkillsContainer>
  );
};

export default Skills;
