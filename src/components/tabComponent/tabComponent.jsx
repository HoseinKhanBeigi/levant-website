import React, {memo, useState} from 'react';
import './Tabs.scss';
import {StaticImage} from "gatsby-plugin-image";

// Memoize each Tab content to avoid re-renders unless props change
const TabContent = memo(({content}) => {
    return <div className="tab-content">{content}</div>;
});

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            label: 'وب سرویس های احراز هویت',
            content: <div
                className="apiContainer">
                <div className="apiDescription">
                    <StaticImage src="../../../assets/images/api-icon.png" alt="API icon" className="icon"
                                 style={{marginTop: "1rem"}}/>
                    <p style={{textAlign: "right", width: "100%"}}>سرویس‌های احراز هویت آنلاین و غیرحضوری لوانت، با
                        اتصال مستقیم به سیستم سازمان ثبت احوال کشور، در عرض چند ثانیه هویت کاربران را به‌صورت دقیق و
                        لحظه‌ای تایید می‌کند.
                    </p>
                </div>
                <div className="ocrSection">
                    <h4 style={{color: "#2F75F9"}}>OCR</h4>
                    <div className="ocrItems">
                        <div className="ocrRight">
                            <div className="ocrItem">
                                <StaticImage src="../../../assets/images/api-icon.png" alt="API icon" className="icon"/>
                                <span>احراز هویت با اطلاعات بانکی و تلفن همراه</span>
                            </div>
                            <div className="ocrItem">
                                <StaticImage src="../../../assets/images/api-icon.png" alt="API icon" className="icon"/>
                                <span>احراز هویت با کارت ملی</span>
                            </div>
                        </div>
                        <div className="ocrLeft">
                            <div className="ocrItem">
                                <StaticImage src="../../../assets/images/api-icon.png" alt="API icon" className="icon"/>
                                <span>احراز هویت با کارت بانکی</span>
                            </div>
                            <div className="ocrItem">
                                <StaticImage src="../../../assets/images/api-icon.png" alt="API icon" className="icon"/>
                                <span>دریافت اطلاعات بانکی</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="ocrSection">
                    <h4 style={{color: "#2F75F9"}}>پردازش تصویر</h4>
                    <div className="ocrItems">
                        <div className="ocrItem">
                            <StaticImage src="../../../assets/images/api-icon.png" alt="API icon" className="icon"/>
                            <span>احراز هویت با عکس سلفی</span>
                        </div>
                    </div>
                </div>
                <div className="ocrSection">
                    <h4 style={{color: "#2F75F9"}}>تشخیص زنده بودن</h4>
                    <div className="ocrItems">
                        <div className="ocrItem">
                            <StaticImage src="../../../assets/images/api-icon.png" alt="API icon" className="icon"/>
                            <span>احراز هویت ویدیویی</span>
                        </div>
                    </div>
                </div>
            </div>
        },
        {
            label: 'وب سرویس های هوش مصنوعی', content: <div
                className="apiContainer"
            >
                <div className="apiDescription">
                    <StaticImage src="../../../assets/images/api-icon.png" alt="API icon" className="icon"
                                 style={{marginTop: "1rem"}}/>
                    <p style={{textAlign: "right", width: "100%"}}>تکنولوژی احراز هویت هوش مصنوعی لوانت از طریق API در
                        اختیار شرکت‌ها قرار می‌گیرد تا به‌ سادگی آن ها را با سیستم‌های خود ادغام نموده و هویت کاربران
                        خود را به سرعت و دقت تایید کنند.
                    </p>
                </div>

                <div className="ocrSection">
                    <h4 style={{color: "#2F75F9"}}>OCR</h4>
                    <div className="ocrItems">
                        <div className="ocrRight">
                            <div className="ocrItem">
                                <StaticImage src="../../../assets/images/api-icon.png" alt="API icon" className="icon"/>
                                <span>خوانش متن کارت بانکی OCR</span>
                            </div>
                            <div className="ocrItem">
                                <StaticImage src="../../../assets/images/api-icon.png" alt="API icon" className="icon"/>
                                <span>خوانش متن کارت ملی OCR</span>
                            </div>
                        </div>
                        <div className="ocrLeft">
                            <div className="ocrItem">
                                <StaticImage src="../../../assets/images/api-icon.png" alt="API icon" className="icon"/>
                                <span>نویسه خوان شناسنامه فرمت جدید OCR</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ocrSection">
                    <h4 style={{color: "#2F75F9"}}>Image Recognition</h4>
                    <div className="ocrItems">
                        <div className="ocrItem">
                            <StaticImage src="../../../assets/images/api-icon.png" alt="API icon" className="icon"/>
                            <span>تطبیق دو چهره</span>
                        </div>
                    </div>
                </div>
                <div className="ocrSection">
                    <h4 style={{color: "#2F75F9"}}>Liveness Detection</h4>
                    <div className="ocrItems">
                        <div className="ocrItem">
                            <StaticImage src="../../../assets/images/api-icon.png" alt="API icon" className="icon"/>
                            <span>بررسی زنده بودن</span>
                        </div>
                    </div>
                </div>
            </div>
        },
        {
            label: 'سرویس آنبوردینگ و سی آر ام', content: <div
                className="apiContainer">
                <div className="apiDescription">
                    <StaticImage src="../../../assets/images/api-icon.png" alt="API icon" className="icon"
                                 style={{marginTop: "1rem"}}/>
                    <p style={{textAlign: "right", width: "100%", fontFamily: "levantWebsite"}}>لوانت با ساده‌سازی
                        فرایندهای جذب
                        مشتری، از ثبت‌نام
                        آنلاین تا مدیریت کامل ارتباط با آن‌ها، به کسب‌وکار شما کمک می‌کند تا مشتریان جدید پیدا کرده و
                        آن‌ها را حفظ کند. این سیستم با ایجاد پروفایل‌های مشتریان، تعریف فرایندهای سفارشی و ارائه
                        گزارش‌های دقیق، به شما دید کاملی از عملکرد تیم فروش و بازاریابی‌تان می‌دهد.
                    </p>
                </div>

                <div className="ocrSection">
                    <h4 style={{color: "#2F75F9"}}>امکانات اصلی</h4>
                    <div className="ocrItems">
                        <div className="ocrRight">

                            <div className="ocrItem">
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.8 13.9998C2.8 7.81422 7.81441 2.7998 14 2.7998C20.1856 2.7998 25.2 7.81422 25.2 13.9998C25.2 20.1854 20.1856 25.1998 14 25.1998C7.81441 25.1998 2.8 20.1854 2.8 13.9998Z"
                                        fill="#4361EE"
                                        fillOpacity="0.2"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M19.5484 11.8211C19.8156 11.4112 19.8802 10.8799 19.5909 10.4853C19.2349 9.99976 18.7849 9.66027 18.3892 9.43135C17.8521 9.12063 17.2086 9.35753 16.8513 9.86481C14.6695 12.9625 13.3111 14.9734 13.3111 14.9734C13.3111 14.9734 12.4944 13.9578 11.1363 12.4975C10.6651 11.9908 9.90024 11.8892 9.37827 12.3433C9.09598 12.5889 8.78955 12.892 8.51776 13.2415C8.17056 13.6879 8.24398 14.3057 8.59915 14.7459C9.94215 16.4103 11.2394 17.7698 12.1675 18.6847C12.9202 19.4266 14.0992 19.3653 14.7613 18.5414C15.7721 17.2838 17.3917 15.1303 19.5484 11.8211Z"
                                        fill="#4361EE"
                                    />
                                </svg>
                                <span>احراز هویت مبتنی بر هوش مصنوعی</span>
                            </div>
                            <div className="ocrItem">
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.8 13.9998C2.8 7.81422 7.81441 2.7998 14 2.7998C20.1856 2.7998 25.2 7.81422 25.2 13.9998C25.2 20.1854 20.1856 25.1998 14 25.1998C7.81441 25.1998 2.8 20.1854 2.8 13.9998Z"
                                        fill="#4361EE"
                                        fillOpacity="0.2"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M19.5484 11.8211C19.8156 11.4112 19.8802 10.8799 19.5909 10.4853C19.2349 9.99976 18.7849 9.66027 18.3892 9.43135C17.8521 9.12063 17.2086 9.35753 16.8513 9.86481C14.6695 12.9625 13.3111 14.9734 13.3111 14.9734C13.3111 14.9734 12.4944 13.9578 11.1363 12.4975C10.6651 11.9908 9.90024 11.8892 9.37827 12.3433C9.09598 12.5889 8.78955 12.892 8.51776 13.2415C8.17056 13.6879 8.24398 14.3057 8.59915 14.7459C9.94215 16.4103 11.2394 17.7698 12.1675 18.6847C12.9202 19.4266 14.0992 19.3653 14.7613 18.5414C15.7721 17.2838 17.3917 15.1303 19.5484 11.8211Z"
                                        fill="#4361EE"
                                    />
                                </svg>
                                <span>استعلام اطلاعات از مراجع قانونی</span>
                            </div>
                            <div className="ocrItem">
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.8 13.9998C2.8 7.81422 7.81441 2.7998 14 2.7998C20.1856 2.7998 25.2 7.81422 25.2 13.9998C25.2 20.1854 20.1856 25.1998 14 25.1998C7.81441 25.1998 2.8 20.1854 2.8 13.9998Z"
                                        fill="#4361EE"
                                        fillOpacity="0.2"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M19.5484 11.8211C19.8156 11.4112 19.8802 10.8799 19.5909 10.4853C19.2349 9.99976 18.7849 9.66027 18.3892 9.43135C17.8521 9.12063 17.2086 9.35753 16.8513 9.86481C14.6695 12.9625 13.3111 14.9734 13.3111 14.9734C13.3111 14.9734 12.4944 13.9578 11.1363 12.4975C10.6651 11.9908 9.90024 11.8892 9.37827 12.3433C9.09598 12.5889 8.78955 12.892 8.51776 13.2415C8.17056 13.6879 8.24398 14.3057 8.59915 14.7459C9.94215 16.4103 11.2394 17.7698 12.1675 18.6847C12.9202 19.4266 14.0992 19.3653 14.7613 18.5414C15.7721 17.2838 17.3917 15.1303 19.5484 11.8211Z"
                                        fill="#4361EE"
                                    />
                                </svg>
                                <span>انعقاد قرارداد آنلاین و امضای دیجیتال</span>
                            </div>
                            <div className="ocrItem">
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.8 13.9998C2.8 7.81422 7.81441 2.7998 14 2.7998C20.1856 2.7998 25.2 7.81422 25.2 13.9998C25.2 20.1854 20.1856 25.1998 14 25.1998C7.81441 25.1998 2.8 20.1854 2.8 13.9998Z"
                                        fill="#4361EE"
                                        fillOpacity="0.2"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M19.5484 11.8211C19.8156 11.4112 19.8802 10.8799 19.5909 10.4853C19.2349 9.99976 18.7849 9.66027 18.3892 9.43135C17.8521 9.12063 17.2086 9.35753 16.8513 9.86481C14.6695 12.9625 13.3111 14.9734 13.3111 14.9734C13.3111 14.9734 12.4944 13.9578 11.1363 12.4975C10.6651 11.9908 9.90024 11.8892 9.37827 12.3433C9.09598 12.5889 8.78955 12.892 8.51776 13.2415C8.17056 13.6879 8.24398 14.3057 8.59915 14.7459C9.94215 16.4103 11.2394 17.7698 12.1675 18.6847C12.9202 19.4266 14.0992 19.3653 14.7613 18.5414C15.7721 17.2838 17.3917 15.1303 19.5484 11.8211Z"
                                        fill="#4361EE"
                                    />
                                </svg>
                                <span>استخراج اطلاعات از تصاویر OCR</span>
                            </div>
                        </div>
                        <div className="ocrLeft">
                            <div className="ocrItem">
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.8 13.9998C2.8 7.81422 7.81441 2.7998 14 2.7998C20.1856 2.7998 25.2 7.81422 25.2 13.9998C25.2 20.1854 20.1856 25.1998 14 25.1998C7.81441 25.1998 2.8 20.1854 2.8 13.9998Z"
                                        fill="#4361EE"
                                        fillOpacity="0.2"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M19.5484 11.8211C19.8156 11.4112 19.8802 10.8799 19.5909 10.4853C19.2349 9.99976 18.7849 9.66027 18.3892 9.43135C17.8521 9.12063 17.2086 9.35753 16.8513 9.86481C14.6695 12.9625 13.3111 14.9734 13.3111 14.9734C13.3111 14.9734 12.4944 13.9578 11.1363 12.4975C10.6651 11.9908 9.90024 11.8892 9.37827 12.3433C9.09598 12.5889 8.78955 12.892 8.51776 13.2415C8.17056 13.6879 8.24398 14.3057 8.59915 14.7459C9.94215 16.4103 11.2394 17.7698 12.1675 18.6847C12.9202 19.4266 14.0992 19.3653 14.7613 18.5414C15.7721 17.2838 17.3917 15.1303 19.5484 11.8211Z"
                                        fill="#4361EE"
                                    />
                                </svg>
                                <span>ساخت فرایند سفارشی آپلودرینگ</span>
                            </div>
                            <div className="ocrItem">
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.8 13.9998C2.8 7.81422 7.81441 2.7998 14 2.7998C20.1856 2.7998 25.2 7.81422 25.2 13.9998C25.2 20.1854 20.1856 25.1998 14 25.1998C7.81441 25.1998 2.8 20.1854 2.8 13.9998Z"
                                        fill="#4361EE"
                                        fillOpacity="0.2"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M19.5484 11.8211C19.8156 11.4112 19.8802 10.8799 19.5909 10.4853C19.2349 9.99976 18.7849 9.66027 18.3892 9.43135C17.8521 9.12063 17.2086 9.35753 16.8513 9.86481C14.6695 12.9625 13.3111 14.9734 13.3111 14.9734C13.3111 14.9734 12.4944 13.9578 11.1363 12.4975C10.6651 11.9908 9.90024 11.8892 9.37827 12.3433C9.09598 12.5889 8.78955 12.892 8.51776 13.2415C8.17056 13.6879 8.24398 14.3057 8.59915 14.7459C9.94215 16.4103 11.2394 17.7698 12.1675 18.6847C12.9202 19.4266 14.0992 19.3653 14.7613 18.5414C15.7721 17.2838 17.3917 15.1303 19.5484 11.8211Z"
                                        fill="#4361EE"
                                    />
                                </svg>
                                <span>پروفایل کاربران</span>
                            </div>
                            <div className="ocrItem">
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.8 13.9998C2.8 7.81422 7.81441 2.7998 14 2.7998C20.1856 2.7998 25.2 7.81422 25.2 13.9998C25.2 20.1854 20.1856 25.1998 14 25.1998C7.81441 25.1998 2.8 20.1854 2.8 13.9998Z"
                                        fill="#4361EE"
                                        fillOpacity="0.2"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M19.5484 11.8211C19.8156 11.4112 19.8802 10.8799 19.5909 10.4853C19.2349 9.99976 18.7849 9.66027 18.3892 9.43135C17.8521 9.12063 17.2086 9.35753 16.8513 9.86481C14.6695 12.9625 13.3111 14.9734 13.3111 14.9734C13.3111 14.9734 12.4944 13.9578 11.1363 12.4975C10.6651 11.9908 9.90024 11.8892 9.37827 12.3433C9.09598 12.5889 8.78955 12.892 8.51776 13.2415C8.17056 13.6879 8.24398 14.3057 8.59915 14.7459C9.94215 16.4103 11.2394 17.7698 12.1675 18.6847C12.9202 19.4266 14.0992 19.3653 14.7613 18.5414C15.7721 17.2838 17.3917 15.1303 19.5484 11.8211Z"
                                        fill="#4361EE"
                                    />
                                </svg>
                                <span>یکپارچه با سایر سیستم های احراز هویت</span>
                            </div>
                            <div className="ocrItem">
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.8 13.9998C2.8 7.81422 7.81441 2.7998 14 2.7998C20.1856 2.7998 25.2 7.81422 25.2 13.9998C25.2 20.1854 20.1856 25.1998 14 25.1998C7.81441 25.1998 2.8 20.1854 2.8 13.9998Z"
                                        fill="#4361EE"
                                        fillOpacity="0.2"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M19.5484 11.8211C19.8156 11.4112 19.8802 10.8799 19.5909 10.4853C19.2349 9.99976 18.7849 9.66027 18.3892 9.43135C17.8521 9.12063 17.2086 9.35753 16.8513 9.86481C14.6695 12.9625 13.3111 14.9734 13.3111 14.9734C13.3111 14.9734 12.4944 13.9578 11.1363 12.4975C10.6651 11.9908 9.90024 11.8892 9.37827 12.3433C9.09598 12.5889 8.78955 12.892 8.51776 13.2415C8.17056 13.6879 8.24398 14.3057 8.59915 14.7459C9.94215 16.4103 11.2394 17.7698 12.1675 18.6847C12.9202 19.4266 14.0992 19.3653 14.7613 18.5414C15.7721 17.2838 17.3917 15.1303 19.5484 11.8211Z"
                                        fill="#4361EE"
                                    />
                                </svg>
                                <span>مدیریت جامع فرایند های فروش</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ocrSection">
                    <h4 style={{color: "#2F75F9"}}>کاربردها</h4>
                    <div className="ocrItems usages">
                        <div className="ocrItem">
                            <StaticImage src="../../../assets/images/api-icon.png" alt="API icon" className="icon"/>
                            <span>بانک ها</span>
                        </div>
                        <div className="ocrItem">
                            <StaticImage src="../../../assets/images/api-icon.png" alt="API icon" className="icon"/>
                            <span>نهاد های مالی و بازار سرمایه</span>
                        </div>
                        <div className="ocrItem">
                            <StaticImage src="../../../assets/images/api-icon.png" alt="API icon" className="icon"/>
                            <span>صرافی های ارز دیجیتال</span>
                        </div>
                        <div className="ocrItem">
                            <StaticImage src="../../../assets/images/api-icon.png" alt="API icon" className="icon"/>
                            <span>فینتک ها</span>
                        </div>
                    </div>
                </div>
            </div>
        },
    ];

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <section>
            <h2 className="section-title ">راهکارهای یکپارچه لوانت برای احراز هویت و مدیریت مشتریان</h2>
            <h3 className="section-subtitle" style={{marginBottom: "4rem"}}>
                لوانت با خدمات نوآورانه، هزینه‌ها را کاهش و کارایی را افزایش می‌دهد و مزیت رقابتی برای مشتریان ایجاد
                می‌کند.
            </h3>
            <div className="tabs-container">
                <div className="tab-buttons">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`tab-button ${index === activeTab ? 'active' : ''}`}
                            onClick={() => handleTabClick(index)}
                        >
                            <div style={{
                                // display: "flex",
                                // justifyContent: "space-between",
                                // alignItems: "center",
                                fontFamily: "levantWebsite",
                                textAlign: "center"
                            }}>
                                {/*<StaticImage src="../../../assets/images/api-icon.png" alt="API icon" className="icon"/>*/}
                                {tab.label}
                            </div>

                        </button>
                    ))}
                </div>
                <div className="tab-content-container">
                    <TabContent content={tabs[activeTab].content}/>
                </div>
            </div>
        </section>
    );
};

export default Tabs;