import React, { useEffect } from "react";
import "../scss/home.scss";
import { scrollTop, homeCardDatas } from "../helpers";
import PageTitle from "../components/PageTitle";
import Card from "../components/Card";
import { useLocation } from "react-router-dom";

const Home = ({ work }) => {
  const location = useLocation();
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="wrapp">
      {work ? (
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
      </div>
    </div>
  );
};
export default Home;
