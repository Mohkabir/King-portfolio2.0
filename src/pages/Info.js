import React, { useEffect } from "react";
import "../scss/home.scss";
import PageTitle from "../components/PageTitle";
import { scrollTop } from "../helpers";
import InfoSection from "../components/InfoSection";

const Info = () => {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div>
      <PageTitle title="Info" />

      <InfoSection number="01" subText="Words">
        <div>
          <h3>
            I’m a Product Designer turned Product Specialist based in Lagos,
            Nigeria.
          </h3>
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
          <span>Senior Product Designer</span>
          <h2>Scalio</h2>
          <span>Lead, Design</span>
          <h2>Enyata</h2>
          <span>Lead UX Designer</span>
          <h3>Atlas Money</h3>
          <span>UX Designer</span>
          <h3>Hotels.ng</h3>
          <span>Visual Designer</span>
          <h3>Drake Media</h3>
        </div>
      </InfoSection>
      <InfoSection number="03" subText="I’ve volunteered at">
        <div>
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
        <div>
          <h3>B.sc in Computer Science</h3>
          <p>at University of Nigeria, Nigeria</p>
        </div>
      </InfoSection>
    </div>
  );
};
export default Info;
