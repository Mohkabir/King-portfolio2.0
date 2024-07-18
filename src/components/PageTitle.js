import React from "react";
import { Link } from "react-router-dom";
import back from "../assets/images/back.svg";
import { useNavigate } from "react-router-dom";
import { downloadCV } from "../helpers";
const PageTitle = ({
  title,
  subTitle,
  issHome,
  issCaseStudy,
  cardData,
  work,
  writting,
  info,
}) => {
  const navigate = useNavigate();

  return (
    <div className="pageTitle">
      <div>
        {issCaseStudy ? (
          <h1 className="titleCase">
            <img onClick={() => navigate(-1) || navigate("/")} src={back} />
            {/* <img onClick={() => navigate(-1)} src={back} /> {title} */}
            {title}
            <p className="thickBlack">
              {issCaseStudy && (
                <span>
                  W:{" "}
                  {cardData.cardFullUrl ? (
                    <a target="_blank" href={cardData.cardFullUrl}>
                      Go to {cardData?.goto}
                    </a>
                  ) : (
                    <>{cardData?.goto}</>
                  )}
                </span>
              )}
            </p>
          </h1>
        ) : (
          <h1> {title}</h1>
        )}
        {writting && (
          <div className="titleWritting">
            <p>
              W:{" "}
              <a
                target="_blank"
                style={{ color: "#202124" }}
                href="https://medium.com/@kingsleyukeje"
              >
                Go to Meduim Page
              </a>
            </p>
          </div>
        )}

        {info && (
          <div className="titleInfo">
            <p className="downloadCv" onClick={downloadCV}>
              <span>
                I: <span>Download CV</span>
              </span>
            </p>

            {/* <p>
              <span>P:</span>{" "}
              <a href="tel:+234 703 1356 201">+234 703 1356 201</a>
            </p> */}
            <p>
              <span>E: </span>{" "}
              <a href="mailto:kingsleyukejex@gmail.com">
                kingsleyukejex@gmail.com
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
    // <div className="pageTitle">
    //   <div>
    //     <div
    //       className="title"
    //       style={{ justifyContent: issCaseStudy ? "space-between" : "" }}
    //     >
    //       <h1>
    //         {issCaseStudy && <img onClick={() => navigate(-1)} src={back} />}

    //         {title}
    //       </h1>
    //       <p className="thickBlack">
    //         {issCaseStudy ? (
    //           <span>
    //             W: <Link to={cardData.cardFullUrl}>Go to </Link>
    //             {cardData.title}
    //           </span>
    //         ) : (
    //           <span className="downloadCv" onClick={downloadCV}>
    //             I: Download CV
    //           </span>
    //         )}
    //       </p>
    //     </div>
    //     {!issCaseStudy && work && (
    //       <div className="contacts">
    //         <p>
    //           P: <a href="tel:+234 703 1356 201">+234 703 1356 201</a>
    //         </p>
    //         <p>
    //           E:
    //           <a href="mailto:kingsleyukejex@gmail.com">
    //             kingsleyukejex@gmail.com
    //           </a>
    //         </p>
    //       </div>
    //     )}
    //   </div>
    //   {issHome && <p>{subTitle}</p>}
    // </div>
  );
};

export default PageTitle;
