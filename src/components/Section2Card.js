import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CheckDeviceScreen } from "../helpers/";
import next from "../assets/images/case-study/next.png";


const Section2Card = ({ viewRef, data }) => {
  const screen = CheckDeviceScreen();

  return (
    <div className={`card`}>
      <div className="beforeWrap">
        {data?.next ? (
          <div>
            <p className="seeMore">
              <span>{data.next}</span> <img src={next} alt="" />
            </p>
          </div>
        ) : (
          <Link to={data.url}>
            <div className="contain">
              <img src={data.image} alt="" />
              <div>
                <h3>{data.title}</h3>
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
