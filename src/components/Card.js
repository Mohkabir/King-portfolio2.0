import React from "react";
import { Link } from "react-router-dom";

const Card = ({ cardData, issHome, type }) => {
  const { title, image, subTitle, cardUrl } = cardData;
  return (
    <div className="card">
      <div className="img_wrapper">
        <img src={image} alt="image of my work" />
        {type === "writtings" ? (
          <a href={cardUrl} target="_blank" className="thumb"></a>
        ) : (
          <Link
            to={cardUrl}
            target={!issHome ? "_blank" : ""}
            className="thumb"
          ></Link>
        )}
      </div>
      <div className="textBox">
        <p>{title}</p>
        {issHome && <span>{subTitle}</span>}
      </div>
    </div>
  );
};

export default Card;
