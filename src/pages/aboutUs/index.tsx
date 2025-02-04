import React from "react";
import Layout from "../../components/layout/mainLayout";
import AboutUsHeroSection from "../../components/aboutUsHero/aboutUsHero";
import OrganizationValue from "../../components/organizationValue/organizationValue";
import {StaticImage} from "gatsby-plugin-image";

export default function AboutUs() {
    return (
        <Layout>
            <AboutUsHeroSection/>
            <OrganizationValue/>
            <div style={{width: "80%"}}>
                <div className="logos">
                    <div className="logos-slide">
                        <div className="logoSectionLogo">
              <span className="logoItemImage" style={{background: "white"}}>
                {" "}
                  <StaticImage
                      src={"../../../assets/images/faraboomcolor.png"}
                      alt={"Logo 1"}
                      className="logoImage"
                  />
              </span>
                        </div>
                        <div className="logoSectionLogo">
              <span className="logoItemImage" style={{background: "white"}}>
                <StaticImage
                    src={"../../../assets/images/garnocolor.png"}
                    alt={"Logo 2"}
                    className="logoImage"
                />
              </span>
                        </div>
                        <div className="logoSectionLogo">
              <span className="logoItemImage" style={{background: "white"}}>
                {" "}
                  <StaticImage
                      src={"../../../assets/images/KD-color.png"}
                      alt={"Logo 3"}
                      className="logoImage"
                  />
              </span>
                        </div>
                        <div className="logoSectionLogo">
              <span className="logoItemImage" style={{background: "white"}}>
                <StaticImage
                    src={"../../../assets/images/khobregancolor.png"}
                    alt={"Logo 4"}
                    className="logoImage"
                />
              </span>
                        </div>
                        <div className="logoSectionLogo">
              <span className="logoItemImage" style={{background: "white"}}>
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
              <span className="logoItemImage" style={{background: "white"}}>
                <StaticImage
                    src={"../../../assets/images/sanbodcolor.png"}
                    alt={"Logo 10"}
                    className="logoImage"
                />
              </span>
                        </div>
                    </div>
                    <div className="logos-slide">
                        <div className="logoSectionLogo">
              <span className="logoItemImage" style={{background: "white"}}>
                {" "}
                  <StaticImage
                      src={"../../../assets/images/faraboomcolor.png"}
                      alt={"Logo 1"}
                      className="logoImage"
                  />
              </span>
                        </div>
                        <div className="logoSectionLogo">
              <span className="logoItemImage" style={{background: "white"}}>
                <StaticImage
                    src={"../../../assets/images/garnocolor.png"}
                    alt={"Logo 2"}
                    className="logoImage"
                />
              </span>
                        </div>
                        <div className="logoSectionLogo">
              <span className="logoItemImage" style={{background: "white"}}>
                {" "}
                  <StaticImage
                      src={"../../../assets/images/KD-color.png"}
                      alt={"Logo 3"}
                      className="logoImage"
                  />
              </span>
                        </div>
                        <div className="logoSectionLogo">
              <span className="logoItemImage" style={{background: "white"}}>
                <StaticImage
                    src={"../../../assets/images/khobregancolor.png"}
                    alt={"Logo 4"}
                    className="logoImage"
                />
              </span>
                        </div>
                        <div className="logoSectionLogo">
              <span className="logoItemImage" style={{background: "white"}}>
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
              <span className="logoItemImage" style={{background: "white"}}>
                <StaticImage
                    src={"../../../assets/images/sanbodcolor.png"}
                    alt={"Logo 10"}
                    className="logoImage"
                />
              </span>
                        </div>
                    </div>
                </div>
            </div>
            <svg
                xmlns="//www.w3.org/2000/svg"
                version="1.1"
                className="svg-filters"
                style={{display: "none"}}
            >
                <defs>
                    <filter id="marker-shape">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0 0.15"
                            numOctaves="1"
                            result="warp"
                        />
                        <feDisplacementMap
                            xChannelSelector="R"
                            yChannelSelector="G"
                            scale="30"
                            in="SourceGraphic"
                            in2="warp"
                        />
                    </filter>
                </defs>
            </svg>
        </Layout>
    );
}
