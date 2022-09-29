import React from "react";
import next from "../assets/images/case-study/next.png";
import { Link } from "react-router-dom";


const ResourcesSection = () => {
  const writings = [
    {
      pre: "June 28   l   Article",
      title:
        "Finding Balance in Design implementation using the Fibonacci Sequence.",
      text: "Math! Most of us in our college days hated math, was just a lot going on at the same thing, so many things to process, in search of an already...",
    },
    {
      pre: "May 21   l   Article",
      title:
        "Finding Balance in Design implementation using the Fibonacci Sequence.",
      text: "Math! Most of us in our college days hated math, was just a lot going on at the same thing, so many things to process, in search of an already...",
    },
    {
      pre: "September 1   l   Article",
      title:
        "The Grid system in Design: Using Grids to build Responsive Web UI",
      text: "According to Wikipedia, In design, a grid is a structure (usually two-dimensional) made up of a series of intersecting straight...",
    },
  ];

  const resources = [
    {
      pre: "By Golden Krishna   l   Book   l   PDF",
      title:
        "The Best Interface Is No Interface: The Simple Path to Brilliant Technology.",
      text: "This lays out how we got to this app-obsessed point and how we can turn things around and ensure that we’re using the best tool for the job.",
    },
    {
      pre: "By Jon Kolko   l   Book   l   PDF",
      title: "Well-Designed: How to Use Empathy to Create Products People Love",
      text: "Innovators today are told to run loose and think lean in order to fail fast and succeed sooner. But in a world obsessed with the new...",
    },
    {
      pre: "By Kingsley Ukeje   l   Guide   l   PDF",
      title:
        "Everyone can Learn Design: A Complete guide to learning UX design from scratch",
      text: "Its a guideline to getting you started on a journey that know no end but many sweet savouring stop overs. From wireframes to user testing...",
    },
  ];

  return (
    <div className="resourcesSection">
      <h1>Writings & Resources.</h1>
      <div className="resourcesWrittings">
        <div className="res_wrap">
          <div>
            {writings.map((data, idx) => (
              <div key={idx}>
                <span>{data.pre}</span>
                <h3>{data.title}</h3>
                <p>{data.text}</p>
              </div>
            ))}
          </div>
          <div>
            <Link to="/Writting">
              Learn More <img src={next} alt="" />
            </Link>
          </div>
        </div>
        <div className="res_wrap">
          <div>
            {resources.map((data, idx) => (
              <div key={idx}>
                <span>{data.pre}</span>
                <h3>{data.title}</h3>
                <p>{data.text}</p>
              </div>
            ))}
          </div>
          <div>
            <Link to="/Writting">
              Learn More <img src={next} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;
