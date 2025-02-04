import React, {useMemo, useState} from "react";
import {Link} from "gatsby";

import DemoRequest from "../demoRequest/DemoRequest";

import "./layout.scss";
import {PRODUCT_ROUTES} from "./routes";
import PricingSection from "../calculate/claculate";
import AlvanLogoCrop from "../../../assets/icons/alvanLogoCrop";

export default function Footer() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const products = useMemo(
        () =>
            PRODUCT_ROUTES.map((item) => (
                <Link key={item.link} to={item.link}>
                    <div className="footerSubTitle">{item.title}</div>
                </Link>
            )),
        []
    );

    return (
        <>
            <PricingSection/>
            <div
                style={{
                    padding: "0 calc((100vw - 1600px) / 2)",
                    backgroundColor: "#f7f9fc",
                }}
            >
                <div className="footerContainer">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <div className="logoContainer"></div>
                    </div>
                    <div className="footerInfoContainer">
                        <div className="aboutLevant">
                            <div
                                className="aboutLevantHeaderWrapper"
                                style={{
                                    display: "flex",
                                    justifyContent: "start",
                                    flexWrap: "wrap",
                                    alignItems: "center",
                                    borderBottom: "2px solid black",
                                    marginBottom: "1rem",
                                    paddingBottom: "1rem",
                                    gap: "1rem",
                                }}
                            >
                                <Link to={"/"} className="alvanButton">
                                    <AlvanLogoCrop/>
                                </Link>
                                <h3>درباره لوانت </h3>
                            </div>

                            <p style={{padding: "22px"}}>
                                لوانت، شرکتی پیشرو در حوزه توسعه نرم‌افزارهای نوآورانه در صنعت
                                مالی است که با بهره‌گیری از هوش مصنوعی پیشرفته، راهکارهای جامع و
                                هوشمندانه‌ای را برای احراز هویت و مدیریت ارتباط با مشتریان ارائه
                                می‌دهد.
                            </p>
                            <div className="linkedInContainer">
                                <a
                                    style={{color: "#B8B8B8"}}
                                    className="Levants"
                                    href={`mailto:support@levants.io?subject=سلام&body=سلام!%20می‌خواهم%20با%20شما%20ارتباط%20برقرار%20کنم.`}
                                >
                                    support@levants.io
                                </a>
                                <a href="https://www.linkedin.com/company/levantsio">
                                    <span className="icon-linkedIn"></span>
                                </a>
                            </div>
                        </div>
                        <div className="levantsProducts">
                            <h3 style={{marginTop: "1rem"}}>دسترسی سریع</h3>
                            <div>
                                <div className="columnsContainer">
                                    <div className="firstColumn">
                                        <Link to="/web-services/kyc-services">
                                            احراز هویت غیر حضوری
                                        </Link>
                                        <Link to="/web-services/ai-services">
                                            ابزارهای هوش مصنوعی
                                        </Link>
                                        <Link to="/products/levantsSuite">
                                            آنبوردینگ و سی آر ام
                                        </Link>

                                        <Link to="/aboutUs">بیشتر بدانید</Link>
                                        <Link to="/contactUs"> تماس با ما</Link>
                                        <a href="#"> بلاگ</a>
                                    </div>
                                    <div className="secondColumn">
                                        <a href="https://kyc.neshanid.com/sejam-kyc">
                                            ثبت نام سجام
                                        </a>
                                        <a href="https://profilesejam.csdiran.ir/">سایت سجام</a>
                                        <a href="https://kiangroup.com/fa">گروه مالی کیان</a>
                                        <a href="https://kian.trade/">کارگزاری کیان</a>
                                        <a href="https://sitaad.net/">سیتاد</a>
                                        <a href="https://adliran.ir/">سامانه خدمات قضایی</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="enamad">
                            <a referrerPolicy='origin' target='_blank'
                               href='https://trustseal.enamad.ir/?id=535833&Code=2IttOaZeKJ7v9zOvHKQ7utPMwMISAc14'><img
                                referrerPolicy='origin'
                                src='https://trustseal.enamad.ir/logo.aspx?id=535833&Code=2IttOaZeKJ7v9zOvHKQ7utPMwMISAc14'
                                alt='' style={{cursor: "pointer"}} code='2IttOaZeKJ7v9zOvHKQ7utPMwMISAc14'/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
        <span>
          {" "}
            1403© تمام حقوق این وب سایت برای شرکت فناوری ارتباط هویت الوان (لوانت)
          محفوظ است.
        </span>
            </div>
            <DemoRequest isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}/>
        </>
    );
}
