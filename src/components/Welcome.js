import React from "react";
import { Link } from "react-router-dom";
import sign from "../assets/images/case-study/taeillo1.png";
import next from "../assets/images/case-study/next.png";

const Welcome = () => {
  const datas = [
    {
      title: "Work",
      text: "I am a Digital Product Designer currently based in Lagos, Nigeria. I started out in graphic design, with some experience in front end development.",
      url: "/work",
    },
    {
      title: "Info",
      text: "I have been designing UX for 6+ years now, helping companies enhance their design experiences, refine their ideas and launch impactful solutions.",
      url: "/info",
    },
    {
      title: "Writings",
      text: "I tend to write articles about things I newly understand or have always been fascinated about. I also take very random pictures. A few of them are posted here.",
      url: "/Writting",
    },
    {
      title: "Resources",
      text: "A lot of knowledge and wisdom is hidden in books, articles and conversations with another. Here’s a library that will enhance your design knowledge.",
      url: "/Writting",
    },
  ];
  return (
    <div>
      <div className="head">
        <h1>Designing ideas that solve problems.</h1>
      </div>

      <div className="infoWrap">
        {datas.map((data, idx) => (
          <div key={idx}>
            <Link to={data.url}>
              <h2>
                {data.title} <sup>0{idx + 1}</sup>
              </h2>
              <p>{data.text}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Welcome;
