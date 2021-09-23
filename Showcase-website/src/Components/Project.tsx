import React from "react";

interface props {
  projectHead: string;
  key: number;
  projectDetails: string;
  coverImg: string;
  projectLinks: any;
}

function Project({
  projectHead,
  key,
  projectDetails,
  coverImg,
  projectLinks,
}: props) {
  return (
    <article className="project_wrapper">
      <h2 className='font_2'>{projectHead}</h2>
      <p className='font_2'>{projectDetails}</p>
    </article>
  );
}

export default Project;