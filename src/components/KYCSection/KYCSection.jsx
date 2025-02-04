import React from "react";
import "./KYCSection.scss";

const KYCSection = () => {
  return (
    <section className="KYCContainer" style={{ marginBottom: "0" }}>
      <h2
        className="section-title "
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        مفاهیم KYC و eKYC
      </h2>
      <h3
        className="section-subtitle"
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        عملیات‌های KYC (شناسایی مشتری) و eKYC (شناسایی الکترونیکی مشتری) برای
        تأیید هویت مشتریان و افزایش امنیت در تعاملات مالی و تجاری الزامی و حیاتی
        هستند.
      </h3>
      <div className="info-section">
        <div className="cards-container">
          <div
            className="card card-highlighted"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h4 style={{ textAlign: "right" }}>KYC چیست و چرا اهمیت دارد؟</h4>
            <p style={{ padding: "22px" }}>
              KYC یا "شناخت مشتری" فرایندی است که طی آن کسب‌وکارها، به‌ویژه
              موسسات مالی و فینتک ها، هویت مشتریان خود را تایید می‌کنند تا از
              تقلب، پولشویی و سایر فعالیت‌های غیرقانونی جلوگیری شود. این فرایند
              به افزایش امنیت و اعتماد در تبادلات مالی الزامی است.
            </p>
          </div>
          <div className="card" data-aos="fade-up" data-aos-duration="2000">
            <h4 style={{ textAlign: "right" }}>
              eKYC چیست و چگونه کار می‌کند؟
            </h4>
            <p style={{ padding: "22px" }}>
              eKYC (Electronic Know Your Customer) به معنای "شناخت مشتری به صورت
              الکترونیکی" است که به جای روش‌های سنتی و حضوری، به صورت آنلاین و
              غیر حضوری از فناوری‌های دیجیتال مانند احراز هویت ویدیویی، تشخیص
              چهره و اسناد برای انجام این فرایند استفاده می‌کند.
            </p>
          </div>
          <div className="card" data-aos="fade-up" data-aos-duration="3000">
            <h4 style={{ textAlign: "right" }}>eKYC بهتر از KYC سنتی است؟</h4>
            <p style={{ padding: "22px" }}>
              eKYC مزایای زیادی نسبت به روش‌های سنتی KYC دارد، از جمله سرعت
              بالاتر، هزینه‌ پایین تر، دقت بیشتر و خطای انسانی کمتر. علاوه بر
              eKYC به صورت غیرحضوری انجام می‌شود و به مشتریان این امکان را
              می‌دهد که در هر زمان و مکان، فرایند احراز هویت را تکمیل نمایند.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KYCSection;
