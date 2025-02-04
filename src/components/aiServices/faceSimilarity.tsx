import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import useContactForm from "../useContactForm/useContactForm";
import NoticeBox from "../noticeBox/NoticeBox";

const TITLE = "سرویس تطبیق دو چهره";

function FaceSimilarity() {
  let { toggle: toggleContactForm, form } = useContactForm(
    {
      subject: TITLE,
      title: "درخواست مشاوره و خرید",
    },
    false
  );
  let [firstUploaded, setFirstUpload] = useState(false);
  let [secondUploaded, setSecondUpload] = useState(false);
  let [data, setData] = useState({
    similarity: "---",
  });

  function uploadFirst() {
    setFirstUpload(true);
    setData({
      similarity: "---",
    });
  }

  function uploadSecond() {
    setSecondUpload(true);
    setData({
      similarity: "---",
    });
  }

  function submit() {
    if (firstUploaded && secondUploaded) {
      setData({
        similarity: "100",
      });
    }
  }

  return (
    <section className="service-item" id="faceSimilarity">
      <h2>{TITLE}</h2>
      <p style={{ padding: "22px" }}>
        اگر در فرایندهای کسب و کار خود، نیاز دارید تا تصویری که قبلاً از کاربر
        دریافت کردید را با تصویری جدیدتر مقایسه کنید، سرویس «تطبیق چهره» لوانت،
        بهترین راه‌کار را در اختیار شما قرار می‌دهد. این سرویس با کارایی خوب و
        خطای بسیار پایین، درصد شباهت دو چهره را در پاسخ ارائه می‌کند. این سرویس
        کاربردهای فراوانی در کسب و کارهای مختلف دارد که از آن جمله می‌توان به
        سایت‌ها اپلیکیشن‌هایی اشاره کرد که می‌خواهند در زمان ورود کاربر به
        سیستم، یا در بازه‌های زمانی مختلف، مطمئن شوند که استفاده کننده از سیستم،
        ذینفع اصلی است و حساب کاربری مدنظر مورد سوء استفاده کلاهبرداران قرار
        نگرفته است.
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
          <span className="description">دریافت دو تصویر به صورت همزمان</span>
        </div>
        <div className="item process">
          <div className="icon">
            <StaticImage
              src="../../../assets/images/process-icon.png"
              alt="Item icon"
            />
          </div>
          <span className="title">پردازش</span>
          <span className="description">انجام پروسه تطبیق</span>
        </div>
        <div className="item response">
          <div className="icon">
            <StaticImage
              src="../../../assets/images/output-icon.png"
              alt="Item icon"
            />
          </div>
          <span className="title">نتیجه</span>
          <span className="description">درصد شباهت: 90٪</span>
        </div>
      </div>
      <div className="mock-container wide-request">
        <div className="request">
          <div className="body">
            <div className="col-item">
              <div className="image-container">
                <StaticImage
                  src="../../../assets/images/face.png"
                  alt="Sample image"
                  className={"image " + (firstUploaded ? "active" : "")}
                />
                <div className={"message " + (firstUploaded ? "success" : "")}>
                  {!firstUploaded && <span>تصویر اول را بارگذاری کنید</span>}
                  {firstUploaded && <span>تصویر اول بارگذاری شد</span>}
                </div>
              </div>
              <span className="passive-action" onClick={uploadFirst}>
                بارگذاری تصویر اول
              </span>
            </div>
            <div className="col-item">
              <div className="image-container">
                <StaticImage
                  src="../../../assets/images/face.png"
                  alt="Sample image"
                  className={"image " + (secondUploaded ? "active" : "")}
                />
                <div className={"message " + (secondUploaded ? "success" : "")}>
                  {!secondUploaded && <span>تصویر دوم را بارگذاری کنید</span>}
                  {secondUploaded && <span>تصویر دوم بارگذاری شد</span>}
                </div>
              </div>
              <span className="passive-action" onClick={uploadSecond}>
                بارگذاری تصویر دوم
              </span>
            </div>
          </div>
          <button
            className={
              "active-action " +
              (firstUploaded && secondUploaded ? "" : "disabled")
            }
            onClick={submit}
          >
            تطبیق دو چهره
          </button>
        </div>
        <div className="response">
          <h4>نتیجه بررسی تصاویر</h4>
          <span className="description">
            تصاویر مورد نظر را بارگذاری کنید تا اصالت آنها بررسی شود.
          </span>
          <div className="body">
            <div className="item">
              <span className="title">درصد شباهت</span>
              <span className="value">{data.similarity}</span>
            </div>
          </div>
        </div>
      </div>
      {form}
    </section>
  );
}

export default FaceSimilarity;
