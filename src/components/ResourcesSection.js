import React from "react";
import arrowgif from "../assets/images/arrowgif.gif";
import { Link } from "react-router-dom";


const ResourcesSection = () => {
  const writings = [
    {
      pre: "June 28   l   Article",
      title:
        "Finding Balance in Design implementation using the Fibonacci Sequence.",
      text: "Math! Most of us in our college days hated math, was just a lot going on at the same thing, so many things to process, in search of an already...",
      url: "https://kingsleyukeje.medium.com/finding-balance-in-design-implementation-using-the-fibonacci-sequence-4d589b7ea625",
    },
    {
      pre: "May 21   l   Article",
      title: "Hacking the Human Mind :: Designing Addictive User Interfaces",
      text: "Have you ever found yourself watching Netflix late at night when an episode of your favourite show ends? You know it’s time to go to bed...",
      url: "https://kingsleyukeje.medium.com/hacking-the-human-mind-designing-addictive-user-interfaces-35ec250b66f1",
    },
    {
      pre: "September 1   l   Article",
      title:
        "The Grid system in Design: Using Grids to build Responsive Web UI",
      text: "According to Wikipedia, In design, a grid is a structure (usually two-dimensional) made up of a series of intersecting straight...",
      url: "https://kingsleyukeje.medium.com/using-grids-to-build-responsive-web-ui-9a9bbe48dc8e",
    },
  ];

  const resources = [
    {
      pre: "By Golden Krishna   l   Book   l   PDF",
      title:
        "The Best Interface Is No Interface: The Simple Path to Brilliant Technology.",
      text: "This lays out how we got to this app-obsessed point and how we can turn things around and ensure that we’re using the best tool for the job.",
      url: "https://drive.google.com/file/d/1P1TVOo2jg3nNNHo5tDLMZIbdBgSh9xAM/view",
    },
    {
      pre: "By Jon Kolko   l   Book   l   PDF",
      title: "Well-Designed: How to Use Empathy to Create Products People Love",
      text: "Innovators today are told to run loose and think lean in order to fail fast and succeed sooner. But in a world obsessed with the new...",
      url: "https://drive.google.com/file/d/1-AALOJkWagTqVMXdz5uO7y1YOQ9vVfAi/view",
    },
    {
      pre: "By Kingsley Ukeje   l   Guide   l   PDF",
      title:
        "Everyone can Learn Design: A Complete guide to learning UX design from scratch",
      text: "Its a guideline to getting you started on a journey that know no end but many sweet savouring stop overs. From wireframes to user testing...",
      url: "https://drive.google.com/file/d/1yhyE_PDIDxlXAwXOGkfIyBljqy7UX3vD/view?usp=sharing",
    },
  ];

  return (
    <div className="resourcesSection">
      <h1>Writings & Resources.</h1>
      <div className="resourcesWrittings">
        <div className="res_wrap">
          <div>
            {writings.map((data, idx) => (
              <div>
                <span>{data.pre}</span>
                <a target="_blank" href={data.url} key={idx}>
                  <h3>{data.title}</h3>
                </a>
                <p>{data.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="res_wrap">
          <div>
            {resources.map((data, idx) => (
              <div key={idx}>
                <span>{data.pre}</span>
                <a target="_blank" href={data.url} key={idx}>
                  <h3>{data.title}</h3>
                </a>
                <p>{data.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Link to="/Writting">
          <span style={{ color: "#202124", opacity: "0.5" }}>Learn More</span>{" "}
          <img className="gifImg" src={arrowgif} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default ResourcesSection;
