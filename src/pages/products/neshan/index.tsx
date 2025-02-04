import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";
import "react-toastify/dist/ReactToastify.css";
import "../../../../assets/css/main.css";
import "../../index.scss";
import Layout from "../../../components/layout/mainLayout";
import IntroContainer from "../../../components/introContainer/introContainer";
import Explanation from "../../../components/explanation/explanation";
import Features from "../../../components/features/features";
import { FeatureInterface } from "../../../../interfaces";

export default function Neshan() {
  const FEATURES: Array<FeatureInterface> = [
    {
      title: "کاملا غیرحضوری",
      icon: <span className="icon-neshan-f-1"></span>,
      subFeatures: [
        {
          icon: <span className="icon-neshan-1-1"></span>,
          title: "احراز هویت غیرحضوری امن",
          description: "",
        },
        {
          icon: <span className="icon-neshan-1-2"></span>,
          title: "احراز هویت ویدیویی با کاربری ساده",
          description: "",
        },
      ],
    },
    {
      title: "بررسی هوش مصنوعی و اپراتور",
      icon: <span className="icon-neshan-f-2"></span>,
      subFeatures: [
        {
          icon: <span className="icon-neshan-2-1"></span>,
          title: "پنل کاربری و محیط بررسی توسط اوپراتور",
          description: "",
        },
        {
          icon: <span className="icon-neshan-2-2"></span>,
          title: "امکان پشتیبانی از مولفه های مختلف هوش مصنوعی ",
          description: "",
        },
      ],
    },
    {
      title: "کاملا منطبق با ضوابط قانونی",
      icon: <span className="icon-neshan-f-3"></span>,
      subFeatures: [
        {
          icon: <span className="icon-neshan-3-1"></span>,
          title:
            "ارتباط با ثبت احوال و سیستم های زیرساختی برای بررسی اصالت احراز هویت",
          description: "",
        },
        {
          icon: <span className="icon-neshan-3-2"></span>,
          title:
            "ارتباط با ثبت احوال و سیستم های زیرساختی برای بررسی اصالت احراز هویت",
          description: "",
        },
      ],
    },
  ];
  return (
    <Layout>
      <Helmet>
        <title>لوانت سیستم | احراز هویت مشتریان نشان</title>
        <meta
          name="description"
          content="سیستم احراز هویت مشتریان به سازمان شما این امکان را می‌دهد تا به صورت کاملا غیرحضوری مشتریان خود را احراز هویت کنید و همچنین کلیه ضوابط قانونی این فرایند را رعایت کنید"
        />
      </Helmet>
      <IntroContainer
        subtitle="احراز هویت مشتریان نشان"
        description="سیستم احراز هویت مشتریان به سازمان شما این امکان را می‌دهد تا به صورت کاملا غیرحضوری مشتریان خود را احراز هویت کنید و  همچنین کلیه ضوابط قانونی این فرایند را رعایت کنید"
        image={
          <StaticImage
            src={"../../../../assets/images/neshanUI.svg"}
            alt="businessRequirement"
            className="introSectionImage"
          />
        }
        logo={
          <StaticImage
            src={"../../../../assets/images/neshan.svg"}
            alt="businessRequirement"
            className="introSectionImage"
          />
        }
      />
      <Features
        features={FEATURES}
        title="یک ارتباط واقعی"
        description="نشان کمک می‌کند مطمئین شوید هویت مشتریانتان واقعی است"
      />
      <Explanation
        title="هویت‌سنجی آسان کاربران شما"
        description="با استفاده از نشان می‌توانید از هویت مشتریانتان مطمئن شوید و بدون دغدغه هویت‌سنجی به گسترش ارتباطات با ایشان بپردازید."
        image={
          <StaticImage
            src={"../../../../assets/images/neshanUI.png"}
            alt="businessRequirement"
            className="introSectionImage"
          />
        }
      />
      {/* <ToastContainer /> */}
    </Layout>
  );
}
