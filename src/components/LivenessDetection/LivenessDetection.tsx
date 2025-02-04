import React from "react";
import "./whyLevant.scss";
import "../../pages/index.scss";
import HorizontalAccordion from "../accordionSection/accordion";
import {StaticImage} from "gatsby-plugin-image";

export default function LivenessDetection() {
    const accordionData = [
        {
            title: "تبدیل گفتار به متن (Speech to text)",
            content: (
                <div className="content-box">
                    <div className="contentContainer">
                        <h3>تبدیل گفتار به متن</h3>
                        <h4>(Speech to text)</h4>
                        <p>
                            با تبدیل صدای کاربر به متن، این فناوری می تواند به طور دقیق کلمات
                            و لحن گفتار مشتری را تحلیل کند. این روش، یکی از دقیق‌ترین روش‌ها
                            برای تشخیص هویت افراد و جلوگیری از هرگونه تقلب است.
                        </p>
                    </div>
                    <StaticImage
                        src="../../../assets/images/speech.jpeg"
                        alt="Speech to text"
                        className="accordionContentIcon"
                    />
                </div>
            ),
            style: {
                content: {
                    borderRadius: "10px",
                },
            },
            icon: (
                <svg
                    className="icon accordionIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    viewBox="0 0 64 64"
                >
                    <path
                        fill="white"
                        d="M38.478 42.632c-4.644-1.466-3.322-2.633 1.11-4.298c2.123-.799.832-2.484.89-3.832c.026-.617 2.452-.494 2.276-2.874c-.124-1.676-3.816-4.064-4.822-5.083c-.581-.588 1.184-2.197-.059-3.612c-1.697-1.934-1.965-5.299-2.992-7.181c0 0 .783-1.196.183-1.876c-5.176-5.859-24.491-5.321-29.427 3.302c-5.541 9.68-5.615 23.059 5.906 30.267C16.667 50.65 10.104 62 10.104 62h20.319c0-1.938-2.266-8.89 1.7-8.578c3.446.271 7.666.122 7.292-3.77c-.113-1.174-.246-2.231.574-3.204c.82-.972 2.007-2.706-1.511-3.816m4.651-1.827L62 43.277v-4.943zM58.46 57.081l2.024-4.281l-17.355-9.368zm2.024-28.315l-2.024-4.282l-15.331 13.651z"
                    ></path>
                </svg>
            ),
        },

        {
            title: "حرکات دست (Hand gesture)",
            content: (
                <div className="content-box">
                    <div className="contentContainer">
                        <h3>حرکات دست</h3>
                        <h4>(Hand gesture)</h4>
                        <p>
                            با تحلیل حرکات دست، سیستم می‌تواند تشخیص دهد که آیا فرد به دستورات
                            سیستم پاسخ می‌دهد یا خیر. به عنوان مثال، از کاربر خواسته می‌شود که
                            دست خود را تکان دهد یا یک علامت خاص را نمایش دهد.
                        </p>
                    </div>
                    <StaticImage
                        src="../../../assets/images/hand.jpeg"
                        alt="API icon"
                        className="accordionContentIcon"
                    />
                </div>

            ),
            style: {
                content: {
                    borderRadius: "10px",
                },
            },
            icon: (
                <svg
                    className="icon accordionIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    viewBox="0 0 24 24"
                >
                    <path fill="white" d="M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></path>
                    <path
                        fill="white"
                        d="M2.728 5.818a.75.75 0 1 0-1.455.364l.382 1.528a8.21 8.21 0 0 0 5.595 5.869v4.473c0 .898 0 1.648.08 2.242c.084.628.27 1.195.726 1.65c.455.456 1.022.642 1.65.726c.595.08 1.344.08 2.242.08h.104c.899 0 1.648 0 2.243-.08c.627-.084 1.194-.27 1.65-.726s.64-1.022.725-1.65c.08-.594.08-1.344.08-2.242v-4.193a2.62 2.62 0 0 1 1.856 2.208l.65 5.52a.75.75 0 0 0 1.489-.175l-.65-5.52A4.124 4.124 0 0 0 16 12.25H8.085A6.71 6.71 0 0 1 3.11 7.346z"
                    ></path>
                </svg>
            ),
        },
        {
            title: "موقعیت سر (Head position)",
            content: (
                <div className="content-box">
                    <div className="contentContainer">
                        <h3>موقعیت سر</h3>
                        <h4>(Head position)</h4>

                        <p>
                            این قابلیت با تحلیل حرکت سر و تغییرات آن در طول ویدیو، تشخیص
                            می‌دهد که آیا سر فرد ثابت است یا حرکت طبیعی دارد. یک عکس یا ماسک
                            نمی‌تواند حرکت طبیعی سر را تقلید کند.
                        </p>
                    </div>
                    <StaticImage
                        src="../../../assets/images/head.jpg"
                        alt="API icon"
                        className="accordionContentIcon"
                    />
                </div>
            ),
            style: {
                content: {
                    borderRadius: "10px",
                },
            },
            icon: (
                <svg
                    className="icon accordionIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    viewBox="0 0 256 256"
                >
                    <path
                        fill="white"
                        d="M198.13 202.85A8 8 0 0 1 192 216H24a8 8 0 0 1-6.12-13.15c14.94-17.78 33.52-30.41 54.17-37.17a68 68 0 1 1 71.9 0c20.65 6.76 39.23 19.39 54.18 37.17m-1.27-141.46a8 8 0 0 0-4.22 10.5a92.26 92.26 0 0 1 0 72.22a8 8 0 1 0 14.72 6.29a108.36 108.36 0 0 0 0-84.8a8 8 0 0 0-10.5-4.21m39.85-8.54a8 8 0 1 0-14.7 6.3a124.43 124.43 0 0 1 0 97.7a8 8 0 1 0 14.7 6.3a140.34 140.34 0 0 0 0-110.3"
                    ></path>
                </svg>
            ),
        },
    ];
    return (
        <section
            className="LivenessDetectionContainer"
            style={{backgroundColor: "#F5F7FA", width: "100%"}}
        >
            <h2
                className="section-title "
                data-aos="fade-right"
                data-aos-duration="3000"
            >
                راهکارهای نوآورانه
                <span className="realistic-marker-highlight">
          {" "}
                    برای تشخیص زنده بودن کاربران
        </span>
            </h2>
            <h3
                className="section-subtitle"
                data-aos="fade-right"
                data-aos-duration="3000"
            >
                لوانت از روش‌های متنوع و هوشمند برای بررسی زنده بودن کاربران استفاده
                می‌کند تا امنیت احراز هویت را ارتقا دهد.
            </h3>

            <HorizontalAccordion accordionData={accordionData}/>

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
        </section>
    );
}
