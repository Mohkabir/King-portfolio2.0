import React, { useEffect } from "react";
import PageTitle from "../components/PageTitle";
import { scrollTop, homeCardDatas } from "../helpers";
import { useParams } from "react-router-dom";
import typeface from "../assets/images/case-study/Typeface.png";
import colours from "../assets/images/case-study/Colours.png";

import iphone2 from "../assets/images/iphone-x2.svg";
import iphone3 from "../assets/images/iphone-x3.svg";
import iphone4 from "../assets/images/iphone-x4.svg";
import iphone5 from "../assets/images/iphone-x5.svg";
import iphone6 from "../assets/images/iphone-x6.svg";
// import "../scss/home.scss";

import "../scss/caseStudy.scss";

const CaseStudy = () => {
  const { id } = useParams();
  useEffect(() => {
    scrollTop();
  }, []);

  const cardData = homeCardDatas[id];

  return (
    <div className="caseStydy_wrapper">
      <PageTitle
        title={cardData?.title}
        issCaseStudy={true}
        cardData={cardData}
      />
      <div className="profile">
        <img src={cardData?.imageCase || cardData?.image} alt="" />
      </div>
      <div className="case case1 ">
        <div className="caseFlex">
          <div>
            <h3>01</h3>
          </div>
          <div>
            <h4>Overview</h4>
            {cardData?.text01?.map((text) => (
              <p>
                <b>{text}</b>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="case case2">
        <div className="caseFlex">
          <div>
            <h3>02</h3>
          </div>
          <div>
            <h4>Definition</h4>
            {cardData?.text02?.map((text) => (
              <p>{text}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="case case3">
        <div className="caseFlex">
          <div>
            <h3>03</h3>
          </div>
          <div>
            <h4>Research</h4>
            {cardData?.text03?.map((text) => (
              <p>{text}</p>
            ))}
          </div>
        </div>
        {cardData?.image1 && (
          <div className="fullwidth_image">
            <img src={cardData?.image1} alt="case stydy" />
          </div>
        )}

        {cardData?.optionalText1?.map((text) => (
          <div className="caseFlex">
            <div></div>
            <div>
              <p>{text}</p>
            </div>
          </div>
        ))}
        {cardData?.image2 && (
          <div className="fullwidth_image">
            <img src={cardData?.image2} alt="case study" />
          </div>
        )}

        {cardData?.text04 && (
          <div className="caseFlex">
            <div></div>
            <div>
              <p>{cardData.text04}</p>
            </div>
          </div>
        )}

        <div className="box_wrapper">
          {cardData?.box1?.map((data, idx) => (
            <div key={idx}>
              <span>{data.title}</span>
              <img src={data.img} alt="stock1" />
            </div>
          ))}
        </div>

        {cardData?.whiteSection ? (
          <div className="whiteSection">
            <div className="container_2">
              {cardData?.blackSection?.map((data, idx) => (
                <div key={idx}>
                  <h1>{data.percentage}</h1>
                  <p>{data.text}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="blackSection">
            <div className="container_2">
              {cardData?.blackSection?.map((data, idx) => (
                <div key={idx}>
                  <h1>{data.percentage}</h1>
                  <p>{data.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {cardData?.box2 && (
          <div className="box_wrapper">
            {cardData?.box2?.map((data, idx) => (
              <div key={idx}>
                <span>{data.title}</span>
                <img src={data.img} alt="stock1" />
              </div>
            ))}
          </div>
        )}

        {cardData?.factors && <img src={cardData?.factors} alt="" />}

        <div className="caseFlex">
          <div></div>
          <div>
            <h4>Findings</h4>
            {cardData?.findings?.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="case case4">
        <div className="caseFlex">
          <h3>04</h3>
          <div>
            <h4>User Persona</h4>
            <p>{cardData?.userPersona?.text}</p>
          </div>
        </div>
      </div>
      <div className="user_profile">
        <div>
          <div>
            <img src={cardData?.userPersona?.profile} alt="" />
          </div>
          <div>
            <div className="userName">
              <h3>{cardData?.userPersona?.name}</h3>
              <p>{cardData?.userPersona?.description}</p>
            </div>
            <div className="userInfo">
              {cardData?.userPersona?.box?.map((data, idx) => (
                <div key={idx}>
                  <h4>{data.title}</h4>
                  <p>{data.options}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="case case5">
        <div className="caseFlex">
          <h3>05</h3>
          <div>
            <h4>User Flows</h4>
          </div>
        </div>
        <div className="fullwidth_image">
          <img src={cardData?.userFlowImg} alt="case flow" />
        </div>
      </div>
      <div className="case case6">
        <div className="caseFlex">
          <h3>06</h3>
          <div>
            <h4>Information Architecture (User Mind Mapping)</h4>
          </div>
        </div>
        <div className="fullwidth_image">
          <img src={cardData?.inofArchitech} alt="case " />
        </div>
      </div>
      <div className="case case7">
        <div className="caseFlex">
          <h3>07</h3>
          <div>
            <h4>User Interface</h4>
          </div>
        </div>
        <div className="caseFlex typeface">
          <div>
            {cardData?.styleGuide?.typeface?.downloadLink && (
              <img src={typeface} alt="" />
            )}
          </div>

          <div>
            <img src={cardData?.styleGuide?.typeface?.image} alt="" />

            {cardData?.styleGuide?.typeface?.texts?.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
            {cardData?.styleGuide?.typeface?.downloadLink && (
              <a href={cardData?.styleGuide?.typeface?.downloadLink}>
                The font family can be downloaded here
              </a>
            )}
          </div>
        </div>
        <div className="caseFlex colors">
          {cardData?.styleGuide?.color && (
            <div>
              <img src={colours && colours} alt="" />
            </div>
          )}

          <div>
            <div className="img_flex">
              {cardData?.styleGuide?.color?.images?.map((img, idx) => (
                <img src={img} alt="" key={idx} />
              ))}
            </div>

            {cardData?.styleGuide?.color?.texts?.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
        </div>
        <div className="caseFlex">
          <div>
            <h3>08</h3>
          </div>
          <div>
            <h4>Wires (Paper Sketch & Frames)</h4>

            {cardData?.wireGuideText &&
              cardData?.wireGuideText.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
          </div>
        </div>
        <div className="fullwidth">
          <img src={cardData?.wireGuide} alt="case wireGuide" />
        </div>
      </div>
      <div className="case case9">
        <div className="caseFlex">
          <div>
            <h3>09</h3>
          </div>
          <div>
            <h4>User Interface</h4>
            {cardData?.userInterface?.box?.map((data, idx) => (
              <div className="interface_wrap">
                <div key={idx} className="interface_img_wrapper">
                  {data?.images?.map((img, idx) => (
                    <img src={img} alt="" />
                  ))}
                </div>

                <div>
                  <p>{data.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="case case10">
        <div className="caseFlex">
          <div>
            <h3>10</h3>
          </div>
          <div>
            <h4>Usability Testing</h4>
            {cardData?.usabilityTesting?.map((text, idx) => (
              <p key={idx}> {text}</p>
            ))}
          </div>
        </div>

        <div className="caseFlex">
          <div></div>
          <div>
            <div className="usabilityTestingBox">
              {cardData?.usabilityTestingBox?.box?.map((box, idx) => (
                <div key={idx}>
                  <p>{box.title}</p>
                  <img src={box.img} alt="" />
                </div>
              ))}
            </div>
            <p>{cardData?.usabilityTestingBox?.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CaseStudy;
