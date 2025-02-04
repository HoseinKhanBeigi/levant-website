import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import useContactForm from "../useContactForm/useContactForm";
import NoticeBox from "../noticeBox/NoticeBox";

const TITLE = "سرویس احراز هویت با کارت ملی";

function NationalCardKyc() {
  let { toggle: toggleContactForm, form } = useContactForm(
    {
      subject: TITLE,
      title: "درخواست مشاوره و خرید",
    },
    false
  );
  let [uploaded, setUploaded] = useState(false);
  let [firstData, setFirstData] = useState("");
  let [data, setData] = useState({
    dataVerification: "---",
    aliveStatus: "---",
  });

  function fillFirstData() {
    setFirstData("0010001212");
    setUploaded(false);
    setData({
      dataVerification: "---",
      aliveStatus: "---",
    });
  }

  function upload() {
    setUploaded(true);
    setFirstData("");
    setData({
      dataVerification: "---",
      aliveStatus: "---",
    });
  }

  function submit() {
    if (uploaded || firstData) {
      setData({
        dataVerification: "بلی",
        aliveStatus: "زنده",
      });
    }
  }

  return (
    <section className="service-item national-kyc-service" id="nationalCard">
      <h2>{TITLE}</h2>
      <p style={{ padding: "22px" }}>
        سرویس احراز هویت با کارت ملی، برای کسب و کارهایی مناسب است که قصد تطبیق
        اطلاعات کاربران خود با اطلاعات ثبت شده در سازمان ثبت احوال بر اساس کد
        ملی را دارند. این سرویس علاوه بر بررسی اطلاعات دریافت شده با اطلاعات
        کاربر مذکور، وضعیت حیات را نیز ارائه می‌کند.
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
                تصویر کارت ملی یا اطلاعات هویتی شامل (کدملی، نام و نام خانوادگی،
                تاریخ تولد)
              </span>
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
                تطبیق اطلاعات هویتی کاربر: بلی/خیر
              </span>
            </li>
            <li>
              <span className="description">وضعیت حیات: زنده/متوفی</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mock-container">
        <div className="request">
          <div className="body">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input
                type="text"
                onClick={fillFirstData}
                value={firstData}
                readOnly
                placeholder="کد ملی"
              />
              <input
                type="text"
                onClick={fillFirstData}
                value={firstData.length > 0 ? "1368/08/08" : ""}
                readOnly
                placeholder="تاریخ تولد"
              />
            </div>
            <span className="splitter">یا</span>
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
            className={
              "active-action " + (uploaded || firstData ? "" : "disabled")
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
              <span className="title">تطبیق اطلاعات هویتی کاربر</span>
              <span className="value">{data.dataVerification}</span>
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

export default NationalCardKyc;
