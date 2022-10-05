import React from "react";
import "../scss/foundation.scss";
import foundation from "../assets/images/foundation2.png";

const Foundation = () => {
  return (
    <div className="foundation">
      <div className="hero">
        <div className="thumb">
          <img src={foundation} alt="" />
        </div>
      </div>
      <div className="wrapper">
        <h2>The Foundation</h2>
        <p className="left_bordered">
          “A Child born into affluence, growing up in a wealthy home might find
          the slum neighbourhood amusing or fiction”
        </p>
        <p>
          It is extremely easy to see the world from your perspective, this is
          no flaw but just the way we have all grown to see people and
          everything happening in our community.
        </p>
        <p>
          Founded in the last quarter of 2021, we are a non-profit that aims in
          creating a better life and living conditions for less privileged
          societal groups, socioeconomic institutions, and communities.
        </p>
        <p>
          The foundation was born out of the passion for simply encouraging
          everyone to be kind to one another and helping out our community in
          every littlest possibly way.
        </p>
        <p className="left_bordered">
          “It is more blessed to give than to receive” Acts 20:35
        </p>
        <p>
          At whatever level you are in your environment, there is always someone
          you could show kindness, and love, to change lives in the littlest
          possible way. It could be a cash sum, a ride, a plate of food,
          wearable or even just asking “How are you sir/ma”.
        </p>
        <p>
          The proceedings from this foundation would be used in reaching out to
          people and communities in form of long-term and short-term projects
          here in Nigeria, we decide who and when receives the benefactions but
          is well open to everyone for advisory.
        </p>
        <p>
          If in any way you want to be part of this, please reach out at{" "}
          <a className="tel" href="tel:+2347031356201">
            +2347031356201
          </a>
        </p>
        <p>
          Every donor, calculated progress, milestone, or completed project
          would be documented here and all donations are accounted for by an
          independent auditor annually.
        </p>
        <p>
          We need to live in a society where we can care and be accountable for
          and to one another, you don't need to have so much to give so little.
          <br />
          God bless you.
        </p>

        <h3>So far</h3>
        <a
          href="https://kingsleyukeje.notion.site/Teen-Girls-Pad-Project-7e14793f4cac4a799c9e6345783a186c"
          target="_blank"
        >
          Teen Girls Pad Project
        </a>
      </div>
    </div>
  );
};

export default Foundation;
