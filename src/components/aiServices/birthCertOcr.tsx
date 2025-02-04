import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import useContactForm from "../useContactForm/useContactForm";
import NoticeBox from "../noticeBox/NoticeBox";

const TITLE = "سرویس نویسه‌خوان شناسنامه فرمت جدید (OCR)";

function BirthCertOcr() {
  const { toggle: toggleContactForm, form } = useContactForm(
    {
      subject: TITLE,
      title: "درخواست مشاوره و خرید",
    },
    false
  );
  const [uploaded, setUploaded] = useState(false);
  const [data, setData] = useState({
    nationalCode: "---",
    birthDate: "---",
  });

  function upload() {
    setUploaded(true);
    setData({
      nationalCode: "---",
      birthDate: "---",
    });
  }

  function submit() {
    if (uploaded) {
      setData({
        nationalCode: "0010001122",
        birthDate: "1374/05/07",
      });
    }
  }

  return (
    <section className="service-item" id="birthCertOcr">
      <h2>{TITLE}</h2>
      <p style={{ padding: "22px" }}>
        این سرویس جهت خوانش اطلاعاتی نظیر شماره ملی و تاریخ تولد در شناسنامه‌های
        با فرمت جدید طراحی شده است. تصویر مورد نظر خود را برای سرویس مذکور ارسال
        می کنید تا در مرحله اول سیستم ارزیابی سند انجام شود. اگر تصویر ارسال
        شده، شناسنامه با فرمت جدید نباشد، سرویس پیام خطا ارسال می کند، اما در
        صورتی که تصویر شما یک شناسنامه با فرمت جدید باشد، اطلاعاتی نظیر کد ملی و
        تاریخ تولد از آن استخراج شده و در پاسخ ارسال می شود.
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
          <span className="description">تصویر شناسنامه با فرمت جدید</span>
        </div>
        <div className="item process">
          <div className="icon">
            <StaticImage
              src="../../../assets/images/process-icon.png"
              alt="Item icon"
            />
          </div>
          <span className="title">پردازش</span>
          <span className="description">
            داکیومنت وریفیکیشن و پروسه OCR توسط هوش مصنوعی
          </span>
        </div>
        <div className="item response">
          <div className="icon">
            <StaticImage
              src="../../../assets/images/output-icon.png"
              alt="Item icon"
            />
          </div>
          <span className="title">نتیجه</span>
          <span className="description">استخراج کدملی و تاریخ تولد</span>
        </div>
      </div>
      <div className="mock-container">
        <div className="request">
          <div className="body">
            <div className="image-container">
              <StaticImage
                src="../../../assets/images/birth-certificate.png"
                alt="Sample image"
                className={"image " + (uploaded ? "active" : "")}
              />
              <div className={"message " + (uploaded ? "success" : "")}>
                {!uploaded && <span>شناسنامه را بارگذاری کنید</span>}
                {uploaded && <span>شناسنامه بارگذاری شد</span>}
              </div>
            </div>
            <span className="passive-action" onClick={upload}>
              بارگذاری شناسنامه
            </span>
          </div>
          <button
            className={"active-action " + (uploaded ? "" : "disabled")}
            onClick={submit}
          >
            بررسی شناسنامه
          </button>
        </div>
        <div className="response">
          <h4>اطلاعات شناسنامه</h4>
          <span className="description">
            شناسنامه مورد نظر را بارگذاری کنید تا اطلاعات مندرج بر روی آن
            استخراج شود.
          </span>
          <div className="body">
            <div className="item">
              <span className="title">کد ملی</span>
              <span className="value">{data.nationalCode}</span>
            </div>
            <div className="item">
              <span className="title">تاریخ تولد</span>
              <span className="value">{data.birthDate}</span>
            </div>
          </div>
        </div>
      </div>
      {form}
    </section>
  );
}

export default BirthCertOcr;
