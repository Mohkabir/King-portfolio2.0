import React from "react";
import { Link } from "react-router-dom";
import back from "../assets/images/back.svg";
import { useNavigate } from "react-router-dom";

const PageTitle = ({ title, subTitle, issHome, issCaseStudy, cardData }) => {
  const navigate = useNavigate();
  return (
    <div className="pageTitle">
      <div>
        <div
          className="title"
          style={{ justifyContent: issCaseStudy ? "space-between" : "" }}
        >
          <h1>
            {issCaseStudy && <img onClick={() => navigate(-1)} src={back} />}
              {/* {title.length > 10 ? `${title.substring(0, 10)}..` : title} */}
              {title}
          </h1>
          <p className="thickBlack">
            {issCaseStudy ? (
              <span>
                W: <Link to={cardData.cardFullUrl}>Go to </Link>
                {cardData.title}
              </span>
            ) : (
              <span>I: Download CV</span>
            )}
          </p>
        </div>{" "}
        {!issCaseStudy && (
          <div className="contacts">
            <p>
              P: <a href="tel:+234 703 1356 201">+234 703 1356 201</a>
            </p>
            <p>
              E:
              <a href="mailto:kingsleyukejex@gmail.com">
                kingsleyukejex@gmail.com
              </a>
            </p>
          </div>
        )}
      </div>
      {issHome && <p>{subTitle}</p>}
    </div>
  );
};

export default PageTitle;
