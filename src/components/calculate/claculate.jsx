import React, { useEffect, useRef, useState } from "react";
import "./calculate.scss";

import { Button } from "../widgets";
import { Link } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";
import DemoRequest from "../demoRequest/DemoRequest";

const PricingSection = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null); // Reference to the section
  const firstSet = [
    {
      name: "پلن استارتر",
      cost: "۴۰۰۰ تومان ",
      grad: " #2c67f2 ,#62cff4",
      features: [
        {
          name: "تعداد فراخوانی در ماه",
          content: "١ - ١۰۰۰۰",
          icon: (
            <StaticImage
              style={{ width: "22px", height: "22px" }}
              src={"../../../assets/images/user.png"}
            />
          ),
        },
        {
          name: "استعلام از ثبت احوال",
          content: "ندارد",
          icon: (
            <StaticImage
              style={{ width: "24px", height: "24px" }}
              src={"../../../assets/images/deny.png"}
            />
          ),
        },
        {
          name: "هوش مصنوعی پیشرفته",
          content: "بله",
          icon: (
            <StaticImage
              style={{ width: "22px", height: "22px" }}
              src={"../../../assets/images/check-mark.png"}
            />
          ),
        },
        {
          name: "پنل کاربری تحت وب",
          content: "دارد",
          icon: (
            <StaticImage
              style={{ width: "22px", height: "22px" }}
              src={"../../../assets/images/check-mark.png"}
            />
          ),
        },
        {
          name: "پشتیبانی حرفه ای",
          content: "دارد",
          icon: (
            <StaticImage
              style={{ width: "22px", height: "22px" }}
              src={"../../../assets/images/check-mark.png"}
            />
          ),
        },
      ],
    },
    {
      name: "پلن پرو",
      cost: "۳۵۰۰ تومان ",
      grad: "#ff9900, #ffd800",
      features: [
        {
          name: "تعداد فراخوانی در ماه",
          content: "١۰۰۰۰ - ۵۰۰۰۰",
          icon: (
            <StaticImage
              style={{ width: "22px", height: "22px" }}
              src={"../../../assets/images/user.png"}
            />
          ),
        },
        {
          name: "استعلام از ثبت احوال",
          content: "ندارد",
          icon: (
            <StaticImage
              style={{ width: "24px", height: "24px" }}
              src={"../../../assets/images/deny.png"}
            />
          ),
        },
        {
          name: "هوش مصنوعی پیشرفته",
          content: "بله",
          icon: (
            <StaticImage
              style={{ width: "22px", height: "22px" }}
              src={"../../../assets/images/check-mark.png"}
            />
          ),
        },
        {
          name: "پنل کاربری تحت وب",
          content: "دارد",
          icon: (
            <StaticImage
              style={{ width: "22px", height: "22px" }}
              src={"../../../assets/images/check-mark.png"}
            />
          ),
        },
        {
          name: "پشتیبانی حرفه ای",
          content: "دارد",
          icon: (
            <StaticImage
              style={{ width: "22px", height: "22px" }}
              src={"../../../assets/images/check-mark.png"}
            />
          ),
        },
      ],
    },
    {
      name: "پلن مکس",
      cost: "۳۰۰۰ تومان ",
      grad: " #2c67f2 ,#62cff4",
      features: [
        {
          name: "تعداد فراخوانی در ماه",
          content: "۵۰۰۰۰+",
          icon: (
            <StaticImage
              style={{ width: "22px", height: "22px" }}
              src={"../../../assets/images/user.png"}
            />
          ),
        },
        {
          name: "استعلام از ثبت احوال",
          content: "ندارد",
          icon: (
            <StaticImage
              style={{ width: "24px", height: "24px" }}
              src={"../../../assets/images/deny.png"}
            />
          ),
        },
        {
          name: "هوش مصنوعی پیشرفته",
          content: "بله",
          icon: (
            <StaticImage
              style={{ width: "22px", height: "22px" }}
              src={"../../../assets/images/check-mark.png"}
            />
          ),
        },
        {
          name: "پنل کاربری تحت وب",
          content: "دارد",
          icon: (
            <StaticImage
              style={{ width: "22px", height: "22px" }}
              src={"../../../assets/images/check-mark.png"}
            />
          ),
        },
        {
          name: "پشتیبانی حرفه ای",
          content: "دارد",
          icon: (
            <StaticImage
              style={{ width: "22px", height: "22px" }}
              src={"../../../assets/images/check-mark.png"}
            />
          ),
        },
      ],
    },
  ];
  const secondSet = [
    {
      name: "پلن استاندارد",
      cost: "۵۰۰۰ تومان ",
      grad: " #2c67f2 ,#62cff4",
      features: [
        {
          name: "تعداد فراخوانی در ماه",
          content: "١ - ١۰۰۰۰",
          icon: (
            <StaticImage
              style={{ width: "22px", height: "22px" }}
              src={"../../../assets/images/user.png"}
            />
          ),
        },
        {
          name: "استعلام از ثبت احوال",
          content: "دارد",
          icon: (
            <StaticImage
              style={{ width: "22px", height: "22px" }}
              src={"../../../assets/images/user.png"}
            />
          ),
        },
        {
          name: "هوش مصنوعی پیشرفته",
          content: "بله",
          icon: (
            <StaticImage
              style={{ width: "22px", height: "22px" }}
              src={"../../../assets/images/user.png"}
            />
          ),
        },
        {
          name: "پنل کاربری تحت وب",
          content: "دارد",
          icon: (
            <StaticImage
              style={{ width: "22px", height: "22px" }}
              src={"../../../assets/images/user.png"}
            />
          ),
        },
        {
          name: "پشتیبانی حرفه ای",
          content: "دارد",
          icon: (
            <StaticImage
              style={{ width: "22px", height: "22px" }}
              src={"../../../assets/images/user.png"}
            />
          ),
        },
      ],
    },
    {
      name: "پلن گسترده",
      cost: "۴۵۰۰ تومان ",
      grad: "#ff9900, #ffd800",
      features: [
        {
          name: "تعداد فراخوانی در ماه",
          content: "١۰۰۰۰ - ۵۰۰۰۰",
          icon: (
            <StaticImage
              style={{ width: "22px", height: "22px" }}
              src={"../../../assets/images/user.png"}
            />
          ),
        },
        {
          name: "استعلام از ثبت احوال",
          content: "دارد",
          icon: (
            <StaticImage
              style={{ width: "22px", height: "22px" }}
              src={"../../../assets/images/user.png"}
            />
          ),
        },
        {
          name: "هوش مصنوعی پیشرفته",
          content: "بله",
          icon: (
            <StaticImage
              style={{ width: "22px", height: "22px" }}
              src={"../../../assets/images/user.png"}
            />
          ),
        },
        {
          name: "پنل کاربری تحت وب",
          content: "دارد",
          icon: (
            <StaticImage
              style={{ width: "22px", height: "22px" }}
              src={"../../../assets/images/user.png"}
            />
          ),
        },
        {
          name: "پشتیبانی حرفه ای",
          content: "دارد",
          icon: (
            <StaticImage
              style={{ width: "22px", height: "22px" }}
              src={"../../../assets/images/user.png"}
            />
          ),
        },
      ],
    },
    {
      name: "پلن بینهایت",
      cost: "۴۰۰۰ تومان ",
      grad: " #2c67f2 ,#62cff4",
      features: [
        {
          name: "تعداد فراخوانی در ماه",
          content: "۵۰۰۰۰+",
          icon: (
            <StaticImage
              style={{ width: "22px", height: "22px" }}
              src={"../../../assets/images/user.png"}
            />
          ),
        },
        {
          name: "استعلام از ثبت احوال",
          content: "دارد",
          icon: (
            <StaticImage
              style={{ width: "22px", height: "22px" }}
              src={"../../../assets/images/user.png"}
            />
          ),
        },
        {
          name: "هوش مصنوعی پیشرفته",
          content: "بله",
          icon: (
            <StaticImage
              style={{ width: "22px", height: "22px" }}
              src={"../../../assets/images/user.png"}
            />
          ),
        },
        {
          name: "پنل کاربری تحت وب",
          content: "دارد",
          icon: (
            <StaticImage
              style={{ width: "22px", height: "22px" }}
              src={"../../../assets/images/user.png"}
            />
          ),
        },
        {
          name: "پشتیبانی حرفه ای",
          content: "دارد",
          icon: (
            <StaticImage
              style={{ width: "22px", height: "22px" }}
              src={"../../../assets/images/user.png"}
            />
          ),
        },
      ],
    },
  ];

  const n = firstSet.length;
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setIsVisible(!isVisible);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // When in view, mark as visible
          observer.unobserve(sectionRef.current); // Stop observing after rendering
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // When in view, mark as visible
          observer.unobserve(sectionRef.current); // Stop observing after rendering
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [isVisible]);

  return (
    <>
      <div className="pricing-section">
        <div className="pricing-section_item">
          <div className="pricing-section_info-section">
            <h2>رایگان امتحان کنید!</h2>
            <p style={{ marginTop: "2rem" }}>
              سرویس eKYC غیرحضوری ویدیویی مبتنی بر هوش مصنوعی لوانت را به صورت
              رایگان و کامل تست کنید.
            </p>
            {/*<p><span style={{color: "#ffbb00"}}>*/}
            {/*ویژگی تشخیص زنده بودن<span style={{color: "white"}}>،</span> نتیجه بررسی، پنل مشتریان<span*/}
            {/*    style={{color: "white"}}>،</span> گزارشات و مستندات پیاده‌سازی</span> به طور کار در اختیار*/}
            {/*    شما قرار می‌گیرد تا بتوانید به‌صورت دقیق و سریع سرویس ما را بررسی نمایید.*/}
            {/*</p>*/}
            <p>
              تیم ‌های فنی و فروش لوانت در تمام مراحل در کنار شما هستند تا روند
              پیاده‌سازی آسان‌تر و سریع‌تر انجام شود.
            </p>
            <div className="pricining-section_btnsContainer">
              <Button type="secondary" onClick={() => setIsPopupOpen(true)}>
                تست رایگان و آسان
              </Button>
              <Button type="outlined" className="callUsBtn">
                <Link to="/contactUs">تماس با واحد فروش</Link>
              </Button>
            </div>
          </div>
          <div ref={sectionRef} className="pricining-section_cards">
            <label className="toggler-wrapper style-1">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <div className="toggler-slider">
                <div className="toggler-knob"></div>
              </div>
            </label>
            {isVisible && (
              <div className="body" style={{ "--n": n }}>
                {(!isChecked ? secondSet : firstSet).map((c, i) => (
                  <article
                    key={i}
                    className="article"
                    style={{
                      "--i": i,
                      "--grad": c.grad,
                    }}
                  >
                    <header className="header">
                      <h3>{c.name}</h3>
                      <span>{c.cost}</span>
                    </header>
                    <div
                      className="section"
                      style={{
                        paddingBottom: "20px",
                      }}
                    >
                      <ul
                        style={{
                          listStyle: "none",
                          padding: "20px",
                          height: "100%",
                        }}
                      >
                        {c.features.map((feature, index) => (
                          <li
                            key={index}
                            style={{
                              marginBottom: "10px",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              width: "100%",
                            }}
                          >
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                display: "flex",
                                justifyContent: "start",
                                gap: "5px",
                                alignItems: "center",
                              }}
                            >
                              {feature.icon} {feature.name}
                            </span>
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "500",
                              }}
                            >
                              {" "}
                              {feature.content}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <DemoRequest isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};

export default PricingSection;
