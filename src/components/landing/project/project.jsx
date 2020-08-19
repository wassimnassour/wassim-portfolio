import React, { useEffect, useState } from "react";
import { Title } from "../../utilityStyle";
import { ProjectSectionContainer, ProjectWrapper } from "./project.style";
import { useStaticQuery, graphql } from "gatsby";
import { CustomButton } from "../../index";
import { FaGithub, FaRegStar } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { AiOutlineFork } from "react-icons/ai";

const Project = () => {
  const [GithubData, setGithubData] = useState("");
  useEffect(() => {
    //fetch repos from github
    async function fetchData() {
      const res = await fetch(
        "https://api.github.com/users/wassimnassour/repos"
      );
      const data = await res.json();
      setGithubData(data);
    }
    fetchData();
  }, []);

  return (
    <ProjectSectionContainer>
      <Title> Projects</Title>
      <ProjectWrapper>
        {GithubData
          ? GithubData.map(repo => (
              <a href={repo.html_url} key={repo.id}>
                <div className="project">
                  <h1>{repo.name}</h1>
                  <div className="about-project">
                    <div className="infos">
                      {" "}
                      <span>
                        {repo.stargazers_count}
                        <FaRegStar />
                      </span>
                      <span>
                        {repo.forks}
                        <AiOutlineFork />
                      </span>
                    </div>
                    <span className="language">
                      {repo.language === "JavaScript" ? (
                        <DiJavascript1 />
                      ) : (
                        "not"
                      )}
                    </span>
                  </div>
                </div>
              </a>
            ))
          : "loading"}
      </ProjectWrapper>
      <CustomButton color="blue" content="See more" url="/project" />
    </ProjectSectionContainer>
  );
};

export default Project;
