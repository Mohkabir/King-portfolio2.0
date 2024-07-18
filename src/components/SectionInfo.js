import React, { useState, useRef, useEffect } from "react";
import { useIsInViewport } from "../helpers/index";
import { Link } from "react-router-dom";
import arrowgif from "../assets/images/arrowgif.gif";

const SectionInfo = ({ offsetY, check2, beforeStickyRef2, containerRef2 }) => {
  const isInViewport1 = useIsInViewport(check2);
  const scrollRef = useRef();

  useEffect(() => {
    if (isInViewport1 === true) {
      let xAxisToScroll = offsetY - containerRef2.current.offsetTop;
      scrollRef.current.scrollLeft = xAxisToScroll;
    }
  }, [offsetY]);

  const datas = [
    {
      title: "Scalio",
      text: "Senior Product Designer",
      url: "https://scal.io/",
    },
    {
      title: "Eze",
      text: "Head Product and Design",
      url: "https://www.ezewholesale.com/",
    },
    {
      title: "Eze",
      text: "Senior Product Designer",
      url: "https://www.ezewholesale.com/",
    },
    {
      title: "CarrotCredit",
      text: "Product Designer",
      url: "https://www.carrotcredit.com/",
    },
    // {
    //   title: "Enyata",
    //   text: "Lead, Design",
    //   url: "https://enyata.com/",
    // },
    // {
    //   title: "Atlas Money",
    //   text: "Lead UX Designer",
    // },

    // {
    //   title: "Drake Media",
    //   text: "Visual Designer",
    // },
    // {
    //   next: true,
    // },
  ];

  return (
    <div className="sectionInfo">
      <div className="box_wrapper">
        <div className={`box1`}>
          <h1>Info.</h1>
          <h3>I’m a Product Designer based in Lagos, Nigeria.</h3>
          <p>
            I am passionate about helping companies enhance their design
            experiences, refine their ideas and launch impactful solutions. In
            the past, I have helped companies with millions of customers grow
            their businesses, improve and create products by identifying product
            and user experience problems and opportunities, conceptualizing,
            prototyping, and working with developers (handoff).
          </p>
        </div>
        <div className="box2" ref={scrollRef}>
          <div className="card_wrapper" ref={beforeStickyRef2}>
            {datas.map((data, idx) => (
              <div className="card">
                {data.next ? (
                  <div>
                    <Link to="/info">
                      <p className="seeMore">
                        <span>See More</span>{" "}
                        <img className="gifImg" src={arrowgif} alt="" />
                      </p>
                    </Link>
                  </div>
                ) : (
                  <div>
                    {idx === 0 && <span className="present">Presently</span>}
                    <p>{data.text}</p>

                    <a href={data?.url && data.url} target="_blank">
                      <h2 className="underlineEffect">{data.title}</h2>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionInfo;
