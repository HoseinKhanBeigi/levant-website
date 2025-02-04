import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import useContactForm from "../useContactForm/useContactForm";
import NoticeBox from "../noticeBox/NoticeBox";

const TITLE = "سرویس خوانش متن کارت بانکی (OCR)";

function BankCardOcr() {
  let { toggle: toggleContactForm, form } = useContactForm(
    {
      subject: TITLE,
      title: "درخواست مشاوره و خرید",
    },
    false
  );
  let [uploaded, setUploaded] = useState(false);
  let [data, setData] = useState({
    cardNumber: "---",
    fullName: "---",
    cvv2: "---",
    expirationDate: "---",
  });

  function upload() {
    setUploaded(true);
    setData({
      cardNumber: "---",
      fullName: "---",
      cvv2: "---",
      expirationDate: "---",
    });
  }

  function submit() {
    if (uploaded) {
      setData({
        cardNumber: "6104-3378-8290-0792",
        fullName: "نام و نام خانوادگی",
        cvv2: "644",
        expirationDate: "97/09",
      });
    }
  }

  return (
    <section className="service-item" id="bankCardOcr">
      <h2>{TITLE}</h2>
      <p style={{ padding: "22px" }}>
        اگر در سایت یا اپلیکیشن خود به سرویسی نیاز دارید که تصاویر کارت‌های
        بانکی را از کاربر دریافت و اطلاعات مندرج بر روی آن را استخراج نماید، این
        سرویس با پرفورمنس بالا و خطای بسیار ناچیز، یکی از بهترین راه‌کارها محسوب
        می‎شود. «سرویس خوانش متن کارت بانکی (OCR)» لوانت، با توانایی خواندن
        فونت‌های متعدد فارسی، به سادگی کلیه متون مندرج بر روی کارت‌های بانکی را
        استخراج و به صورت Text ارائه می‌دهد.
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
          <span className="description">تصویر کارت بانکی</span>
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
          <span className="description">اطلاعات کارت به صورت متن</span>
        </div>
      </div>
      <div className="mock-container">
        <div className="request">
          <div className="body">
            <div className="image-container">
              <StaticImage
                src="../../../assets/images/bank-card.png"
                alt="Sample image"
                className={"image " + (uploaded ? "active" : "")}
              />
              <div className={"message " + (uploaded ? "success" : "")}>
                {!uploaded && <span>کارت بانکی را بارگذاری کنید</span>}
                {uploaded && <span>کارت بانکی بارگذاری شد</span>}
              </div>
            </div>
            <span className="passive-action" onClick={upload}>
              بارگذاری کارت بانکی
            </span>
          </div>
          <button
            className={"active-action " + (uploaded ? "" : "disabled")}
            onClick={submit}
          >
            بررسی کارت بانکی
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
              <span className="title">شماره کارت</span>
              <span className="value">{data.cardNumber}</span>
            </div>
            <div className="item">
              <span className="title">نام و نام خانوادگی</span>
              <span className="value">{data.fullName}</span>
            </div>
            <div className="item">
              <span className="title">cvv2</span>
              <span className="value">{data.cvv2}</span>
            </div>
            <div className="item">
              <span className="title">تاریخ انقضا</span>
              <span className="value">{data.expirationDate}</span>
            </div>
          </div>
        </div>
      </div>
      {form}
    </section>
  );
}

export default BankCardOcr;
