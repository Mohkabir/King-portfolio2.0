import React, { useEffect } from "react";
import "../scss/info.scss";
import "../scss/welcome.scss";

import PageTitle from "../components/PageTitle";
import { scrollTop } from "../helpers";
import InfoSection from "../components/InfoSection";

const Info = () => {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="infoSection">
      <div className="caseTitleWrap">
        <PageTitle title="Info" info={true} />
      </div>

      <InfoSection number="01" subText="Words">
        <div>
          <h3>I’m a Product Designer based in Lagos, Nigeria.</h3>
          <p>
            I am passionate about helping companies enhance their design
            experiences, refine their ideas and launch impactful solutions. In
            the past, I have helped companies with millions of customers grow
            their businesses, improve and create products by identifying product
            and user experience problems and opportunities, conceptualizing,
            prototyping, and working with developers (handoff).
            <br />I like to be involved at different stages of a digital
            project, from the seed of the idea, through to sketches, design and
            even the front-end and back-end build, this means I can jump in at
            any stage of a project, or take on the whole project, from design to
            build.
          </p>
        </div>
      </InfoSection>
      <InfoSection number="02" subText="I’ve worked at">
        <div>
          <a href="https://www.ezewholesale.com/" target="_blank">
            <span>Head Product and Design</span>
            <h2>Eze</h2>
          </a>
          <a href="https://www.ezewholesale.com/" target="_blank">
            <span>Senior Product Designer</span>
            <h2>Eze</h2>
          </a>
          <a href="https://scal.io/" target="_blank">
            <span>Senior Product Designer</span>
            <h2>Scalio</h2>
          </a>
          <a href="https://www.carrotcredit.com/" target="_blank">
            <span>Product Designer</span>
            <h2>CarrotCredit</h2>
          </a>

          {/* <a href="https://enyata.com/" target="_blank">
            <span>Lead, Design</span>
            <h2>Enyata</h2>
          </a>
          <a>
            <span>Lead UX Designer</span>
            <h2>Atlas Money</h2>
          </a>
          <a href="https://hotels.ng/" target="_blank">
            <span>UX Designer</span>
            <h2>Hotels.ng</h2>
          </a>
          <a>
            <span>Visual Designer</span>
            <h2>Drake Media</h2>
          </a> */}
        </div>
      </InfoSection>
      <InfoSection number="03" subText="I’ve volunteered at">
        <div className="flex_wrap">
          <div>
            <h3>DESIGN TEAM LEAD</h3>
            <p>at Geekhood Media</p>
          </div>
          <div>
            <h3>UX DESIGNER</h3>
            <p>at Genesys Tech hub</p>
          </div>
          <div>
            <h3>UX DESIGNER</h3>
            <p>at Lawyerrp</p>
          </div>
          <div>
            <h3>VISUAL DESIGNER</h3>
            <p>at National Youth Summit</p>
          </div>
        </div>
      </InfoSection>
      <InfoSection number="04" subText="I studied at">
        <div className="sec04">
          <h3>B.sc in Computer Science</h3>
          <p>at University of Nigeria, Nigeria</p>
        </div>
      </InfoSection>
    </div>
  );
};
export default Info;
