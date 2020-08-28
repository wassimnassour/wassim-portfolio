import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Title, CustomButton } from "../../index";
import { SkillsContainer } from "./skills.style";
const Skills = () => {
  const data = useStaticQuery(graphql`
    {
      problem: file(relativePath: { eq: "problemsolving.svg" }) {
        name
        publicURL
      }
      frontend: file(relativePath: { eq: "frontend.svg" }) {
        name
        publicURL
      }
      learning: file(relativePath: { eq: "learning.svg" }) {
        name
        publicURL
      }
    }
  `);

  return (
    <SkillsContainer>
      <Title>Skills</Title>
      <div className="skills">
        <div className="skill">
          <img src={data.frontend.publicURL} alt={data.frontend.name} />
          <h2>Frontend Developer</h2>
        </div>
        <div className="skill">
          <img src={data.problem.publicURL} alt={data.problem.name} />
          <h2>Problem Solving</h2>
        </div>{" "}
        <div className="skill">
          <img src={data.learning.publicURL} alt={data.learning.name} />
          <h2>Fast Learner</h2>
        </div>
      </div>
    </SkillsContainer>
  );
};

export default Skills;
