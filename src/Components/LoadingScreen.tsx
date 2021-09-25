import React from "react";
import Flask from "./Assets/Flask";
import { gsap } from "gsap";

function LoadingScreen() {
  const loadingScreen = React.useRef(null);
  const loadingBar = React.useRef(null);
  const whiteScreen = React.useRef(null);

  React.useLayoutEffect(() => {
    gsap
      .timeline({
        ease: "Expo.easeInOut",
      })
      .to(loadingBar.current, {
        width: "100%",
        duration: 1.6,
      })
      .to(whiteScreen.current, {
        height: "100%",
        duration: 0.6,
      })
      .to(whiteScreen.current, {
        width: "0%",
        duration: 0.7,
      });

    gsap.to(loadingScreen.current, {
      display: "none",
      duration: 0,
      delay: 2.2,
    });
  }, []);

  return (
    <>
      <div ref={whiteScreen} className="white_screen"></div>
      <section ref={loadingScreen} className="loading_screen">
        <div className="loading_animation">
          <Flask />
        </div>
        <div className="loading_bar_bg">
          <div ref={loadingBar} className="loading_bar"></div>
        </div>
      </section>
    </>
  );
}

export default LoadingScreen;
