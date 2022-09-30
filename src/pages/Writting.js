import React, { useEffect } from "react";
import "../scss/home.scss";
import { scrollTop, writtingCardDatas } from "../helpers";
import PageTitle from "../components/PageTitle";
import Card from "../components/Card";

const Writting = () => {

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="wrapp">
      <PageTitle title="UX Writings" writting={true} />
      <div className="cardWrapper">
        {writtingCardDatas.map((writtingCard, index) => (
          <Card cardData={writtingCard} key={index} />
        ))}
      </div>
    </div>
  );
};
export default Writting;
