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
import Register from "../../../../assets/icons/register";
import OnlineAccount from "../../../../assets/icons/onlineAccount";
import Profile from "../../../../assets/icons/profile";
import Operator from "../../../../assets/icons/operator";

export default function Siva() {
    const FEATURES: Array<FeatureInterface> = [
        {
            title: "مدیریت ارتباطات جدید",
            icon: <span className="icon-siva-f-1"></span>,
            subFeatures: [
                {
                    icon: <Register/>,
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
        {
            title: "مدیریت فروش",
            icon: <span className="icon-siva-f-2"></span>,
            subFeatures: [
                {
                    icon: <span className="icon-siv-2-1"></span>,
                    title: "ساختار فروش نمایندگی ها و شعبات",
                    description: "",
                },
                {
                    icon: <span className="icon-siv-2-2"></span>,
                    title: "مدیریت فروش",
                    description: "",
                },
                {
                    icon: <Profile/>,
                    title: "مدیریت پروفایل و پورتفوی مشتریان",
                    description: "",
                },
            ],
        },
        {
            title: "ارتباط موثر با مشتریان",
            icon: <span className="icon-siva-f-3"></span>,
            subFeatures: [
                {
                    icon: <Operator/>,
                    title: "مدیریت مرکز تماس",
                    description: "",
                },
                {
                    icon: <span className="icon-siv-3-2"></span>,
                    title: "مدیریت پروفایل و پورتفوی مشتریان",
                    description: "",
                },
                {
                    icon: <span className="icon-siv-3-3"></span>,
                    title: "مدیریت درخواست‌ها و فرایند پیگیری مشکلات مشتریان",
                    description: "",
                },
            ],
        },
    ];
    return (
        <Layout>
            <Helmet>
                <title>لوانت سیستم | مدیریت ارتباط با مشتریان سیوا</title>
                <meta
                    name="description"
                    content="سیستم مدیریت ارتباط با مشتریان به سازمان ها کمک می کند تا روابط عمیق‌تری با مشتریانشان ایجاد کنند و فرایندهایشان را ساده کنند تا بتوانند فروش را افزایش دهند، خدمات مشتری را بهبود بخشند و سودآوری را افزایش دهند."
                />
            </Helmet>
            <IntroContainer
                subtitle="مدیریت ارتباط با مشتریان سیوا"
                description="سیستم مدیریت ارتباط با مشتریان به سازمان ها کمک می کند تا روابط عمیق‌تری با مشتریانشان ایجاد کنند و فرایندهایشان را ساده کنند تا بتوانند فروش را افزایش دهند، خدمات مشتری را بهبود بخشند و سودآوری را افزایش دهند."
                image={
                    <StaticImage
                        src="../../../../assets/images/sivaUI.svg"
                        alt="businessRequirement"
                        className="introSectionImage"
                    />
                }
                logo={
                    <StaticImage
                        src="../../../../assets/images/siva.svg"
                        alt="businessRequirement"
                        className="introSectionImage"
                    />
                }
            />
            <Features
                features={FEATURES}
                title="یک رابطه معنادار"
                description="سیوا کمک می‌کند روابط عمیق‌تر و بلندمدت‌تری با مشتریانتان بسازید"
            />
            <Explanation
                title="ارتباطات، زیر نظر شما"
                description="با استفاده از سیستم مدیریت ارتباطات مشتریان سیوا می‌توانید به سادگی ارتباطات سازمانی خود را رصد کنید و برای رشد برنامه‌ریزی دقیق‌تری انجام بدهید."
                image={
                    <StaticImage
                        src="../../../../assets/images/sivaUI.png"
                        alt="businessRequirement"
                        className="introSectionImage"
                    />
                }
            />
        </Layout>
    );
}
