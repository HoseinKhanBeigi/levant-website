import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import useContactForm from "../useContactForm/useContactForm";
import NoticeBox from "../noticeBox/NoticeBox";

const TITLE = "سرویس احراز هویت با اطلاعات بانکی و تلفن همراه";

function BankWithMobileKyc() {
  let { toggle: toggleContactForm, form } = useContactForm(
    {
      subject: TITLE,
      title: "درخواست مشاوره و خرید",
    },
    false
  );
  let [firstUploaded, setFirstUpload] = useState(false);
  let [secondUploaded, setSecondUpload] = useState(false);
  let [firstField, setFirstField] = useState("");
  let [secondField, setSecondField] = useState("");
  let [thirdField, setThirdField] = useState("");

  const defaultData = {
    mobileVerification: "---",
    shebaVerification: "---",
    otpVerification: "---",
    aliveStatus: "---",
  };

  let [data, setData] = useState(defaultData);

  function uploadFirst() {
    setFirstUpload(true);
    setFirstField("");
    setData(defaultData);
  }

  function fillFirstData() {
    setFirstField("0010001212");
    setFirstUpload(false);
    setData(defaultData);
  }

  function uploadSecond() {
    setSecondUpload(true);
    setSecondField("");
    setData(defaultData);
  }

  function fillSecondData() {
    setSecondField("6104-3378-8290-0792");
    setSecondUpload(false);
    setData(defaultData);
  }

  function fillThirdData() {
    setThirdField("09120000000");
    setData(defaultData);
  }

  function submit() {
    if (
      (firstUploaded || firstField.length > 0) &&
      (secondUploaded || secondField.length > 0) &&
      thirdField
    ) {
      setData({
        mobileVerification: "بلی",
        shebaVerification: "بلی",
        otpVerification: "بلی",
        aliveStatus: "زنده",
      });
    }
  }

  return (
    <section className="service-item bank-with-mobile" id="bankWithMobile">
      <h2>{TITLE}</h2>
      <p style={{ padding: "22px" }}>
        یکی از روش‌های ساده و سریع احراز هویت مشتری، استناد به مدارک سازمان‌های
        معتبری مانند بانک و اپراتور تلفن همراه است. اگر مشتری دارای سیم کارت
        فعال و حساب بانکی فعال باشد، به این معنی است که بانک و اپراتور مربوطه وی
        را احراز هویت کرده و در حال ارائه خدمات به وی هستند.
      </p>
      <p style={{ padding: "22px" }}>
        این سرویس، با دریافت اطلاعات کارت بانکی، کارت ملی و شماره تلفن همراه
        مشتری، اقدام به بررسی و تطبیق اطلاعات از طریق استعلام از مراجع مربوطه
        کرده و نتیجه آن را به کسب و کار اطلاع می‌دهد.
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
                تصویر کارت بانکی یا شماره کارت
              </span>
            </li>
            <li>
              <span className="description">تصویر کارت ملی یا شماره ملی</span>
            </li>
            <li>
              <span className="description">شماره موبایل</span>
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
                تطبیق اطلاعات کارت ملی کاربر با اطلاعات ثبت احوال (کد ملی، نام و
                نام خانوادگی، تاریخ تولد، حیات)
              </span>
            </li>
            <li>
              <span className="description">
                دریافت اطلاعات بانکی از طریق شماره کارت (شبا و شماره حساب)
              </span>
            </li>
            <li>
              <span className="description">تطبیق شبا با کدملی کاربر</span>
            </li>
            <li>
              <span className="description">
                تطبیق شماره موبایل و کد ملی کاربر
              </span>
            </li>
            <li>
              <span className="description">
                تطبیق کد OTP ارسال شده به موبایل کاربر و کد دریافت شده از سوی وی
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
                تطبیق کد ملی و موبایل: بلی/خیر
              </span>
            </li>
            <li>
              <span className="description">تطبیق کد ملی و شبا: بلی/خیر</span>
            </li>
            <li>
              <span className="description">تطبیق کد OTP: بلی/خیر</span>
            </li>
            <li>
              <span className="description">وضعیت حیات: زنده/متوفی</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mock-container wide-request">
        <div className="request">
          <div className="body">
            <div className="col-item">
              <input
                type="text"
                onClick={fillFirstData}
                value={firstField}
                readOnly
                placeholder="کد ملی خود را وارد کنید"
              />
              <span className="splitter">یا</span>
              <div className="image-container">
                <StaticImage
                  src="../../../assets/images/national-card.png"
                  alt="Sample image"
                  className={"image " + (firstUploaded ? "active" : "")}
                />
                <div className={"message " + (firstUploaded ? "success" : "")}>
                  {!firstUploaded && <span>کارت ملی را بارگذاری کنید</span>}
                  {firstUploaded && <span>کارت ملی بارگذاری شد</span>}
                </div>
              </div>
              <span className="passive-action" onClick={uploadFirst}>
                بارگذاری تصویر کارت ملی
              </span>
            </div>
            <div className="col-item">
              <input
                type="text"
                onClick={fillSecondData}
                value={secondField}
                readOnly
                placeholder="شماره کارت خود را وارد کنید"
              />
              <span className="splitter">یا</span>
              <div className="image-container">
                <StaticImage
                  src="../../../assets/images/bank-card.png"
                  alt="Sample image"
                  className={"image " + (secondUploaded ? "active" : "")}
                />
                <div className={"message " + (secondUploaded ? "success" : "")}>
                  {!secondUploaded && <span>کارت بانکی را بارگذاری کنید</span>}
                  {secondUploaded && <span>کارت بانکی بارگذاری شد</span>}
                </div>
              </div>
              <span className="passive-action" onClick={uploadSecond}>
                بارگذاری کارت بانکی
              </span>
            </div>
            <input
              type="text"
              className="width-50"
              onClick={fillThirdData}
              value={thirdField}
              readOnly
              placeholder="شماره موبایل را وارد کنید"
            />
          </div>
          <button
            className={
              "active-action " +
              ((firstUploaded || firstField) &&
              (secondUploaded || secondField) &&
              thirdField
                ? ""
                : "disabled")
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
              <span className="title">تطبیق کد ملی و موبایل</span>
              <span className="value">{data.mobileVerification}</span>
            </div>
            <div className="item">
              <span className="title">تطبیق کد ملی و شبا</span>
              <span className="value">{data.shebaVerification}</span>
            </div>
            <div className="item">
              <span className="title">تطبیق کد OTP</span>
              <span className="value">{data.otpVerification}</span>
            </div>
            <div className="item">
              <span className="title">وضعیت حیات</span>
              <span className="value">{data.aliveStatus}</span>
            </div>
          </div>
        </div>
      </div>
      {form}
    </section>
  );
}

export default BankWithMobileKyc;
