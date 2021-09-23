import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

interface props {
  projectHead: string;
  projectDetails: string;
  coverImg: string;
  projectLinks: any;
}

function Project({
  projectHead,
  projectDetails,
  coverImg,
  projectLinks,
}: props) {
  return (
    <article className="project_wrapper shadow">
      <div className="details">
        <h2 className="font_2 ">{projectHead}</h2>
        <p className="font_2">{projectDetails}</p>
        <div className="links">
          <a
            href={projectLinks.githubRepoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href={projectLinks.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink />
          </a>
        </div>
      </div>

      <img src={coverImg} alt="project-1" />
    </article>
  );
}

export default Project;
