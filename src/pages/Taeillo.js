import React, { useEffect } from "react";
import PageTitle from "../components/PageTitle";
import "../scss/Kompare.scss";

import work2 from "../assets/images/work2.png";
import taeillo1 from "../assets/images/case-study/taeillo1.png";


import { scrollTop } from "../helpers";


const cardData = {
  title: "Taeillo Product",
  cardFullUrl: "",
};

const Taeillo = () => {

  useEffect(() => {
    scrollTop();
  }, []);
  return (
    <div className="other_case_study">
      <PageTitle
        title="Taeillo Product Plan"
        issCaseStudy={true}
        cardData={cardData}
      />
      <div className="profile">
        <img src={work2} alt="" />
      </div>
      <div className="caseFlex">
        <div>
          <h3>01</h3>
        </div>
        <div>
          <h4>Overview</h4>
          <p>
            Tǽillὸ is a Nigerian Furniture and Lifestyle Brand that designs and
            manufactures Furniture by harnessing traditional forms, Materials,
            Local resources in Africa with both local and modern Technology to
            create premium Urban Furniture pieces.
          </p>
        </div>
      </div>
      <div className="caseFlex">
        <div>
          <h3>02</h3>
        </div>
        <div>
          <h4>Definition</h4>
          <p>
            {" "}
            I led the product team to build this new development, prior to the
            planning a production to version two. Taeillo ran operations in
            Nigeria and built a very established hospitality business in
            Nigeria. In Q1 of 2021, the taeillo team decided to scale their
            product base and also expand their operations to other african
            countries, I sat with the taeillo team and planned a robust custom
            bespoke solution to build their upgrade on, for seamless transaction
            process and CRM inventory management, the system was built on
            shopify. The project lasted 12 weeks and was deployed successfully.{" "}
          </p>
          <p>
            Their business operations continued to run smoothly across all their
            system and infrastructure
          </p>
        </div>
      </div>
      <div className="caseFlex">
        <div>
          <h3>03</h3>
        </div>
        <div>
          <h4>Research</h4>
          <p>
            These days, when an average millennial tries to buy furniture,
            factors like time to get the product and aesthetics of an
            already-made one come into play.
          </p>
          <p>
            Old fashioned showrooms, albeit expensive, have been the go-to for
            such millennials because they answer questions like: What would my
            furniture look like? What options do I have? Would this furniture be
            a good fit for my space?
          </p>
          <p>
            While it requires people visiting offline showrooms to find out,
            Taeillo has a different proposition. Instead of going over to a
            showroom, they’d love for customers to stay in the comfort of their
            homes and find out the appearance of any furniture they want.
          </p>
        </div>
      </div>
      <div className="sign">
        <img src={taeillo1} alt="" />
      </div>
    </div>
  );
};

export default Taeillo;
