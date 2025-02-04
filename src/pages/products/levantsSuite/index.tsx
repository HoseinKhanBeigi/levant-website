import React from "react";
import {StaticImage} from "gatsby-plugin-image";
import {Helmet} from "react-helmet";
import "react-toastify/dist/ReactToastify.css";
import "../../../../assets/css/main.css";
import "../../index.scss";
import Layout from "../../../components/layout/mainLayout";
import IntroContainer from "../../../components/introContainer/introContainer";
import SequentialContent from "../../../components/sequentialContent/sequentialContent";
import {LATERAL_POSSIBILITIES, MAIN_POSSIBILITIES,} from "../../../../lib/mock.data";
import ContentBox from "../../../components/ContentBox/ContentBox";
import CollapsibleContent from "../../../components/collapsibleContent/collapsibleContent";

export default function LevantSuite() {
    return (
        <Layout>
            <Helmet>
                <title>لوانت سوییت، تجربه انطباق سریع با تغییرات بازار</title>
                <meta
                    name="description"
                    content="تحولات سریع بازار، از تغییر ذائقه مشتری تا تغییرات رگولاتوری یا ظهور رقبای جدید با مزیت های رقابتی متنوع برای کسب و کارها چالش برانگیز است. مدیران هوشمند و سازمان های پیشرو برای انطباق سریع با این تحولات، به سرمایه گذاری در فناوری های سمت مشتری و تقویت ابزارهای فرانت-آفیس می پردازند. لوانت سوییت، کامل ترین ابزارها در این حوزه را به کسب و کارها ارائه می دهد."
                />
            </Helmet>
            <IntroContainer
                subtitle="لوانت سوییت، تجربه انطباق سریع با تغییرات بازار"
                description="تحولات سریع بازار، از تغییر ذائقه مشتری تا تغییرات رگولاتوری یا ظهور رقبای جدید با مزیت های رقابتی متنوع برای کسب و کارها چالش برانگیز است. مدیران هوشمند و سازمان های پیشرو برای انطباق سریع با این تحولات، به سرمایه گذاری در فناوری های سمت مشتری و تقویت ابزارهای فرانت-آفیس می پردازند. لوانت سوییت، کامل ترین ابزارها در این حوزه را به کسب و کارها ارائه می دهد."
                image={
                    <StaticImage
                        src={"../../../../assets/images/LevantSuite.png"}
                        alt="businessRequirement"
                        className="introSectionImage"
                    />
                }
            />
            <ContentBox
                title="معرفی کلی"
                description="لوانت سوییت، با هدف پاسخ به نیازهای «مشتری محور» سازمانها و کسب و کارها، طراحی و پیاده سازی شده است. اگر به امکاناتی نظیر ثبت نام مشتری به صورت آنلاین، احراز هویت مشتری و تشکیل پروفایل برای وی به صورت غیر حضوری، تعریف فرایندهای ساده یا پیچیده مانند تشکیل پرونده های خاص مانند انعقاد قرارداد به صورت آنلاین، مدیریت عملکرد شعب و نماینده ها، مدیریت کارکنان فروش و مارکتینگ، دسترسی به گزارش های کاربری از وضعیت تبدیل سرنخ ها به مشتری و سپس مشتری وفادار نیاز دارید، لوانت سوییت کامل ترین راهکار یکپارچه و 360 درجه را به شما ارائه می کند. "
            />
            <div className="collapseContainer">
                <div className="collapseTitle">امکانات اصلی</div>
                <CollapsibleContent items={MAIN_POSSIBILITIES}/>
            </div>
            <SequentialContent
                items={LATERAL_POSSIBILITIES}
                description={
                    "سازمان ها و کسب و کارهایی که از زیرساخت لوانت سوییت استفاده می کنند، با توجه به یکپارچگی با سامانه ها و پلتفرم های زیر، می توانند به سادگی از آن ها نیز بهره برداری نمایند.  "
                }
                title={"امکانات جانبی بر اساس نوع مشتری"}
            />
            <ContentBox
                title="یکپارچه سازی"
                description="با توجه به توسعه استاندارد لوانت سوییت در لایه معماری و دیتامدل، امکان یکپارچه سازی آن با سایر سیستم های مورد استفاده در سازمان ها وجود دارد. تیم یکپارچه سازی لوانت، آمادگی دارد تا کلیه فرایند یکپارچه سازی را برای سازمان های متقاضی انجام دهد."
            />
        </Layout>
    );
}
