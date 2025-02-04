import React, { useEffect, useState } from "react";
import "./logoSection.scss";
import "../slideShow/slideShow.scss";
import { StaticImage } from "gatsby-plugin-image";

export default function LogoSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Initialize isMobile state based on the initial window width
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 1400);
    };

    // Run once on component mount to set initial state
    updateIsMobile();

    // Update `isMobile` on every window resize
    window.addEventListener("resize", updateIsMobile);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="logos">
          <div className="logos-slide">
            <div className="logoSectionLogo">
              <span className="logoItemImage" style={{ background: "white" }}>
                {" "}
                <StaticImage
                  src={"../../../assets/images/faraboomcolor.png"}
                  alt={"Logo 1"}
                  className="logoImage"
                />
              </span>
            </div>
            <div className="logoSectionLogo">
              <span className="logoItemImage" style={{ background: "white" }}>
                <StaticImage
                  src={"../../../assets/images/garnocolor.png"}
                  alt={"Logo 2"}
                  className="logoImage"
                />
              </span>
            </div>
            <div className="logoSectionLogo">
              <span className="logoItemImage" style={{ background: "white" }}>
                {" "}
                <StaticImage
                  src={"../../../assets/images/KD-color.png"}
                  alt={"Logo 3"}
                  className="logoImage"
                />
              </span>
            </div>
            <div className="logoSectionLogo">
              <span className="logoItemImage" style={{ background: "white" }}>
                <StaticImage
                  src={"../../../assets/images/khobregancolor.png"}
                  alt={"Logo 4"}
                  className="logoImage"
                />
              </span>
            </div>
            <div className="logoSectionLogo">
              <span className="logoItemImage" style={{ background: "white" }}>
                {" "}
                <StaticImage
                  src={"../../../assets/images/kiancolor.png"}
                  alt={"Logo 5"}
                  className="logoImage"
                />
              </span>
            </div>
            <div className="logoSectionLogo">
              <span className="logoItemImage">
                {" "}
                <StaticImage
                  src={"../../../assets/images/maanicolor.png"}
                  alt={"Logo 6"}
                  className="logoImage"
                />
              </span>
            </div>
            <div className="logoSectionLogo">
              <span className="logoItemImage">
                <StaticImage
                  src={"../../../assets/images/mabnacolor.png"}
                  alt={"Logo 7"}
                  className="logoImage"
                />
              </span>
            </div>
            <div className="logoSectionLogo">
              <span className="logoItemImage">
                <StaticImage
                  src={"../../../assets/images/pezeshkicolor.png"}
                  alt={"Logo 8"}
                  className="logoImage"
                />
              </span>
            </div>
            <div className="logoSectionLogo">
              <span className="logoItemImage">
                {" "}
                <StaticImage
                  src={"../../../assets/images/radin-color.png"}
                  alt={"Logo 9"}
                  className="logoImage"
                />
              </span>
            </div>
            <div className="logoSectionLogo">
              <span className="logoItemImage" style={{ background: "white" }}>
                <StaticImage
                  src={"../../../assets/images/sanbodcolor.png"}
                  alt={"Logo 10"}
                  className="logoImage"
                />
              </span>
            </div>
          </div>
        </div>
      ) : (
        <section className="logoSection">
          <div
            className="LogoSectionContainer"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <h2 className="section-title">برخی از مشتریان لوانت</h2>
            <p className="section-subtitle">
              افتخار ما همکاری با برندهای مطرحی است که به کیفیت خدمات ما اعتماد
              کرده‌اند
            </p>
            <div className="logoGrid">
              <div className="logoItem">
                <StaticImage
                  src={"../../../assets/images/faraboomcolor.png"}
                  alt={"Logo 1"}
                  className="logoImage"
                />
              </div>
              <div className="logoItem">
                <StaticImage
                  src={"../../../assets/images/garnocolor.png"}
                  alt={"Logo 2"}
                  className="logoImage"
                />
              </div>
              <div className="logoItem">
                <StaticImage
                  src={"../../../assets/images/KD-color.png"}
                  alt={"Logo 3"}
                  className="logoImage"
                />
              </div>
              <div className="logoItem">
                <StaticImage
                  src={"../../../assets/images/khobregancolor.png"}
                  alt={"Logo 4"}
                  className="logoImage"
                />
              </div>
              <div className="logoItem">
                <StaticImage
                  src={"../../../assets/images/kiancolor.png"}
                  alt={"Logo 5"}
                  className="logoImage"
                />
              </div>
              <div className="logoItem">
                <StaticImage
                  src={"../../../assets/images/maanicolor.png"}
                  alt={"Logo 6"}
                  className="logoImage"
                />
              </div>
              <div className="logoItem">
                <StaticImage
                  src={"../../../assets/images/mabnacolor.png"}
                  alt={"Logo 7"}
                  className="logoImage"
                />
              </div>
              <div className="logoItem">
                <StaticImage
                  src={"../../../assets/images/pezeshkicolor.png"}
                  alt={"Logo 8"}
                  className="logoImage"
                />
              </div>
              <div className="logoItem">
                <StaticImage
                  src={"../../../assets/images/radin-color.png"}
                  alt={"Logo 9"}
                  className="logoImage"
                />
              </div>
              <div className="logoItem">
                <StaticImage
                  src={"../../../assets/images/sanbodcolor.png"}
                  alt={"Logo 10"}
                  className="logoImage"
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
