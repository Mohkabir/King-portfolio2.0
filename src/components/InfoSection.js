import React from "react";

const InfoSection = ({ infoSec, children }) => {
  return (
    <div>
      <div>
        <h3>{infoSec?.number}</h3>
        <p>{infoSec?.subText}</p>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default InfoSection;
