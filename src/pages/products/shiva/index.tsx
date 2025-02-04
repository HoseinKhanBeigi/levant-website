import React from "react";
import {StaticImage} from "gatsby-plugin-image";
import {Helmet} from "react-helmet";
import "react-toastify/dist/ReactToastify.css";
import "../../../../assets/css/main.css";
import "../../index.scss";
import Layout from "../../../components/layout/mainLayout";
import IntroContainer from "../../../components/introContainer/introContainer";
import Explanation from "../../../components/explanation/explanation";
import Features from "../../../components/features/features";
import {FeatureInterface} from "../../../../interfaces";
import Operator from "../../../../assets/icons/operator";
import OnlineAccount from "../../../../assets/icons/onlineAccount";

export default function Shiva() {
    const FEATURES: Array<FeatureInterface> = [
        {
            title: "ارتباطات شخصی‌سازی شده",
            icon: <span className="icon-shiva-f-1"></span>,
            subFeatures: [
                {
                    icon: <span className="icon-shiva-1-1"></span>,
                    title: "ایجاد فرایند ثبت‌نام مختص هر محصول",
                    description: "",
                },
                {
                    icon: <span className="icon-shiva-1-2"></span>,
                    title: "امکان ایجاد فرایندهای دلخواه برای آنبوردینگ",
                    description: "",
                },
            ],
        },
        {
            title: "یکپارچگی",
            icon: <span className="icon-shiva-f-2"></span>,
            subFeatures: [
                {
                    icon: <span className="icon-shiva-2-1"></span>,
                    title: "یکپارچگی با سیستم های آنلاین اصلی موجود در بازار",
                    description: "",
                },
                {
                    icon: <span className="icon-shiva-2-2"></span>,
                    title: "امکان یکپارچگی دیتا در بین محصولات مختلف",
                    description: "",
                },
                {
                    icon: <span className="icon-shiva-2-3"></span>,
                    title: "بهینه سازی فرایند ثبت نام کاربر",
                    description: "",
                },
            ],
        },
        {
            title: "ارتباط غیرحضوری موثر",
            icon: <span className="icon-shiva-f-3"></span>,
            subFeatures: [
                {
                    icon: <Operator/>,
                    title: "مدیریت ثبت نام",
                    description: "",
                },
                {
                    icon: <OnlineAccount/>,
                    title: "مدیریت ساخت اکانت‌های آنلاین",
                    description: "",
                },
                {
                    icon: <span className="icon-siva-1-3"/>,
                    title: "مدیریت سرنخ ها و افراد",
                    description: "",
                },
            ],
        },
    ];
    return (
        <Layout>
            <Helmet>
                <title>لوانت سیستم | مدیریت آنبوردینگ و ثبت‌نام مشتریان شیوا</title>
                <meta
                    name="description"
                    content="سیستم مدیریت آنبوردینگ و ثبت‌نام مشتریان به سازمان شما این امکان را می‌دهد که پایپ‌لاین مورد نظر خود را بسازید و بر اساس فرایندی سیستمی رابطه کسب‌و‌کار خود و مشتریانتان را توسعه دهید"
                />
            </Helmet>

            <IntroContainer
                subtitle="مدیریت آنبوردینگ و ثبت‌نام مشتریان شیوا"
                description="سیستم مدیریت آنبوردینگ و ثبت‌نام مشتریان به سازمان شما این امکان را می‌دهد که پایپ‌لاین مورد نظر خود را بسازید و بر اساس فرایندی سیستمی رابطه کسب‌و‌کار خود و مشتریانتان را توسعه دهید"
                image={
                    <StaticImage
                        src="../../../../assets/images/shivaUI.svg"
                        alt="businessRequirement"
                        className="introSectionImage"
                    />
                }
                logo={
                    <StaticImage
                        src="../../../../assets/images/shiva.svg"
                        alt="businessRequirement"
                        className="introSectionImage"
                    />
                }
            />
            <Features
                features={FEATURES}
                title="یک ارتباط برنامه‌ریزی‌شده"
                description="شیوا کمک می‌کند مراحل ارتباط با مشتریانتان را برنامه‌ریزی کنید"
            />
            <Explanation
                title="مراحل تعامل با مشتریان، در کنترل شما"
                description="با استفاده از شیوا شما می‌توانید به صورت سیستماتیک تعاملات مورد نیاز سازمانتان را طراحی کنید و کنترل بهتری بر روند تعامل با مشتریانتان داشته باشید.."
                image={
                    <StaticImage
                        src="../../../../assets/images/shivaUI.png"
                        alt="businessRequirement"
                        className="introSectionImage"
                    />
                }
            />
        </Layout>
    );
}
