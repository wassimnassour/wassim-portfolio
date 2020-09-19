import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FaRegStar, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { Title } from "../../utilityStyle";
import { ProjectSectionContainer, ProjectWrapper } from "./project.style";
import { CustomButton } from "../../index";

const Project = () => {
  const data = useStaticQuery(graphql`
    {
      githubData {
        data {
          user {
            repositories {
              edges {
                node {
                  homepageUrl
                  name
                  primaryLanguage {
                    name
                  }
                  stargazers {
                    totalCount
                  }
                  url
                }
              }
            }
          }
        }
      }
    }
  `);
  const {
    githubData: {
      data: {
        user: {
          repositories: { edges },
        },
      },
    },
  } = data;

  return (
    <ProjectSectionContainer>
      <Title> Projects</Title>
      <ProjectWrapper>
        {edges.map(({ node }) => {
          console.log(node);
          return (
            <div className="project" key={node.id}>
              <h1>{node.name}</h1>
              <div className="about-project">
                <div className="infos">
                  {" "}
                  <span>
                    {node.stargazers.totalCount}
                    <FaRegStar />
                  </span>
                </div>

                <a href={node.url}>
                  <FaGithub />
                </a>
                {node.homepageUrl ? (
                  <a href={node.homepageUrl}>
                    <FaExternalLinkAlt />
                  </a>
                ) : null}
              </div>
            </div>
          );
        })}
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
