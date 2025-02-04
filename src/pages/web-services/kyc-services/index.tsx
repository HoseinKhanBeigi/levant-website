import React from "react";
import {Helmet} from "react-helmet";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../../../components/layout/mainLayout";
import {StaticImage} from "gatsby-plugin-image";
import "../../../components/service-page.scss";
import VideoKyc from "../../../components/kycServices/VideoKyc";
import SelfieKyc from "../../../components/kycServices/SelfieKyc";
import BankWithMobileKyc from "../../../components/kycServices/BankWithMobileKyc";
import BankCardKyc from "../../../components/kycServices/BankCardKyc";
import BankAccountData from "../../../components/kycServices/BankAccountData";
import NationalCardKyc from "../../../components/kycServices/NationalCardKyc";

export default function KycServices() {
    return (
        <Layout>
            <Helmet>
                <title>سرویس‌های احراز هویت</title>
                <meta
                    name="description"
                    content="احراز هویت هوشمند از مهم‌ترین چالش‌های کسب و کارهای حوزه مالی مانند فینتک‌ها، لندتک‌ها، BNPL، صرافی‌های رمز ارز و پرداخت‌یارها محسوب می‌شود. لوانت با تمرکز بر موضوع احراز هویت و بهره‌برداری از هوش مصنوعی در آن، سرویس‌هایی ارائه کرده که می‌توانند چالش احراز هویت در انواع کسب و کارها را مرتفع نماید."
                />
            </Helmet>
            <div className="container ai">
                <section className="describe">
                    <h1>سرویس‌های احراز هویت</h1>
                    <p style={{padding: "22px"}}>
                        ارائه خدمات از طریق اینترنت، روز به روز بیشتر از گذشته می شود و
                        کاربران روز به روز با انواع روشهای fraud یا کلاهبرداری در فضای مجازی
                        آشنا می شوند. رشد روزافزون مشتریان آنلاین، سرمایه گذاران و صاحبان
                        کسب و کار را برای ادامه دادن مصمم تر از قبل کرده، اما در عین حال از
                        چالش‌های امنیتی نیز، نمی‌توان به سادگی عبور کرد. مجموعه لوانت با
                        تجربه مناسب و طولانی در زمینه احراز هویت به صورت هوشمند و در قالب
                        اتوماسیون، 6 راه حل اصلی خود در این زمینه را به صورت عمومی منتشر
                        کرده و شرکت‌ها می توانند با بهرهبرداری از آن‌ها، فرایندهای احراز
                        هویت مشتریان خود را به سادگی انجام دهند.
                    </p>
                    <div className="items-container">
                        <div className="item">
                            <StaticImage
                                src="../../../../assets/images/ai-item-4.png"
                                alt="Item icon"
                                className="icon"
                            />
                            <span className="extra-text">Live</span>
                            <span className="title">احراز هویت ویدیویی</span>
                            <a href="#video" className="button">
                                اطلاعات تکمیلی
                            </a>
                        </div>
                        <div className="item">
                            <StaticImage
                                src="../../../../assets/images/ai-item-4.png"
                                alt="Item icon"
                                className="icon"
                            />
                            <span className="title">احراز هویت با عکس سلفی</span>
                            <a href="#selfie" className="button">
                                اطلاعات تکمیلی
                            </a>
                        </div>
                        <div className="item">
                            <StaticImage
                                src="../../../../assets/images/ai-item-1.png"
                                alt="Item icon"
                                className="icon"
                            />
                            <span className="title">
                احراز هویت با اطلاعات بانکی و تلفن همراه
              </span>
                            <a href="#bankWithMobile" className="button">
                                اطلاعات تکمیلی
                            </a>
                        </div>
                        <div className="item">
                            <StaticImage
                                src="../../../../assets/images/ai-item-2.png"
                                alt="Item icon"
                                className="icon"
                            />
                            <span className="title">احراز هویت با کارت ملی</span>
                            <a href="#nationalCard" className="button">
                                اطلاعات تکمیلی
                            </a>
                        </div>
                        <div className="item">
                            <StaticImage
                                src="../../../../assets/images/ai-item-3.png"
                                alt="Item icon"
                                className="icon"
                            />
                            <span className="title">احراز هویت با کارت بانکی</span>
                            <a href="#bankCard" className="button">
                                اطلاعات تکمیلی
                            </a>
                        </div>
                        <div className="item">
                            <StaticImage
                                src="../../../../assets/images/ai-item-4.png"
                                alt="Item icon"
                                className="icon"
                            />
                            <span className="title">دریافت اطلاعات بانکی</span>
                            <a href="#bankAccountData" className="button">
                                اطلاعات تکمیلی
                            </a>
                        </div>
                    </div>
                </section>
                <VideoKyc/>
                <SelfieKyc/>
                <BankWithMobileKyc/>
                <NationalCardKyc/>
                <BankCardKyc/>
                <BankAccountData/>
            </div>

        </Layout>
    );
}
