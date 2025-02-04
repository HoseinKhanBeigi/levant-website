import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import "./introContainer.scss";
import DemoRequest from "../demoRequest/DemoRequest";
import { Button } from "../widgets";

interface IntroContainerInterface {
  image: any;
  subtitle: string;
  description: string;
  logo?: any;
}

export default function IntroContainer({
  image,
  subtitle,
  description,
  logo,
}: IntroContainerInterface) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [contactLink, setContactLink] = useState("");
  useEffect(() => {
    const updateContactLink = () => {
      if (window.innerWidth <= 768) {
        setContactLink("tel:+982147180515");
      } else {
        setContactLink("/contactUs");
      }
    };

    updateContactLink();

    window.addEventListener("resize", updateContactLink);

    return () => {
      window.removeEventListener("resize", updateContactLink);
    };
  }, []);
  return (
    <>
      <div className="introSectionContainer">
        <div className="container">
          <div className="introSectionWrapper">
            <div className="introSectionContentWrapper">
              {logo}
              <div className="introSectionTitle">{subtitle}</div>
              <div className="introSectionSubTitle">{description}</div>
              <div className="buttonSectionWrapper">
                <Button
                  onClick={() => setIsPopupOpen(true)}
                  type="primary"
                  className={"demoRequestSectionButton"}
                >
                  <span>درخواست دمو</span>
                  <span className="icon-demoRequest demoRequestIcon" />
                </Button>
                <Button
                  // onClick={() => console.log("hi")}
                  type="secondary"
                  className={"secondaryIntroButton"}
                >
                  <Link to={"/contactUs"}>ارتباط با کارشناسان</Link>
                  <span className="icon-arrow-left" />
                </Button>
              </div>
            </div>

            <div className="imageSectionWrapper">{image}</div>
          </div>
        </div>
      </div>
      <DemoRequest isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}
