import React from "react";
import Project from "./Project";
import ProjectsData from "./ProjectsData";

function Works() {
  return (
    <section id='showcase'>
      <div className="wrapper">

      <h2 className="section_head font_2">Recent Works:</h2>
      <div className="projects">
        {ProjectsData.map((data) => {
          return (
            <Project
            projectHead={data.projectName}
            key={data.id}
            projectDetails={data.projectDetails}
            coverImg={data.coverImg}
            projectLinks={data.links}
            />
            );
          })}
      </div>
          </div>
    </section>
  );
}

export default Works;
