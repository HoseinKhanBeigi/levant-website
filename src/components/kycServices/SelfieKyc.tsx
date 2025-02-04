import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import useContactForm from "../useContactForm/useContactForm";
import NoticeBox from "../noticeBox/NoticeBox";
import DemoRequest from "../demoRequest/DemoRequest";

const TITLE = "سرویس احراز هویت با عکس سلفی";

function SelfieKyc() {
  let { toggle: toggleContactForm, form } = useContactForm(
    {
      subject: TITLE,
      title: "درخواست مشاوره و خرید",
    },
    false
  );
  let [firstUploaded, setFirstUpload] = useState(false);
  let [firstData, setFirstData] = useState("");
  let [secondUploaded, setSecondUpload] = useState(false);
  let [data, setData] = useState({
    faceVerification: "---",
    dataVerification: "---",
    aliveStatus: "---",
  });

  function uploadFirst() {
    setFirstUpload(true);
    setFirstData("");
    setData({
      faceVerification: "---",
      dataVerification: "---",
      aliveStatus: "---",
    });
  }

  function fillFirstData() {
    setFirstData("0010001212");
    setFirstUpload(false);
    setData({
      faceVerification: "---",
      dataVerification: "---",
      aliveStatus: "---",
    });
  }

  function uploadSecond() {
    setSecondUpload(true);
    setData({
      faceVerification: "---",
      dataVerification: "---",
      aliveStatus: "---",
    });
  }

  function submit() {
    if ((firstUploaded || firstData.length > 0) && secondUploaded) {
      setData({
        faceVerification: "بلی",
        dataVerification: "بلی",
        aliveStatus: "زنده",
      });
    }
  }
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="service-item selfie-section" id="selfie">
      <h2>{TITLE}</h2>
      <p style={{ padding: "22px" }}>
        احراز هویت مشتری با عکس سلفی و اطلاعات ثبت احوال، فرایند ساده‌تری نسبت
        به احراز هویت ویدیویی داشته و کسب و کارها می‌توانند در کمتر از 30 ثانیه
        این فرایند را برای هر کاربر انجام دهند. این سرویس، عکس کاربر را با عکس
        دریافت شده از ثبت احوال تطبیق داده و اطلاعات هویتی کاربر را بر اساس
        تصویر کارت ملی از سامانه ثبت احوال فراخوانی می‌کند.
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
                تصویر کارت ملی یا کد ملی به همراه تاریخ تولد
              </span>
            </li>
            <li>
              <span className="description">
                دریافت تصویر چهره کاربر (سلفی)
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
            <li>
              <span className="description">
                تطبیق تصویر چهره کاربر با تصویر ثبت شده از او در اداره ثبت احوال
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
                تطبیق چهره کاربر با تصویر ثبت شده در ثبت احوال: بلی/خیر
              </span>
            </li>
            <li>
              <span className="description">
                تطبیق کد ملی و اطلاعات کاربر با اطلاعات موجود در ثبت احوال:
                بلی/خیر
              </span>
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
              <div className="image-container">
                <StaticImage
                  src="../../../assets/images/face.png"
                  alt="Sample image"
                  className={"image " + (secondUploaded ? "active" : "")}
                />
                <div className={"message " + (secondUploaded ? "success" : "")}>
                  {!secondUploaded && <span>تصویر سلفی را بارگذاری کنید</span>}
                  {secondUploaded && <span>تصویر سلفی بارگذاری شد</span>}
                </div>
              </div>
              <span className="passive-action" onClick={uploadSecond}>
                بارگذاری تصویر سلفی
              </span>
            </div>
          </div>
          <button
            className={
              "active-action " +
              ((firstUploaded || firstData) && secondUploaded ? "" : "disabled")
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
          <div className="body single-col">
            <div className="item">
              <span className="title">
                تطبیق چهره کاربر با تصویر ثبت شده در ثبت احوال
              </span>
              <span className="value">{data.faceVerification}</span>
            </div>
            <div className="item">
              <span className="title">
                تطبیق اطلاعات کاربر با اطلاعات موجود در ثبت احوال
              </span>
              <span className="value">{data.dataVerification}</span>
            </div>
            <div className="item">
              <span className="title">وضعیت حیات</span>
              <span className="value">{data.aliveStatus}</span>
            </div>
          </div>
        </div>
      </div>
      {/* <DemoRequest isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} /> */}
      <div>{form}</div>
    </section>
  );
}

export default SelfieKyc;
