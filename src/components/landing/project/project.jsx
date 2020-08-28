import React, { useEffect, useState } from "react";
import { Title } from "../../utilityStyle";
import { ProjectSectionContainer, ProjectWrapper } from "./project.style";

import { CustomButton } from "../../index";
import { FaRegStar } from "react-icons/fa";
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
              <div className="project" key={repo.id}>
                <a href={repo.html_url}>
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
                </a>
              </div>
            ))
          : "loading"}
      </ProjectWrapper>
      <CustomButton
        color="black"
        content="See more"
        url="https://github.com/wassimnassour"
      />
    </ProjectSectionContainer>
  );
};

export default Project;
