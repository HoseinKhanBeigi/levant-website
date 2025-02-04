import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "../../../../assets/css/main.css";
import "../../index.scss";
import Layout from "../../../components/layout/mainLayout";
import {Helmet} from "react-helmet";
import SequentialContent from "../../../components/sequentialContent/sequentialContent";
import {
  CUSTOMER_EKYC_BENEFITS,
  EXCHANGE_EKYC_BENEFITS,
  EXCHANGE_INFRA_BENEFITS,
  EXCHANGE_PROCESS,
} from "../../../../lib/mock.data";
import ContentBox from "../../../components/ContentBox/ContentBox";

export default function Exchange() {
    return (
        <Layout>
            <Helmet>
                <title>لوانت سوییت، پلتفرم احراز هویت و آنبوردینگ</title>
                <link rel="stylesheet" href="../../assets/fontiran.css"/>
                <link rel="stylesheet" href="../../assets/css/main.css"/>
                <meta
                    name="description"
                    content="شناخت مشتری در هر کسب و کاری مهم است. گام اول آن احراز هویت و گام های بعدی آشنایی با نیازها، ارزش ها و اولویت های مشتری است. لوانت سوییت با ارائه راهکاری جامع برای صرافی های ارز دیجیتال، فرایند شناخت مشتری و ارائه خدمات هوشمندانه به وی را ساده تر و سریع تر کرده است."
                />
            </Helmet>
            <div className="container">
                <ContentBox
                    title="معرفی کلی"
                    description="ارز دیجیتال، به مرور زمان جایگاه خود را در بازار پیدا کرده و در حال حاضر ارزشی معادل 1.27 تریلیون دلار دارد. این بازار در مقطعی، حتی تا 2 تریلیون دلار هم پیش رفته است. روزانه هزاران میلیارد تومان خرید و فروش رمز ارز میان کاربران ایرانی انجام می شود. با توجه به حجم بالای معاملات در این بخش، پلتفرم ها و صرافی های رمز ارز به منظور جلوگیری از کلاهبرداری، جرائم مالی مثل پولشویی و تأمین مالی تروریسم ملزم به شناسایی و احراز هویت مشتریان خود (KYC) هستند.
                    بدیهی است، عدم توجه به رعایت فرایندهای KYC توسط صرافی های رمز ارز، آن ها را به پلتفرمی جذاب برای کلاهبرداران و فعالان بازار سیاه تبدیل کرده و مشتریان را با مخاطرات جدی روبرو خواهد کرد. 
                    لوانت سوییت، با ارائه زیرساخت فرانت-آفیس مناسب برای صرافی های آنلاین، کلیه فرایندهای مربوط به مشتری را به صورت هوشمند، اتوماتیک و یکپارچه با سایر سیستم های یک صرافی آنلاین ارائه کرده است. فرایندهایی مانند احراز هویت هوشمند و غیر حضوری، مدیریت ارتباط با مشتری و پشتیبانی مشتریان و ده ها قابلیت دیگر، از طریق زیرساخت لوانت سوییت ارائه شده اند."
                />
                <SequentialContent
                    items={EXCHANGE_PROCESS}
                    title={
                        "فرایندهای مهم صرافی آنلاین که توسط لوانت سوییت قابل پیاده سازی است"
                    }
                />
                <SequentialContent
                    items={EXCHANGE_INFRA_BENEFITS}
                    title={"مزایای استفاده از زیرساخت لوانت سوییت برای صرافی ها"}
                />
                <SequentialContent
                    items={EXCHANGE_EKYC_BENEFITS}
                    title={"مزایای احراز هویت دیجیتال یا برای صرافی ها"}
                />
                <SequentialContent
                    items={CUSTOMER_EKYC_BENEFITS}
                    title={"مزایای احراز هویت دیجیتال یا برای مشتریان"}
                />
            </div>
        </Layout>
    );
}
