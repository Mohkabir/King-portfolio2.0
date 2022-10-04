import React, { useState } from "react";
import { Link } from "react-router-dom";
import arrowgif from "../assets/images/arrowgif.gif";

const Section2Card = ({ viewRef, data }) => {
  return (
    <div className={`card`}>
      <div className="beforeWrap">
        {data?.next ? (
          <div className="learnMore">
            <Link to="/work">
              <p className="seeMore">
                <span>{data.next}</span>{" "}
                <img className="gifImg" src={arrowgif} alt="" />
              </p>
            </Link>
          </div>
        ) : (
          <Link to={data.url}>
            <div className="contain">
              <div className="img_wrap">
                <img src={data.image} alt="" />
                <div className="thumb"></div>
              </div>

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
