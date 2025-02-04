import React from "react";
import Layout from "../../components/layout/mainLayout";
import ContactForm from "../../components/contactForm/ContactForm";
import SocialMap from "../../components/socialMap/SocialMap";
import { StaticImage } from "gatsby-plugin-image";
import ContactInfo from "../../components/contactInfo/ContactInfo";

export default function ContactUs() {
  return (
    <Layout>
      <ContactInfo />
      <div className="contactUs-body">
        <ContactForm />
        <SocialMap />
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
      </div>
    </Layout>
  );
}
