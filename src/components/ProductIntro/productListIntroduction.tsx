import React from "react";
import {StaticImage} from "gatsby-plugin-image";
import "./products.scss"

export default function ProductListIntroduction() {
    const data = [
        {
            icon: (
                <StaticImage
                    src="../../../assets/images/4.jpg"
                    alt="introduction"
                    style={{
                        width: "100%",
                        height: "150px",
                    }}
                />
            ),
            title: "تشخیص زنده بودن",
            titleEn: "(Liveness Detection)",
            description:
                "تشخیص زنده بودن اطمینان حاصل می‌کند که فردی که  به صورت آنلاین در حال ثبت نام و احراز هویت است یک انسان واقعی است.",
            link: "/solutions/banks",
            style: {}
        },
        {
            icon: (
                <StaticImage
                    src="../../../assets/images/3.jpg"
                    alt="introduction"
                    style={{
                        width: "100%",
                        height: "150px",
                    }}
                />
            ),
            title: "پیشگیری از تقلب",
            titleEn: "(Fraud Prevention)",
            description:
                "این فناوری به دنبال شناسایی و جلوگیری از هرگونه تلاش برای فریب سیستم احراز هویت است و اطمینان حاصل می‌کند که این فرد همان کسی است که ادعا می‌کند و از هویت دزدیده شده استفاده نمی‌کند.",
            link: "/solutions/exchange",
            style: {marginTop: '2rem'}
        },
        {
            icon: (
                <StaticImage
                    src="../../../assets/images/2.jpg"
                    alt="introduction"
                    style={{
                        width: "100%",
                        height: "150px",

                    }}
                />
            ),
            title: "تشخیص چهره",
            titleEn: "(Face Recognition)",
            description:
                "فناوری پیشرفته‌ای است که با استفاده از هوش مصنوعی، ویژگی‌های منحصر به فرد صورت را شناسایی و تحلیل می‌کند.",
            link: "/solutions/financialOrgs",
            style: {}
        },
        {
            icon: (
                <StaticImage
                    src="../../../assets/images/1.jpg"
                    alt="introduction"
                    style={{
                        width: "100%",
                        height: "150px",
                    }}
                />
            ),
            title: "تشخیص دیپفیک",
            titleEn: "(Deepfake Detection)",
            description:
                "از الگوریتم‌های پیشرفته هوش مصنوعی برای شناسایی ویدیوهای جعلی که با نرم افزار ساخته و دستکاری شده است استفاده می‌کند. ",
            link: "/solutions/fintech",
            style: true
        },
    ];
    return (
        <div>
            <h2 className="section-title " data-aos="fade-right" data-aos-duration="5000">احراز هویت آنلاین
                ویدیویی <span className="realistic-marker-highlight">مبتنی
           بر هوش مصنوعی لوانت    </span></h2>
            <h3 className="section-subtitle" data-aos="fade-right" data-aos-duration="5000">
                سیستمی است که به صورت خودکار و با استفاده از فناوری AI، هویت افراد را از طریق یک ویدیوی زنده تأیید
                می‌کند.
            </h3>

            <div className="features-container">
                {data.map((feature, index) => (
                    <div className={`feature-card ${feature.style ? "mt" : ""}`} key={index} data-aos="fade-up"
                         data-aos-duration={index * 1000}>
                        <div className="image-placeholder">{feature.icon}</div>
                        <h3 className="feature-title">{feature.title}</h3>
                        <h4 className="feature-subtitle">{feature.titleEn}</h4>
                        <p className="feature-description">{feature.description}</p>
                    </div>
                ))}
            </div>
            <svg xmlns="//www.w3.org/2000/svg" version="1.1" className="svg-filters" style={{display: "none"}}>
                <defs>
                    <filter id="marker-shape">
                        <feTurbulence type="fractalNoise" baseFrequency="0 0.15" numOctaves="1" result="warp"/>
                        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic"
                                           in2="warp"/>
                    </filter>
                </defs>
            </svg>
        </div>
    );
}
