import React from "react";
import {Helmet} from "react-helmet";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../../../components/layout/mainLayout";
import {StaticImage} from "gatsby-plugin-image";
import "../../../components/service-page.scss";
import BankCardOcr from "../../../components/aiServices/bankCardOcr";
import NationalCardOcr from "../../../components/aiServices/nationalCardOcr";
import FaceSimilarity from "../../../components/aiServices/faceSimilarity";
import LivenessDetection from "../../../components/aiServices/livenessDetection";
import BirthCertOcr from "../../../components/aiServices/birthCertOcr";
import ChequeOcr from "../../../components/aiServices/chequeOcr";

export default function AiServices() {
    return (
        <Layout>
            <Helmet>
                <title>سرویس های هوش مصنوعی</title>
                <meta
                    name="description"
                    content="سرویس‌های هوش مصنوعی لوانت، که در قالب API و SDK ارائه می‌شوند، قابل استفاده در وب‌سایت‌ها و اپلیکیشن‌ها بوده و کسب‌وکارها می‌توانند با استفاده از آن، محصولات با کیفیت‌تر و هوشمند روانه بازار کنند."
                />
            </Helmet>
            <div className="container ai">
                <section className="describe">
                    <h1>سرویس‌های هوش مصنوعی</h1>
                    <p style={{padding: "23px"}}>
                        با گسترش محصولات دیجیتال و شکل‌گیری روزافزون کسب و کارهای فناوری
                        محور، امنیت و سرعت بیش از پیش نقش کلیدی پیدا کرده‌اند به گونه‌ای که
                        اگر کسب و کاری به آن توجه نکند، به سادگی از چرخه رقابت خارج می‌شود.
                        کسب و کارهایی که در شروع، مشکلات متأثر از حضور در بازارهای بزرگ را
                        پیش‌بینی کرده و برای آن‌ها راه‌حل داشته باشند، در زمان‌های کلیدی
                        می‌توانند در رقابت پیروز شده و سهم بازار خود را چند برابر کنند.
                        احراز هویت مشتریان به صورت آنلاین و هوشمند در کنار خوانش مدارک و
                        مستندات، قابلیت‌هایی هستند که «امنیت و سرعت» را به عنوان مزیت رقابتی
                        استراتژیک برای کسب و کار فراهم می‌کنند.
                    </p>
                    <p style={{padding: "23px"}}>
                        مجموعه لوانت، برخی از سرویس‌های مبتنی بر هوش مصنوعی خود را با موضوع
                        «احراز هویت آنلاین» و «خوانش متون از تصاویر (OCR)» که می‌توانند در
                        محصولات دیجیتال سایر شرکت‌ها مورد بهره‌برداری قرار بگیرند، با شرایط
                        بسیار مناسب در اختیار کسب و کارهای متقاضی قرار می‌دهد. در ادامه
                        می‌توانید با این سرویس‌ها آشنا شده و آن‌ها را تست و بررسی نمایید. در
                        صورتی که علاقمند به خریداری و بهره‌برداری از سرویس‌های مذکور هستید،
                        روی دکمه «مشاوره و خرید» کلیک نمایید.
                    </p>
                    <div className="items-container">
                        <div className="item">
                            <StaticImage
                                src="../../../../assets/images/ai-item-1.png"
                                alt="Item icon"
                                className="icon"
                            />
                            <span className="title">خوانش متن کارت بانکی (OCR)</span>
                            <a href="#bankCardOcr" className="button">
                                اطلاعات تکمیلی
                            </a>
                        </div>
                        <div className="item">
                            <StaticImage
                                src="../../../../assets/images/ai-item-2.png"
                                alt="Item icon"
                                className="icon"
                            />
                            <span className="title">خوانش متن کارت ملی (OCR)</span>
                            <a href="#nationalCardOcr" className="button">
                                اطلاعات تکمیلی
                            </a>
                        </div>
                        <div className="item">
                            <StaticImage
                                src="../../../../assets/images/ai-item-3.png"
                                alt="Item icon"
                                className="icon"
                            />
                            <span className="title">تطبیق دو چهره</span>
                            <a href="#faceSimilarity" className="button">
                                اطلاعات تکمیلی
                            </a>
                        </div>
                        <div className="item">
                            <StaticImage
                                src="../../../../assets/images/ai-item-4.png"
                                alt="Item icon"
                                className="icon"
                            />
                            <span className="extra-text">Live</span>
                            <span className="title">بررسی زنده بودن (Liveness)</span>
                            <a href="#livenessDetection" className="button">
                                اطلاعات تکمیلی
                            </a>
                        </div>
                        <div className="item">
                            <StaticImage
                                src="../../../../assets/images/ai-item-2.png"
                                alt="Item icon"
                                className="icon"
                            />
                            <span className="title">
                سرویس نویسه‌خوان شناسنامه فرمت جدید (OCR)
              </span>
                            <a href="#birthCertOcr" className="button">
                                اطلاعات تکمیلی
                            </a>
                        </div>
                        <div className="item">
                            <StaticImage
                                src="../../../../assets/images/ai-item-3.png"
                                alt="Item icon"
                                className="icon"
                            />
                            <span className="title">سرویس نویسه‌خوان چک صیاد (OCR)</span>
                            <a href="#chequeOcr" className="button">
                                اطلاعات تکمیلی
                            </a>
                        </div>
                    </div>
                </section>
                <BankCardOcr/>
                <NationalCardOcr/>
                <FaceSimilarity/>
                <LivenessDetection/>
                <BirthCertOcr/>
                <ChequeOcr/>
            </div>
        </Layout>
    );
}
