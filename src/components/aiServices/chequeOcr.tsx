import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import useContactForm from "../useContactForm/useContactForm";
import NoticeBox from "../noticeBox/NoticeBox";

const TITLE = "سرویس نویسه‌خوان چک صیاد (OCR)";

function ChequeOcr() {
  const { toggle: toggleContactForm, form } = useContactForm(
    {
      subject: TITLE,
      title: "درخواست مشاوره و خرید",
    },
    false
  );
  const [uploaded, setUploaded] = useState(false);
  const [data, setData] = useState({
    serialNumber: "---",
    chequeNumber: "---",
    branchCode: "---",
    iban: "---",
  });

  function upload() {
    setUploaded(true);
    setData({
      serialNumber: "---",
      chequeNumber: "---",
      branchCode: "---",
      iban: "---",
    });
  }

  function submit() {
    if (uploaded) {
      setData({
        serialNumber: "124511212112",
        chequeNumber: "23",
        branchCode: "965",
        iban: "ir121212121212121212121212",
      });
    }
  }

  return (
    <section className="service-item" id="chequeOcr">
      <h2>{TITLE}</h2>
      <p style={{ padding: "22px" }}>
        این سرویس جهت خوانش اطلاعات درج شده بر روی چک صیادی طراحی شده است. در
        طراحی این سرویس از چندین مدل هوش مصنوعی استفاده شده است که ابتدا به
        بررسی وجود یا عدم وجود چک صیادی در تصویر آپلود شده می‌پردازند. در صورت
        تشخیص وجود چک صیادی در تصویر، یک مدل هوش مصنوعی دیگر به استخراج اطلاعات
        موجود در چک پرداخته و این اطلاعات جهت خوانش هوشمند در اختیار یک مدل OCR
        ‌ قرار میگیرند.
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
          <span className="description">تصویر چک صیاد</span>
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
          <span className="description">
            اطلاعات برگه چک (شماره سریال ۱۶ رقمی، شماره برگه، شماره شعبه و شماره
            شبای حساب)
          </span>
        </div>
      </div>
      <div className="mock-container">
        <div className="request">
          <div className="body">
            <div className="image-container">
              <StaticImage
                src="../../../assets/images/cheque.png"
                alt="Sample image"
                className={"image " + (uploaded ? "active" : "")}
              />
              <div className={"message " + (uploaded ? "success" : "")}>
                {!uploaded && <span>چک صیادی را بارگذاری کنید</span>}
                {uploaded && <span>چک صیادی بارگذاری شد</span>}
              </div>
            </div>
            <span className="passive-action" onClick={upload}>
              بارگذاری چک صیادی
            </span>
          </div>
          <button
            className={"active-action " + (uploaded ? "" : "disabled")}
            onClick={submit}
          >
            بررسی چک صیادی
          </button>
        </div>
        <div className="response">
          <h4>اطلاعات چک صیادی</h4>
          <span className="description">
            چک صیادی مورد نظر را بارگذاری کنید تا اطلاعات مندرج بر روی آن
            استخراج شود.
          </span>
          <div className="body">
            <div className="item">
              <span className="title">شماره سریال ۱۶ رقمی</span>
              <span className="value">{data.serialNumber}</span>
            </div>
            <div className="item">
              <span className="title">شماره برگه چک</span>
              <span className="value">{data.chequeNumber}</span>
            </div>
            <div className="item">
              <span className="title">شماره شعبه</span>
              <span className="value">{data.branchCode}</span>
            </div>
            <div className="item">
              <span className="title">شماره شبای درج شده روی چک</span>
              <span className="value">{data.iban}</span>
            </div>
          </div>
        </div>
      </div>
      {form}
    </section>
  );
}

export default ChequeOcr;
