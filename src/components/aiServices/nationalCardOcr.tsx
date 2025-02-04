import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import useContactForm from "../useContactForm/useContactForm";
import NoticeBox from "../noticeBox/NoticeBox";

const TITLE = "سرویس خوانش متن کارت ملی (OCR)";

function NationalCardOcr() {
  let { toggle: toggleContactForm, form } = useContactForm(
    {
      subject: TITLE,
      title: "درخواست مشاوره و خرید",
    },
    false
  );
  let [uploaded, setUploaded] = useState(false);
  let [data, setData] = useState({
    nationalCode: "---",
    expirationDate: "---",
    firstName: "---",
    lastName: "---",
    birthDate: "---",
    fatherName: "---",
  });

  function upload() {
    setUploaded(true);
    setData({
      nationalCode: "---",
      expirationDate: "---",
      firstName: "---",
      lastName: "---",
      birthDate: "---",
      fatherName: "---",
    });
  }

  function submit() {
    if (uploaded) {
      setData({
        nationalCode: "0010001122",
        expirationDate: "1402/01/01",
        firstName: "ساره",
        lastName: "محمدی",
        birthDate: "1374/05/07",
        fatherName: "کیارش",
      });
    }
  }

  return (
    <section className="service-item" id="nationalCardOcr">
      <h2>{TITLE}</h2>
      <p style={{ padding: "22px" }}>
        با توسعه روزافزون ابزارهای دیجیتال و گسترش دامنه کلاهبرداری‌ها به فضای
        اینترنت موضوع احراز هویت در فضای مجازی و صحت‌سنجی مدارک و اطلاعات بیش از
        گذشته اهمیت یافته است. اما همواره یکی از مهم‌ترین چالش‌های احراز هویت
        کاربران، وجود فرایندهای پیچیده و زمان‌بر بود. فرایندهایی که پیاده‌سازی
        آن برای صاحبان کسب و کار سخت و پرهزینه بود و استفاده از آن هم برای
        مشتریان بسیار سخت و دشوار. در سال‌های اخیر، هوش مصنوعی با هدف ساده‌سازی
        و راحت‌تر کردن فرایندهای احراز هویت مورد استفاده قرار گرفته و نتایج
        ملموسی به دنبال داشته است. «سرویس خوانش متن کارت ملی (OCR)» لوانت، با
        استفاده از الگوهای پیشرفته هوش مصنوعی می‌تواند اطلاعات مندرج بر رو و یا
        پشت آن را به صورت Text استخراج نماید. این سرویس با پرفورمنس بالا و خطای
        بسیار پایین، قابلیت استخراج متون فارسی کارت ملی را هم دارد.
      </p>
      <NoticeBox onClick={() => toggleContactForm(true)} />
      <div className="items-container">
        <div className="item request">
          <div className="icon">
            <StaticImage
              src="../../../assets/images/input-icon.png"
              alt="Item icon"
            />
          </div>
          <span className="title">اطلاعات دریافتی</span>
          <span className="description">تصویر پشت/رو کارت ملی</span>
        </div>
        <div className="item process">
          <div className="icon">
            <StaticImage
              src="../../../assets/images/process-icon.png"
              alt="Item icon"
            />
          </div>
          <span className="title">پردازش</span>
          <span className="description">پروسه ocr توسط هوش مصنوعی</span>
        </div>
        <div className="item response">
          <div className="icon">
            <StaticImage
              src="../../../assets/images/output-icon.png"
              alt="Item icon"
            />
          </div>
          <span className="title">نتیجه</span>
          <span className="description">اطلاعات کارت ملی به صورت متن</span>
        </div>
      </div>
      <div className="mock-container">
        <div className="request">
          <div className="body">
            <div className="image-container">
              <StaticImage
                src="../../../assets/images/national-card.png"
                alt="Sample image"
                className={"image " + (uploaded ? "active" : "")}
              />
              <div className={"message " + (uploaded ? "success" : "")}>
                {!uploaded && <span>کارت ملی را بارگذاری کنید</span>}
                {uploaded && <span>کارت ملی بارگذاری شد</span>}
              </div>
            </div>
            <span className="passive-action" onClick={upload}>
              بارگذاری کارت ملی
            </span>
          </div>
          <button
            className={"active-action " + (uploaded ? "" : "disabled")}
            onClick={submit}
          >
            بررسی کارت ملی
          </button>
        </div>
        <div className="response">
          <h4>اطلاعات کارت بانکی</h4>
          <span className="description">
            کارت مورد نظر را بارگذاری کنید تا اطلاعات مندرج بر روی آن استخراج
            شود.
          </span>
          <div className="body">
            <div className="item">
              <span className="title">شماره ملی</span>
              <span className="value">{data.nationalCode}</span>
            </div>
            <div className="item">
              <span className="title">پایان اعتبار</span>
              <span className="value">{data.expirationDate}</span>
            </div>
            <div className="item">
              <span className="title">نام</span>
              <span className="value">{data.firstName}</span>
            </div>
            <div className="item">
              <span className="title">نام خانوادگی</span>
              <span className="value">{data.lastName}</span>
            </div>
            <div className="item">
              <span className="title">تاریخ تولد</span>
              <span className="value">{data.birthDate}</span>
            </div>
            <div className="item">
              <span className="title">نام پدر</span>
              <span className="value">{data.fatherName}</span>
            </div>
          </div>
        </div>
      </div>
      {form}
    </section>
  );
}

export default NationalCardOcr;
