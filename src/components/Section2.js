import React, { useState, useRef, useEffect } from "react";
import { useIsInViewport } from "../helpers/index";
import Section2Card from "./Section2Card";
import commonwealth from "../assets/images/case-study/commonwealth/commonwealth.png";
// import eze1 from "../assets/images/case-study/eze/eze1.png";
import work1 from "../assets/images/work1.png";
import Kompare from "../assets/images/case-study/KompareHome.png";
import work3 from "../assets/images/work3.png";

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
      image: commonwealth,
      title: "Commonwealth",
      description: "Fintech . UX Design",
      url: "/case-study/common-wealth",
    },
    {
      image: work1,
      title: "Eze Wholesale",
      description: "eCommerce . UX Design",
      url: "/case-study/eze-wholesale",
    },
    {
      image: Kompare,
      title: "Kompare",
      description: "Management . Product & UX Design",
      url: "/case-study/kompare",
    },
    {
      image: work3,
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
    <div className="section2" ref={scrollRef}>
      <div ref={beforeStickyRef} className="card_wrapper">
        {cardData.map((data, idx) => (
          <Section2Card key={idx} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Section2;
