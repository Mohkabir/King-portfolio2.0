import React from "react";

const InfoSection = ({ number,subText, children }) => {
  return (
    <div className="infoWrapper">
      <div>
        <h3>{number}</h3>
        <p>{subText}</p>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default InfoSection;
