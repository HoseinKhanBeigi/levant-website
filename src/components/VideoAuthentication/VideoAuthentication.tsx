import React from "react";
import "./safety.scss";

export default function VideoAuthentication() {
  const data = [
    {
      title: "کیفیت محصول",
      listAdvantages: [
        "فناوری پیشرفته هوش مصنوعی",
        "پاسخ دهی به صورت Sync",
        "قابلیت Anti Spoofing",
        "مقیاس‌پذیر",
        "امنیت بالا",
      ],
    },
    {
      title: "کسب و کار",
      listAdvantages: [
        "قیمت رقابتی",
        "پلن های قیمتی منعطف",
        "پنل تحت وب گزارش دهی",
        "فرایند ساده و سریع برای همکاری",
        "مستقل از مرکز تماس",
      ],
    },
    {
      title: "پیاده سازی سرویس",
      listAdvantages: [
        "تیم پشتیبانی پاسخگو",
        "ارائه به صورت API و SDK",
        "قابلیت Cloud & On Premise",
        "مستندات جامع ",
        "پیاده سازی آسان و سریع",
      ],
    },
  ];
  return (
    <section className="advantagesContainer animated">
      <div className="sideLeft">
        <span className="realistic-marker-highlight">مزایای سرویس </span>احراز
        هویت ویدیویی لوانت
      </div>
      <svg
        xmlns="//www.w3.org/2000/svg"
        version="1.1"
        className="svg-filters"
        style={{ display: "none" }}
      >
        <defs>
          <filter id="marker-shape">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0 0.15"
              numOctaves="1"
              result="warp"
            />
            <feDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              scale="30"
              in="SourceGraphic"
              in2="warp"
            />
          </filter>
        </defs>
      </svg>

      <div className="flex-container">
        {data.map((e) => (
          <div className="flex-item">
            <div
              className="title"
              style={{
                fontSize: "1.2rem",
                fontWeight: "700",
                marginBottom: "1rem",
                color: "#212529",
              }}
            >
              {e.title}
            </div>
            {e.listAdvantages.map((item) => (
              <div className="item">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.8 13.9998C2.8 7.81422 7.81441 2.7998 14 2.7998C20.1856 2.7998 25.2 7.81422 25.2 13.9998C25.2 20.1854 20.1856 25.1998 14 25.1998C7.81441 25.1998 2.8 20.1854 2.8 13.9998Z"
                    fill="#4361EE"
                    fillOpacity="0.2"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.5484 11.8211C19.8156 11.4112 19.8802 10.8799 19.5909 10.4853C19.2349 9.99976 18.7849 9.66027 18.3892 9.43135C17.8521 9.12063 17.2086 9.35753 16.8513 9.86481C14.6695 12.9625 13.3111 14.9734 13.3111 14.9734C13.3111 14.9734 12.4944 13.9578 11.1363 12.4975C10.6651 11.9908 9.90024 11.8892 9.37827 12.3433C9.09598 12.5889 8.78955 12.892 8.51776 13.2415C8.17056 13.6879 8.24398 14.3057 8.59915 14.7459C9.94215 16.4103 11.2394 17.7698 12.1675 18.6847C12.9202 19.4266 14.0992 19.3653 14.7613 18.5414C15.7721 17.2838 17.3917 15.1303 19.5484 11.8211Z"
                    fill="#4361EE"
                  />
                </svg>{" "}
                <div className="item-color">{item}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
