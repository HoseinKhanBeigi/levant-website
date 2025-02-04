import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import useContactForm from "../useContactForm/useContactForm";
import NoticeBox from "../noticeBox/NoticeBox";

const TITLE = "سرویس دریافت اطلاعات بانکی";

function BankAccountData() {
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
    sheba: "---",
    bankAccount: "---",
  });

  function upload() {
    setUploaded(true);
    setData({
      cardNumber: "---",
      sheba: "---",
      bankAccount: "---",
    });
  }

  function submit() {
    if (uploaded) {
      setData({
        cardNumber: "6104-3378-8290-0792",
        sheba: "IR062960000000100324200001",
        bankAccount: "1-782-2335588-1",
      });
    }
  }

  return (
    <section className="service-item" id="bankAccountData">
      <h2>{TITLE}</h2>
      <p style={{ padding: "22px" }}>
        این سرویس کلیه اطلاعات حساب بانکی را بر اساس یک کارت بانکی ارائه می‌دهد.
        کسب و کارها با استفاده از این سرویس می‌توانند بر اساس شماره کارت، به
        شماره حساب و شماره شبا متناظر آن دسترسی پیدا کنند.
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
              <span className="description">تصویر کارت بانکی</span>
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
              <span className="description">پروسه OCR توسط هوش مصنوعی</span>
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
                اطلاعات مندرج بر روی کارت بانکی مد نظر به صورت متنی (کارت، شماره
                شبای فرد و شماره حساب)
              </span>
            </li>
          </ul>
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
            کارت مورد نظر را بارگذاری کنید تا اطلاعات حساب را دریافت کنید.
          </span>
          <div className="body">
            <div className="item">
              <span className="title">شماره کارت</span>
              <span className="value">{data.cardNumber}</span>
            </div>
            <div className="item">
              <span className="title">شماره شبا</span>
              <span className="value">{data.sheba}</span>
            </div>
            <div className="item">
              <span className="title">شماره حساب</span>
              <span className="value">{data.bankAccount}</span>
            </div>
          </div>
        </div>
      </div>
      {form}
    </section>
  );
}

export default BankAccountData;
