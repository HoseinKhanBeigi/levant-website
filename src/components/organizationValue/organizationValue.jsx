import React from "react";
import "./oraganizationValue.scss";
import {StaticImage} from "gatsby-plugin-image";

export default function OrganizationValue() {
    const values = [
        {
            title: "لذت بخشی",
            sign: "ل",
            description:
                "ما بر این باوریم که لذت بخشی جزء جدایی‌ناپذیر از تجربه کاربری است و می‌بایست از اولین ارتباط تا استفاده روزمره از محصولاتمان حس رضایت و خوشایندی را در مشتریان ایجاد کند.",
        },
        {
            title: "وقت‌شناسی",
            sign: "و",
            description:
                "ما بر این باوریم که وقت‌شناسی نماد تعهد به کیفیت و احترام به مشتریان و همکاران است. با درک ارزش هر لحظه، همواره تلاش می‌کنیم با برنامه‌ریزی دقیق و خدمات خود در موقع عمل کرده و خدمات موثر ارائه دهیم.",
        },
        {
            title: "ارزش آفرینی",
            sign: "ا",
            description:
                "ما بر این باور هستیم که ارزش‌آفرینی، فراتر از رفع نیازهای امروز است. ما با نگاهی به آینده، در جستجوی خلق راهکارهایی هستیم که زمینه‌های جدیدی برای رشد و بهبود فراهم کنیم.",
        },
        {
            title: "نتیجه‌گرایی",
            sign: "ن",
            description:
                "ما بر این باوریم که موفقیت ما در گرو تمرکز بر نتایج ملموس و پذیرش مسئولیت کامل در قبال آنهاست.",
        },
        {
            title: "توسعه",
            sign: "ت",
            description:
                "ما بر این باوریم که نوآوری و بهبود مستمر، کلید ارائه بهترین خدمات به مشتریان است. به همین دلیل ما همواره در تلاشیم تا کیفیت محصولات و مهارت‌های تیم خود را ارتقا دهیم.",
        },
    ];
    return (
        <div className="sectionContainer">
            <div
                className="organizationValueContainer"
                data-aos="fade-right"
                data-aos-duration="2000"
            >
                <div className="paddingClass">
                    <h2 style={{textAlign: "center"}}><span
                        className="realistic-marker-highlight">ارزش‌های سازمان</span></h2>

                    <div className="values">
                        <p className="valuesDesc">
                            ارزش‌های سازمانی لوانت، به عنوان چارچوب اصلی فعالیت‌های ما پایه
                            گذار فرهنگ سازمانی لوانت هستند و به طور خاص برای حمایت از تحقق
                            ماموریت، چشم‌انداز و اهداف لوانت تعریف شده‌اند.
                        </p>
                        {values.map((value, index) => (
                            <div className="value-card" key={index}>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "start",
                                        alignItems: "center",
                                        gap: "10px",
                                    }}
                                >
                                    <div className="badge">
                                        <div className="badge__label">{value.sign}</div>
                                    </div>
                                    <h3>{value.title}</h3>
                                </div>

                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div
                className="aboutusSubSection mission"
                data-aos="fade-right"
                data-aos-duration="2000"
            >
                <div className="paddingClass centerMaker">
                    <StaticImage
                        style={{marginBottom: "5px"}}
                        src="../../../assets/images/mission.png"
                        alt="pay-per-click icon"
                        className="icon-placeholder"
                    />
                    <div>
                        <h2 className="centerMaker">ماموریت</h2>
                        <p className="textAlign" style={{padding: " 0 20px"}}>
                            تسهیل، تسریع و ایمن‌سازی تعاملات مالی دیجیتال از طریق ارائه
                            راهکارهای نوآورانه، شفاف و قابل اعتماد برای شکل‌دهی آینده‌ صنعت
                            مالی
                        </p>
                    </div>
                </div>
            </div>
            <div
                className="aboutusSubSection"
                data-aos="fade-right"
                data-aos-duration="2000"
            >
                <div className="paddingClass centerMaker">
                    <StaticImage
                        style={{marginBottom: "5px"}}
                        src="../../../assets/images/binoculars.png"
                        alt="pay-per-click icon"
                        className="icon-placeholder"
                    />
                    <div>
                        <h2 className="centerMaker"> چشم انداز </h2>
                        <p className="textAlign" style={{padding: " 0 20px"}}>
                            لوانت در نظر دارد تا پایان سال ۱۴۰۵ به عنوان ارائه ‌دهنده برتر
                            خدمات احراز هویت ویدیویی مبتنی بر هوش مصنوعی در بازار ایران شناخته
                            شویم به طوری که انتخاب اول مشتریان باشیم.
                        </p>
                    </div>
                </div>
            </div>
            <div
                className="levantProducts"
                data-aos="fade-right"
                data-aos-duration="2000"
            >
                <div className="levantProducts_Container">
                    <h2 className="centerMaker"> محصولات لوانت </h2>
                    <p style={{textAlign: "justify"}}>
                        شرکت لوانت با تمرکز بر توسعه نرم‌افزارهای هوشمند، زیرساخت‌های احراز
                        هویت ویدیویی مبتنی بر هوش مصنوعی (video KYC) را ارائه می‌دهد. این
                        سرویس‌ها منطبق با استانداردهای نهاد های بالادستی طراحی شده و با
                        استفاده از فناوری‌های تشخیص چهره، Liveness Detection و Awareness
                        Detection، امنیت و دقت بالایی را در فرایند احراز هویت آنلاین (eKYC)
                        به ارمغان می‌آورند. سرویس‌های احراز هویت لوانت به‌ سرعت و به‌ صورت
                        آنلاین انجام می‌شوند و برای مقابله با حملات امنیتی از تکنیک‌هایی
                        مانند Spoofing Detection بهره می‌برند.
                    </p>
                </div>
                <div className="levantsProductsBackgroundWrapper">
                    <div className="levantsProductsBackground">
                        <StaticImage
                            src="../../../assets/images/BesideMap.JPG"
                            alt="History Image 1"
                            className="history-image levantsProductsImg"
                        />
                    </div>
                </div>
            </div>
            <div
                style={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0 3px 8px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "center",
                    width: "90%",
                    gap: "1rem",
                    marginTop: "-110px",
                    marginBottom: "50px",
                }}
                data-aos="fade-up"
                data-aos-duration="2000"
            >
                <div
                    style={{
                        marginTop: "-60px",
                        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "white",
                        borderRadius: "10px",
                        padding: "30px",
                    }}
                >
                    <StaticImage
                        src="../../../assets/images/relationship.png"
                        alt="pay-per-click icon"
                        style={{width: "48px", height: "48px"}}
                        className="icon-placeholder"
                    />
                </div>
                <p style={{padding: "0 37px 60px 37px"}}>
                    سایر محصولات لوانت شامل ابزارهای جامع و یکپارچه ای هستند که برای
                    مدیریت مشتری از اولین تماس آنها طراحی شده است و تمامی نیازهای کسب ‌و
                    کارها در آنبوردینگ (Onboarding) و مدیریت ارتباط با مشتریان (CRM) را
                    پوشش می‌دهد.
                </p>
            </div>
        </div>
    );
}
