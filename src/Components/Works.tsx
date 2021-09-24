import React, { useLayoutEffect, useRef } from "react";
import Project from "./Project";
import ProjectsData from "./ProjectsData";

import gsap from "gsap";

function Works() {
  const objects = useRef(null);
  const allCircles = gsap.utils.selector(objects);

  useLayoutEffect(() => {
    window.addEventListener("mousemove", animateCircle);
    return () => {
      window.removeEventListener("mousemove", animateCircle);
    };
    // eslint-disable-next-line
  }, []);

  function animateCircle(event: any) {
    let mouseX = event.clientX / window.innerWidth - 0.5;
    let mouseY = event.clientY / window.innerHeight - 0.5;

    gsap.to(allCircles(".object"), {
      x: 50 * mouseX,
      y: 50 * mouseY,
      duration: 0.5,
    });
  }

  return (
    <section id="showcase" ref={objects}>
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

      <div className="circle1 object"></div>
      <div className="circle2 object"></div>
      <div className="cube object"></div>
    </section>
  );
}

export default Works;
