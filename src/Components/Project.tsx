import React from "react";

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
        <h2 className="font_2">{projectHead}</h2>
        <p className="font_2">{projectDetails}</p>
      </div>

      <img src={coverImg} alt="project-1" />
    </article>
  );
}

export default Project;
