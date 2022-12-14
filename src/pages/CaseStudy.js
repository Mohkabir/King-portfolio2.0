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
  const { name } = useParams();
  useEffect(() => {
    scrollTop();
  }, []);

  const cardData = homeCardDatas.filter((data, idx) => data.name === name)[0];
  return (
    <div className="caseStydy_wrapper">
      <div className="caseTitleWrap">
        <PageTitle
          title={cardData?.title}
          issCaseStudy={true}
          cardData={cardData}
        />
      </div>

      <div className="profile">
        <img src={cardData?.imageCase || cardData?.image} alt="" />
      </div>
      <div className="case case1 wrapp">
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
      <div className="case case2 wrapp">
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
      <div className="case case3 wrapp">
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

      <div className="case wrapp">
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
      </div>
      {cardData?.factors && <img src={cardData?.factors} alt="" />}
      <div className="case wrapp">
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
      <div className="case case4 wrapp">
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
              {cardData?.userPersona?.description?.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>
            <div className="userInfo">
              {cardData?.userPersona?.box?.map((data, idx) => (
                <div key={idx}>
                  <h4>{data?.title}</h4>
                  {data?.options?.map((text, idx) => (
                    <p style={{ lineHeight: "28px", margin: "0" }} key={idx}>
                      {text}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="case case5 wrapp">
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
      <div className="case case6 wrapp">
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
      <div className="case case7 wrapp">
        <div className="caseFlex">
          <h3>07</h3>
          <div>
            <h4>Style Guide</h4>
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
            {/* {cardData?.styleGuide?.typeface?.downloadLink && (
              <a href={cardData?.styleGuide?.typeface?.downloadLink}>
                The font family can be downloaded here
              </a>
            )} */}
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
            <div className="img_flex_column">
              {cardData?.styleGuide?.color?.singleImage?.map((img, idx) => (
                <>
                  <p>{idx === 0 ? "Primary Colour" : "Secondary Colours"}</p>
                  <img src={img} alt="" key={idx} />
                </>
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
          {cardData?.wireGuide && <img src={cardData?.wireGuide} alt="" />}
        </div>
      </div>
      <div className="case case9 wrapp">
        <div className="caseFlex">
          <div>
            <h3>09</h3>
          </div>
          <div>
            <h4>User Interface</h4>
            {cardData?.userInterface?.box1?.map((data, idx) => (
              <div className="interface_wrap">
                <div key={idx} className="interface_img_wrapper">
                  {data?.images?.map((image, idx) => (
                    <img key={idx} src={image} alt="" />
                  ))}
                </div>
              </div>
            ))}
            {cardData?.userInterface?.box2?.map((data, idx) => (
              <div className="interface_wrap">
                <div key={idx}>
                  {data?.images?.map((image, idx) => (
                    <img key={idx} src={image} alt="" />
                  ))}
                </div>
              </div>
            ))}
            {cardData?.userInterface?.box?.map((data, idx) => (
              <div className="interface_wrap">
                <div key={idx} className="interface_img_wrapper">
                  {data?.images?.map((image, idx) => (
                    <img key={idx} src={image} alt="" />
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
      <div className="case case10 wrapp">
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
                  <p>{box?.title}</p>
                  <img src={box?.img} alt="" />
                </div>
              ))}
            </div>
            <p>{cardData?.usabilityTestingBox?.text}</p>
            <div className="usabilityTestingBox2">
              {cardData?.usabilityTestingBox?.box2?.map((img, idx) => (
                <img key={idx} src={img} alt="" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CaseStudy;
