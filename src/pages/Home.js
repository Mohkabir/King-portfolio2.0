import React, { useState, useEffect, useRef } from "react";
import "../scss/home.scss";
import { scrollTop } from "../helpers";
import Welcome from "../components/Welcome";
import ResourcesSection from "../components/ResourcesSection";
import "../scss/welcome.scss";
import Section2 from "../components/Section2";
import { calculateHeight } from "../helpers";
import SectionInfo from "../components/SectionInfo";

const Home = ({ work }) => {
  const check = useRef(null);
  const check2 = useRef(null);
  const beforeStickyRef = useRef(null);
  const beforeStickyRef2 = useRef(null);
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="wrappHome">
      <Welcome />
      <div
        className="beforeSticky"
        style={{
          height: calculateHeight(beforeStickyRef, 350),
        }}
        ref={containerRef}
      >
        {/* <h1 className="work">Work.</h1> */}
        <div className="sticky">
          <Section2
            offsetY={offsetY}
            check={check}
            beforeStickyRef={beforeStickyRef}
            containerRef={containerRef}
          />
          <div ref={check}></div>
        </div>
      </div>
      <ResourcesSection />
      <div
        className="beforeSticky2"
        style={{
          height: calculateHeight(
            beforeStickyRef2,
            window.innerHeight < 1242
              ? window.innerHeight
              : window.innerHeight / 2
          ),
        }}
        ref={containerRef2}
      >
        <div className="sticky">
          <SectionInfo
            offsetY={offsetY}
            check2={check2}
            beforeStickyRef2={beforeStickyRef2}
            containerRef2={containerRef2}
          />
          <div ref={check2}></div>
        </div>
      </div>
    </div>
  );
};
export default Home;
