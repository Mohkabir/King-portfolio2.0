import React, { useState, useEffect, useRef, useMemo } from "react";
import sign from "../assets/images/case-study/taeillo1.png";

import "../scss/home.scss";
import { scrollTop, homeCardDatas } from "../helpers";

import { useLocation } from "react-router-dom";
import Welcome from "../components/Welcome";
import ResourcesSection from "../components/ResourcesSection";

import "../scss/welcome.scss";
import Section2 from "../components/Section2";
// import ResourcesSection from "../"
import {
  calculateHeight,
  // CheckDeviceScreen,
  // useIsInViewport,
  // useScrollDirection,
} from "../helpers";
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

  // const location = useLocation();
  useEffect(() => {
    scrollTop();
  }, []);

  console.log(
    calculateHeight(beforeStickyRef, 0),
    "calculateHeight(beforeStickyRef)"
  );
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
        <h1 className="work">Work.</h1>
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

      <footer className="home_footer">
        <img src={sign} alt="" />

        <div>
          <a href="">Instagram</a>
          <a href="">Linkedin</a>
          <a href="">Twitter</a>
        </div>
        <div>
          <a href="">+234 703 1356 201</a>
          <a href="">kingsleyukejex@gmail.com</a>
          <a href="">Download Resume</a>
        </div>
      </footer>

      {/* {work ? (
        <PageTitle title="Work" />
      ) : (
        <PageTitle
          title="Hello"
          subTitle="I am Kingsley, I design and build great experiences for
          people and businesses."
          issHome={true}
          issCaseStudy={false}
        />
      )}
      <div className="cardWrapper">
        {homeCardDatas.map((homeCardData, index) => (
          <Card cardData={homeCardData} key={index} issHome={true} />
        ))}
      </div> */}
    </div>
  );
};
export default Home;
