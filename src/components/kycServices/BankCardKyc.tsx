import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import useContactForm from "../useContactForm/useContactForm";
import NoticeBox from "../noticeBox/NoticeBox";

const TITLE = "سرویس احراز هویت با کارت بانکی";

function BankCardKyc() {
  let { toggle: toggleContactForm, form } = useContactForm(
    {
      subject: TITLE,
      title: "درخواست مشاوره و خرید",
    },
    false
  );
  let [uploaded, setUploaded] = useState(false);
  let [firstField, setFirstField] = useState("");
  let [secondField, setSecondField] = useState("");
  let [data, setData] = useState({
    dataVerification: "---",
  });

  function upload() {
    setUploaded(true);
    setFirstField("");
    setData({
      dataVerification: "---",
    });
  }

  function fillFirstData() {
    setFirstField("IR062960000000100324200001");
    setUploaded(false);
    setData({
      dataVerification: "---",
    });
  }

  function fillSecondData() {
    setSecondField("0010001212");
    setData({
      dataVerification: "---",
    });
  }

  function submit() {
    if ((uploaded || firstField) && secondField) {
      setData({
        dataVerification: "بلی",
      });
    }
  }

  return (
    <section className="service-item bank-kyc-service" id="bankCard">
      <h2>{TITLE}</h2>
      <p style={{ padding: "20px" }}>
        مشتریانی که توسط این سرویس هویت‌شان احراز شود، در سیستم بانکی کشور حساب
        فعال داشته و هویت آن‌ها مورد تأیید بانک مربوطه می‌باشد. بنابراین کسب و
        کارها می‌توانند به این موضوع استناد کرده و امکان دسترسی به خدمات مورد
        نیاز را به مشتری ارائه کنند.
      </p>
      <NoticeBox onClick={() => toggleContactForm(true)} />
      <div className="items-container">
        <div className="item no-shadow request">
          <div className="icon">
            <StaticImage
              src="../../../assets/images/input-icon.png"
              alt="Item icon"
            />
          </div>
          <span className="title">اطلاعات دریافتی</span>
          <ul>
            <li>
              <span className="description">
                تصویر کارت بانکی یا اطلاعات آن شامل (شماره کارت یا شماره شبا)
              </span>
            </li>
            <li>
              <span className="description">کد ملی</span>
            </li>
          </ul>
        </div>
        <div className="item no-shadow process">
          <div className="icon">
            <StaticImage
              src="../../../assets/images/process-icon.png"
              alt="Item icon"
            />
          </div>
          <span className="title">پردازش</span>
          <ul>
            <li>
              <span className="description">
                تطبیق کدملی کاربر با شماره شبای فعال وی
              </span>
            </li>
          </ul>
        </div>
        <div className="item no-shadow response">
          <div className="icon">
            <StaticImage
              src="../../../assets/images/output-icon.png"
              alt="Item icon"
            />
          </div>
          <span className="title">نتیجه</span>
          <ul>
            <li>
              <span className="description">
                تطبیق کد ملی و شبای کاربر: بلی/خیر
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mock-container">
        <div className="request">
          <div className="body">
            <input
              type="text"
              onClick={fillFirstData}
              value={firstField}
              readOnly
              placeholder="شماره کارت یا شماره شبا"
            />
            <span className="splitter">یا</span>
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
              بارگذاری تصویر کارت بانکی
            </span>
            <input
              type="text"
              onClick={fillSecondData}
              value={secondField}
              readOnly
              placeholder="کد ملی را وارد کنید"
            />
          </div>
          <button
            className={
              "active-action " +
              ((uploaded || firstField) && secondField ? "" : "disabled")
            }
            onClick={submit}
          >
            بررسی احراز هویت
          </button>
        </div>
        <div className="response">
          <h4>نتیجه احراز هویت</h4>
          <span className="description">
            تصاویر و اطلاعات مورد نظر را بارگذاری کنید تا نتیجه پروسه احراز هویت
            انجام شود.
          </span>
          <div className="body">
            <div className="item">
              <span className="title">تطبیق کد ملی و شبای کاربر</span>
              <span className="value">{data.dataVerification}</span>
            </div>
          </div>
        </div>
      </div>
      {form}
    </section>
  );
}

export default BankCardKyc;
