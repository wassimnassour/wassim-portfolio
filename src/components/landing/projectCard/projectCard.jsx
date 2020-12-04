import React from "react";
import { FaRegStar, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { AiOutlineFork } from "react-icons/ai";
import { Project, LinksWrapper, ProjectDetails } from "./projectCard.style";
const ProjectCard = ({
	name,
	stars,
	githubUrl,
	url,
	primaryLanguage,
	forkCount,
	description,
}) => {
	return (
		<Project primaryLanguage={primaryLanguage}>
			<span className="language">{primaryLanguage}</span>
			<h1>{name}</h1>
			<div className="project">
				<ProjectDetails>
					<span>
						{stars}
						<FaRegStar />
					</span>
					<span>
						{forkCount}
						<AiOutlineFork />
					</span>
				</ProjectDetails>

				<LinksWrapper>
					<a href={githubUrl} target="_blank" rel="noreferrer">
						<FaGithub />
					</a>
					{url ? (
						<a href={url} target="_blank" rel="noreferrer">
							<FaExternalLinkAlt />
						</a>
					) : null}
				</LinksWrapper>
			</div>
		</Project>
	);
};

export default ProjectCard;
