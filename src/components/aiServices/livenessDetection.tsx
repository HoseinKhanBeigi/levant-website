import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import useContactForm from "../useContactForm/useContactForm";
import NoticeBox from "../noticeBox/NoticeBox";

const TITLE = "سرویس بررسی زنده بودن ویدیو";

function LivenessDetection() {
  let { toggle: toggleContactForm, form } = useContactForm(
    {
      subject: TITLE,
      title: "درخواست مشاوره و خرید",
    },
    false
  );
  let [uploaded, setUploaded] = useState(false);
  let [data, setData] = useState({
    liveness: "---",
  });

  function upload() {
    setUploaded(true);
    setData({
      liveness: "---",
    });
  }

  function submit() {
    if (uploaded) {
      setData({
        liveness: "بلی",
      });
    }
  }

  return (
    <section className="service-item" id="livenessDetection">
      <h2>{TITLE}</h2>
      <p style={{ padding: "22px" }}>
        در شرایط مختلف، از جمله فرایندهای احراز هویت و آزمون‌های آنلاین، تلاش
        می‌کنیم که حضور ذینفع اصلی را در ویدئوی مدنظر بررسی کنیم تا از
        کلاهبرداری و Froud جلوگیری شود. سرویس Liveness در این موارد به کسب و
        کارها کمک می‌کند تا مطمئن شوند، کاربر مدنظر در ویدئوی ارسال شده حضور
        داشته و در مقابل دوربین به اجرای دستورات درخواست شده می‌پردازد. این
        سرویس از روش‌ها و ابزارهای متعددی به منظور anti-spoofing استفاده می‌کند
        تا از هر نظر به مشتریان اطمینان خاطر بدهد.
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
          <span className="description">فایل ویدیو ضبط شده</span>
        </div>
        <div className="item process">
          <div className="icon">
            <StaticImage
              src="../../../assets/images/process-icon.png"
              alt="Item icon"
            />
          </div>
          <span className="title">پردازش</span>
          <span className="description">بررسی حرکات کاربر توسط هوش مصنوعی</span>
        </div>
        <div className="item response">
          <div className="icon">
            <StaticImage
              src="../../../assets/images/output-icon.png"
              alt="Item icon"
            />
          </div>
          <span className="title">نتیجه</span>
          <span className="description">نتیجه بررسی Liveness: بلی/خیر</span>
        </div>
      </div>
      <div className="mock-container">
        <div className="request">
          <div className="body">
            <div className="image-container">
              <StaticImage
                src="../../../assets/images/face-wide.png"
                alt="Sample image"
                className={"image " + (uploaded ? "active" : "")}
              />
              <div className={"message " + (uploaded ? "success" : "")}>
                {!uploaded && <span>ویدیو را بارگذاری کنید</span>}
                {uploaded && <span>ویدیو بارگذاری شد</span>}
              </div>
            </div>
            <span className="passive-action" onClick={upload}>
              بارگذاری ویدیو
            </span>
          </div>
          <button
            className={"active-action " + (uploaded ? "" : "disabled")}
            onClick={submit}
          >
            بررسی ویدیو
          </button>
        </div>
        <div className="response">
          <h4>نتیجه بررسی ویدیو</h4>
          <span className="description">
            ویدیو مورد نظر را بارگذاری کنید تا اصالت آن بررسی شود.
          </span>
          <div className="body">
            <div className="item">
              <span className="title">بررسی زنده بودن</span>
              <span className="value">{data.liveness}</span>
            </div>
          </div>
        </div>
      </div>
      {form}
    </section>
  );
}

export default LivenessDetection;
