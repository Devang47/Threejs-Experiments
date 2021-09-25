import React, { useRef, useLayoutEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Flask from "./Assets/Flask";

import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

function Header() {
  const heading = useRef(null);
  const line = useRef(null);
  const para = useRef(null);
  const canvas = useRef(null);
  const movingObjects = useRef(null);
  const links = useRef(null);
  const button = useRef(null);

  const allCircles = gsap.utils.selector(movingObjects);
  const linksWrapper = gsap.utils.selector(links);

  useLayoutEffect(() => {
    window.addEventListener("mousemove", animateCircle);

    gsap
      .timeline({
        ease: "Expo.easeInOut",
        delay: 3,
      })
      .from(allCircles(".object"), {
        y: "-20px",
        opacity: 0,
        duration: 0.6,
      });

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
    <header ref={movingObjects}>
      <div className="left_text">
        <h1 ref={heading} className="title font_1">
          My{" "}
          <span className="experiments">
            Exper
            <Flask />
            ments
          </span>{" "}
          with <span className="highlighted"> WebGL </span>
          and <span className="highlighted"> Three.js</span>
          <span ref={line} className="line"></span>
        </h1>
        <h2 ref={para} className="sub_title font_2">
          Hi! my name is <span className="highlighted">Devang Saklani</span>.
          These are some of my best experments / projects I made using Threejs
          and R3F.
        </h2>
        <div ref={links} className="social_links">
          <a
            className="github_link link"
            href="https://github.com/Devang47"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <FaGithub />
          </a>
          <a
            className="twitter_link link"
            href="https://twitter.com/DevangSaklani"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
        <div className="take_a_look">
          <a href="#showcase">
            <button className="font_2">
              Lets have a look
              <span className="arrow">
                <svg
                  width="29"
                  height="12"
                  viewBox="0 0 29 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.5303 6.53033C28.8232 6.23744 28.8232 5.76256 28.5303 5.46967L23.7574 0.696699C23.4645 0.403806 22.9896 0.403806 22.6967 0.696699C22.4038 0.989593 22.4038 1.46447 22.6967 1.75736L26.9393 6L22.6967 10.2426C22.4038 10.5355 22.4038 11.0104 22.6967 11.3033C22.9896 11.5962 23.4645 11.5962 23.7574 11.3033L28.5303 6.53033ZM0 6.75H28V5.25H0V6.75Z"
                    fill="white"
                  />
                </svg>
              </span>
            </button>
          </a>
        </div>
      </div>
      <div ref={canvas} className="canvas_right shadow"></div>
      <span className="circle circle_1 object"></span>
      <span className="circle circle_2 object"></span>
      <span className="cube_1 object"></span>
    </header>
  );
}

export default Header;
