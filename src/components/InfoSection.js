import React from "react";

const InfoSection = ({ infoSec, children }) => {
  const { number, subText } = infoSec;
  return (
    <div>
      <div>
        <h3>{number}</h3>
        <p>{subText}</p>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default InfoSection;
