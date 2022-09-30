import React, { useEffect } from "react";
import PageTitle from "../components/PageTitle";
import "../scss/Kompare.scss";
import Kompare_Img from "../assets/images/case-study/Kompare.png";
import Kompare1 from "../assets/images/case-study/Kompare1.png";
import Kompare2 from "../assets/images/case-study/Kompare2.png";
import Kompare3 from "../assets/images/case-study/Kompare3.png";
import Kompare4 from "../assets/images/case-study/Kompare4.png";
import Kompare5 from "../assets/images/case-study/Kompare5.png";
import Kompare6 from "../assets/images/case-study/Kompare6.png";
import Kompare7 from "../assets/images/case-study/Kompare7.png";
import Kompare8 from "../assets/images/case-study/Kompare8.png";
import Kompare9 from "../assets/images/case-study/Kompare9.png";
import Kompare10 from "../assets/images/case-study/Kompare10.png";
import Kompare11 from "../assets/images/case-study/Kompare11.png";
import Kompare12 from "../assets/images/case-study/Kompare12.png";
import Kompare13 from "../assets/images/case-study/Kompare13.png";
import Kompare14 from "../assets/images/case-study/Kompare14.png";

import { scrollTop } from "../helpers";

const cardData = {
  image: Kompare_Img,
  title: "Kompare web & mobile ",
  subTitle: "UX Design",
  cardFullUrl: "",
};

const Kompare = () => {

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="other_case_study">
      <div className="caseTitleWrap">
        <PageTitle
          title="Kompare web & mobile"
          issCaseStudy={true}
          cardData={cardData}
        />
      </div>

      <div className="profile">
        <img src={Kompare_Img} alt="" />
      </div>

      <div className="text_wrapper">
        <h4>Overview</h4>
        <p>
          <b>
            Kompare.io is a tool that lets people compare the time in different
            cities across various timezones as well as see the time difference
            between locations. It is the perfect companion for people living the
            remote life and working across different timezones.
          </b>
        </p>
        <h4>Background</h4>
        <p>
          Comparing the time between different locations is a really basic task,
          but If you have ever had to schedule a meeting for people in different
          cities with a significant time difference, you may understand how
          tough it can get. For the longest time, I was haunted by this one
          question;
        </p>

        <h4>How can something so simple be so complicated and frustrating?</h4>
        <p>
          The only tool I found that came close to solving this problem of time
          comparison and had decent UX was google.com (obviously). But I wasn't
          satisfied and knew that there must be a better way, and in that
          moment, kompare.io was born.
        </p>
        <h4>Research</h4>
        <p>
          After I made the decision to build kompare.io, I got to work by doing
          some research to find out the tools people used to compare time across
          the world and the challenges they faced using it, if any. From my
          conversations and survey, here's what I found.
        </p>
      </div>

      <div className="img_wrapper">
        <img src={Kompare1} alt="" />
      </div>

      <div className="text_wrapper">
        <h4>Definition</h4>
        <p>
          Based on the feedback and information I gathered, there were several
          key aspects that would come together to create an ideal time
          comparison solution
        </p>
        <p>
          <b>User experience:</b> Needs to be efficient, requiring very few
          steps to get to the goal state. User interface also needs to be very
          clean and responsive.
        </p>
        <p>
          <b>Present vital information clearly:</b> Show time difference, show
          time in both locations, and have the ability to enter custom time for
          either location.
        </p>
        <p>
          <b> Multiple location comparison:</b> Enable people to compare time in
          more than 2 locations.
        </p>
        <h4>Understanding the Kompare user</h4>
        <p>
          I created personas to depict the types of people I was designing the
          product for, detailing their demographics, challenges, and needs.
        </p>
      </div>
      <div className="img_wrapper">
        <img src={Kompare2} alt="" />
      </div>

      <div className="text_wrapper">
        <h4>User Journey</h4>
        <p>
          This is a depiction of the ideal path through which a kompare.io user
          would reach their desired goal of comparing the time in different
          locations. Please note that this journey does not account for the
          process of comparing the time in more than 2 locations as that is not
          part of the MVP version of the product. .
        </p>
      </div>
      <div className="img_wrapper">
        <img src={Kompare3} alt="" />
      </div>
      <div className="text_wrapper">
        <h4>Low Fidelity Design</h4>
        <p>
          After gaining more insight into the types of people who need
          kompare.io, their pain points, and needs, I began to brainstorm ideas.
          Below are some low-fidelity designs I worked on. .
        </p>
      </div>
      <div className="img_wrapper_flex">
        <img src={Kompare4} alt="" />
        <img src={Kompare5} alt="" />
        <img src={Kompare6} alt="" />
        <img src={Kompare7} alt="" />
      </div>
      <div className="text_wrapper">
        <h4>High Fidelity Design - First Iteration</h4>
        <p>
          Having gained a clear understanding of how I want the product to work
          and look, I went ahead to work on the high fidelity design. .
        </p>
      </div>
      <div className="img_wrapper">
        <img src={Kompare8} alt="" />
      </div>

      <div className="text_wrapper">
        <h4>Test Findings</h4>
        <p>
          When I tested this first iteration design with people, I got some
          constructive feedback that would eventually lead to a second iteration
          design. Here are the most important pieces of feedback I received from
          people.
        </p>
        <p>
          • There's no clear way to change the locations without navigating to
          the previous page. <br />• There isn't really any need to have 2
          pages. Everything can be executed on one page.
        </p>
        <h4>Second Iteration</h4>
        <p>
          These issues with the first iteration design led me to work on a
          second iteration design.
        </p>
      </div>
      <div className="img_wrapper">
        <img src={Kompare9} alt="" />
        <img src={Kompare10} alt="" />
      </div>

      <div className="text_wrapper">
        <h4>Third Iteration</h4>
        <p>
          After working on the second iteration, I left this project for a few
          months, and by the time I took a look at it, I was quite dissatisfied
          with the user interface, so I decided to give it a facelift, updating
          the UI components and improving on the user experience. .
        </p>
      </div>
      <div className="img_wrapper">
        <img src={Kompare11} alt="" />
        <img src={Kompare12} alt="" />
        <img src={Kompare13} alt="" />
      </div>
      <div className="text_wrapper">
        <p>
          The MVP of kompare.io was launched in February 2022 and I am working
          with the developer to implement come fixes and updates. These are some
          plans we have for the future
        </p>
        <p>• Add ability to compare time in more than 2 locations</p>
        <p>• Improve data querying speed</p>
        <p>• Display currency conversion for locations being displayed</p>

        <h4>MVP Findings - June 2022</h4>
        <p>
          After several months of the Kompare MVP being live, we have collected
          some beneficial data, spoken to lots of users, and have come to
          several realizations and findings which are listed below
        </p>

        <p>• Our data is heavily faulty and lacks integrity</p>

        <p>
          • Locations take too long to come up (5-10 seconds) and according to
          the Doherty Threshold principle, this shouldn't be above 400ms
        </p>

        <p>
          •People who are in our core user personas want the ability to compare
          several locations
        </p>

        <p>•Recruiters would like to be able to compare timezone to location</p>
        <h4>Kompare V1</h4>
        <p>
          These core findings and many more have become the focus of Kompar V1
          which is currently in development and once it's live, I will promptly
          come back to make another update. For now, below are some screens,
          displaying solutions to some of the findings listed above.
        </p>
      </div>
      <div className="img_wrapper">
        <img src={Kompare14} alt="" />
      </div>
    </div>
  );
};

export default Kompare;
