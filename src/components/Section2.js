import React, { useState, useRef, useEffect } from "react";
import { useIsInViewport } from "../helpers/index";
import Section2Card from "./Section2Card";
import commonwealth from "../assets/images/case-study/commonwealth/commonwealth.png";
// import eze1 from "../assets/images/case-study/eze/eze1.png";
import work1 from "../assets/images/work1.png";
import Kompare from "../assets/images/case-study/KompareHome.png";
import work3 from "../assets/images/work3.png";

import commonwealthHome from "../assets/images/commonwealthHome.png";
import wzeHome from "../assets/images/wzeHome.png";
import kompareHome from "../assets/images/kompareHome.png";
import carrotHome from "../assets/images/carrotHome.png";


const Section2 = ({ offsetY, check, beforeStickyRef, containerRef }) => {
  const isInViewport1 = useIsInViewport(check);
  const scrollRef = useRef();

  useEffect(() => {
    if (isInViewport1 === true) {
      let xAxisToScroll = offsetY - containerRef.current.offsetTop - 350;
      console.log(xAxisToScroll, "xAxisToScroll");
      scrollRef.current.scrollLeft = xAxisToScroll;
    }
    console.log(isInViewport1, "isInViewport1", offsetY, "offsetY");
  }, [offsetY]);

  const cardData = [
    {
      image: commonwealthHome,
      title: "Common wealth",
      description: "Fintech . UX Design",
      url: "/case-study/common-wealth",
    },
    {
      image: wzeHome,
      title: "Eze Wholesale",
      description: "eCommerce . UX Design",
      url: "/case-study/eze-wholesale",
    },
    {
      image: kompareHome,
      title: "Kompare",
      description: "Management . Product & UX Design",
      url: "/case-study/kompare",
    },
    {
      image: carrotHome,
      title: "Carrot Credit",
      description: "Fintech . Product & UX Design",
      url: "/case-study/carrot-credit",
    },
    {
      url: "/work",
      next: "See More",
    },
  ];

  return (
    <div className="section2">
      <h1 className="work">Work.</h1>
      <div ref={scrollRef}>
        <div ref={beforeStickyRef} className="card_wrapper">
          {cardData.map((data, idx) => (
            <Section2Card key={idx} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
