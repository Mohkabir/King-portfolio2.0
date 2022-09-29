import React, { useEffect } from "react";
import Card from "../components/Card";
import PageTitle from "../components/PageTitle";
import Home from "./Home";
import { scrollTop, homeCardDatas } from "../helpers";

const Work = () => {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="wrapp">
      <PageTitle title="Work" />
      <div className="cardWrapper">
        {homeCardDatas.map((homeCardData, index) => (
          <Card cardData={homeCardData} key={index} issHome={true} />
        ))}
      </div>
    </div>
  );
};

export default Work;
