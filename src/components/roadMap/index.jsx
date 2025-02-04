import React, { useEffect, useRef, useState } from "react";
import "./roadMap.scss";
import { StaticImage } from "gatsby-plugin-image";
import Image2 from "../../../assets/icons/2";
import Image4 from "../../../assets/icons/4";
import Image6 from "../../../assets/icons/6";

export default function RoadMap() {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null); // Reference to the section

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 1400);
    };
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, [isMobile]);

  useEffect(() => {
    const observer = isMobile
      ? new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(sectionRef.current);
            }
          },
          { threshold: 0.25 }
        )
      : new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(sectionRef.current);
            }
          },
          { threshold: 0.5 }
        );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <section style={{ width: "100%", margin: "auto" }}>
          <h3
            className="section-title"
            style={{ maxWidth: "1600px", width: "80%" }}
          >
            <span className="realistic-marker-highlight">
              فرایند ساده و سریع{" "}
            </span>
            برای احراز هویت آنلاین
          </h3>
          <h2
            className="section-subtitle"
            style={{
              maxWidth: "1600px",
              fontWeight: "300",
              textAlign: "justify",
            }}
          >
            لوانت با چهار گام ساده، امنیت و اصالت هویت کاربران شما را تأیید
            می‌کند. این فرایند با تکنولوژی‌ پیشرفته هوش مصنوعی و با استعلام
            اتوماتیک از ثبت احوال کشور، تضمین می‌کند که هویت مشتریان شما به طور
            دقیق و با اطمینان بالا تأیید شود.{" "}
          </h2>
          <div className="imageContainer" style={{ marginBottom: "12rem" }}>
            <div className="animate mobileSizeItem">
              <StaticImage src="../../../assets/images/mob1.png" />
            </div>
            <div id="image" className="animate mobileSizeItem">
              <StaticImage src="../../../assets/images/mob2.png" />
            </div>
            <div id="image" className="animate mobileSizeItem">
              <StaticImage src="../../../assets/images/mob3.png" />
            </div>
            <div id="image" className="animate mobileSizeItem">
              <StaticImage src="../../../assets/images/mob4.png" />
            </div>
            <div id="image" className="animate mobileSizeItem">
              <StaticImage src="../../../assets/images/mob5.png" id="image" />
            </div>
            <div id="image" className="animate mobileSizeItem">
              <StaticImage src="../../../assets/images/mob6.png" />
            </div>
            <div id="image" className="animate mobileSizeItem">
              <StaticImage src="../../../assets/images/mob7.png" id="image" />
            </div>
          </div>
          <svg
            xmlns="//www.w3.org/2000/svg"
            version="1.1"
            className="svg-filters"
            style={{ display: "none" }}
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
        </section>
      ) : (
        <section
          ref={sectionRef}
          style={{
            maxWidth: "1600px",
            width: "100%",
            margin: "auto",
            marginTop: "-3rem",
          }}
        >
          {isVisible && (
            <>
              <h3
                className="section-title"
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <span className="realistic-marker-highlight">
                  فرایند ساده و سریع{" "}
                </span>
                برای احراز هویت آنلاین
              </h3>
              <h2
                className="section-subtitle"
                style={{ marginBottom: "0" }}
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                لوانت با چهار گام ساده، امنیت و اصالت هویت کاربران شما را تأیید
                می‌کند. این فرایند با تکنولوژی‌ پیشرفته هوش مصنوعی و با استعلام
                اتوماتیک از ثبت احوال کشور، تضمین می‌کند که هویت مشتریان شما به
                طور دقیق و با اطمینان بالا تأیید شود.{" "}
              </h2>
              <div className="imageContainer ">
                <div id="image" className="animate">
                  <StaticImage src="../../../assets/images/1.png" />
                </div>
                <Image2 className="animate" />
                <div id="image" className="animate">
                  <StaticImage src="../../../assets/images/2.png" />
                </div>
                <Image4 className="animate" />
                <div id="image" className="animate">
                  <StaticImage src="../../../assets/images/3.png" id="image" />
                </div>
                <Image6 className="animate" />
                <div id="image" className="animate">
                  <StaticImage src="../../../assets/images/7.svg" id="image" />
                </div>
              </div>
            </>
          )}
          <svg
            xmlns="//www.w3.org/2000/svg"
            version="1.1"
            className="svg-filters"
            style={{ display: "none" }}
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
        </section>
      )}
    </>
  );
}
