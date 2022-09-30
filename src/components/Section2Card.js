import React, { useState } from "react";
import { Link } from "react-router-dom";
import next from "../assets/images/case-study/next.png";

const Section2Card = ({ viewRef, data }) => {
  return (
    <div className={`card`}>
      <div className="beforeWrap">
        {data?.next ? (
          <div className="learnMore">
            <Link to="/work">
              <p className="seeMore">
                <span>{data.next}</span> <img src={next} alt="" />
              </p>
            </Link>
          </div>
        ) : (
          <Link to={data.url}>
            <div className="contain">
              <img src={data.image} alt="" />
              <div>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
              </div>
            </div>
          </Link>
        )}
        <div ref={viewRef}></div>
      </div>
    </div>
  );
};

export default Section2Card;
