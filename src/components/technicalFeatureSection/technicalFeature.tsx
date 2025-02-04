// VerificationFeature.js
import React, {useEffect, useState} from "react";
import "./technicalFeature.scss";
// @ts-ignore
import {StaticImage} from "gatsby-plugin-image";
import phone from "../../../assets/images/phone.png";

const VerificationFeature = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const updateIsMobile = () => {
            setIsMobile(window.innerWidth < 1400);
        };

        updateIsMobile();

        window.addEventListener("resize", updateIsMobile);

        return () => window.removeEventListener("resize", updateIsMobile);
    }, [isMobile]);

    return (
        <>
            {isMobile ? (
                <section className="technicalFeatureSection">
                    <div className="technicalFeatureWrapper">
                        <img className="phone" src={phone} alt="Phone Picture"/>
                        <div
                            className="mobile"
                            style={{flexDirection: "column", zIndex: "100", width: "18rem"}}
                        >
                            <div className="feature-item leftSide">
                                <StaticImage
                                    src="../../../assets/images/target.png"
                                    alt="API icon"
                                    className="icon"
                                />
                                <span>دقت تشخیص چهره: ۹۹%</span>
                            </div>
                            <div className="feature-item leftSide">
                                <StaticImage
                                    src="../../../assets/images/time.png"
                                    alt="API icon"
                                    className="icon"
                                />
                                <span>مدت زمان احراز هویت: کمتر از یک دقیقه</span>
                            </div>
                            <div className="feature-item leftSide">
                                <StaticImage
                                    src="../../../assets/images/settings.png"
                                    alt="API icon"
                                    className="icon"
                                />
                                <span> فرایند تمام اتوماتیک: ١۰۰% </span>
                            </div>
                            <div className="feature-item leftSide">
                                <StaticImage
                                    src="../../../assets/images/authorize.png"
                                    alt="API icon"
                                    className="icon"
                                />
                                <span>احراز هویت موفق: ١۰۰+ هزار</span>
                            </div>
                            <div className="feature-item leftSide">
                                <StaticImage
                                    src="../../../assets/images/success1.png"
                                    alt="API icon"
                                    className="icon"
                                />
                                <span>نرخ موفقیت درخواست‌ها: ۹۹.۹۹۹% </span>
                            </div>
                            <div className="feature-item leftSide">
                                <StaticImage
                                    src="../../../assets/images/spoofing.png"
                                    alt="API icon"
                                    className="icon"
                                />
                                <span>شناسایی تقلب: ۹۹.۵% </span>
                            </div>
                            <div className="feature-item leftSide">
                                <StaticImage
                                    src="../../../assets/images/stable.png"
                                    alt="API icon"
                                    className="icon"
                                />
                                <span>پایداری سرویس: ۹۹.۹۹۹%</span>
                            </div>
                            <div className="feature-item leftSide">
                                <StaticImage
                                    src="../../../assets/images/fastresponse.png"
                                    alt="API icon"
                                    className="icon"
                                />
                                <span>نرخ پاسخگویی:۵۰۰ میلی‌ثانیه</span>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <section
                    style={{
                        backgroundColor: "#2F75F9",
                        height: "63rem",
                        marginTop: "-2rem",
                    }}
                >
                    <div className="verification-container">
                        <div className="feature-list">
                            <div
                                className="feature-item rightSide"
                                data-aos="fade-right"
                                data-aos-duration="1000"
                            >
                                <StaticImage
                                    src="../../../assets/images/time.png"
                                    alt="API icon"
                                    className="icon"
                                />
                                <span>مدت زمان احراز هویت: کمتر از یک دقیقه</span>
                            </div>
                            <div
                                className="feature-item rightSide"
                                data-aos="fade-right"
                                data-aos-duration="1500"
                            >
                                <StaticImage
                                    src="../../../assets/images/settings.png"
                                    alt="API icon"
                                    className="icon"
                                />
                                <span> فرایند تمام اتوماتیک: ١۰۰% </span>
                            </div>
                            <div
                                className="feature-item rightSide"
                                data-aos="fade-right"
                                data-aos-duration="2000"
                            >
                                <StaticImage
                                    src="../../../assets/images/authorize.png"
                                    alt="API icon"
                                    className="icon"
                                />
                                <span>احراز هویت موفق: ١۰۰+ هزار</span>
                            </div>
                            <div
                                className="feature-item rightSide"
                                data-aos="fade-right"
                                data-aos-duration="2500"
                            >
                                <StaticImage
                                    src="../../../assets/images/success1.png"
                                    alt="API icon"
                                    className="icon"
                                />
                                <span>نرخ موفقیت درخواست‌ها: ۹۹.۹۹۹% </span>
                            </div>
                        </div>
                        <div
                            className="image-section"
                            data-aos="zoom-in"
                            data-aos-duration="3000"
                        >
                            <StaticImage
                                src="../../../assets/images/womanWithPhone.png"
                                alt="Phone Picture"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    position: "relative",
                                    top: "88px",
                                }}
                            />
                        </div>
                        <div
                            className="verification-feature-container"
                            data-aos="fade-right"
                            data-aos-duration="3000"
                        >
                            <img className="phone" src={phone} alt="Phone Picture"/>

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "start",
                                    alignItems: "center",
                                    zIndex: "10",
                                    marginTop: "182px",
                                    marginRight: "55px",
                                    gap: "7px",
                                }}
                            >
                                <div className="feature-item leftSide">
                                    <StaticImage
                                        src="../../../assets/images/target.png"
                                        alt="API icon"
                                        className="icon"
                                        objectFit="cover"
                                    />
                                    <span>دقت تشخیص چهره: ٩٩%</span>
                                </div>
                                <div className="feature-item leftSide">
                                    <StaticImage
                                        src="../../../assets/images/spoofing.png"
                                        alt="API icon"
                                        className="icon"
                                    />
                                    <span>شناسایی تقلب: ٩٩.۵% </span>
                                </div>
                                <div className="feature-item leftSide">
                                    <StaticImage
                                        src="../../../assets/images/stable.png"
                                        alt="API icon"
                                        className="icon"
                                    />
                                    <span>پایداری سرویس: ٩٩.٩٩٩%</span>
                                </div>
                                <div className="feature-item leftSide">
                                    <StaticImage
                                        src="../../../assets/images/fastresponse.png"
                                        alt="API icon"
                                        className="icon"
                                    />
                                    <span>نرخ پاسخگویی: ۵۰۰ میلی‌ثانیه</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default VerificationFeature;
