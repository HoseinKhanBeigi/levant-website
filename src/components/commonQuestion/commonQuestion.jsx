import React, { useState } from "react";
import "./commonQuestion.scss";
import "../../pages/index.scss";

const CommonQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const questions = [
    {
      question: "فرایند احراز هویت برای هر فرد چقدر زمان طول می کشد؟",
      answer:
        "فرایند احراز هویت لوانت معمولاً در حدود 30 ثانیه انجام می‌شود. هوش مصنوعی به سرعت ویدیوی سلفی و اطلاعات ثبت احوال را پردازش کرده و نتیجه احراز هویت را اعلام می‌کند. سرعت اینترنت می تواند بر این زمان تاثیر گذار باشد.",
    },
    {
      question:
        "آیا احراز هویت ویدیویی مبتنی بر هوش مصنوعی برای کاربران عادی مشکل است؟",
      answer:
        "خیر، احراز هویت ویدیویی غیر حضوری لوانت بسیار ساده و کاربرپسند است. تنها نیاز است که کاربران کد ملی و تاریخ تولید خود را وارد نمایند و  با دوربین موبایل یا لپ‌تاپ خود ویدیویی کوتاه به صورت سلفی از خود بگیرند. بقیه مراحل به‌ صورت خودکار توسط هوش مصنوعی انجام می‌شود.",
    },
    {
      question:
        "آیا افراد می‌توانند از احراز هویت ویدیویی در هر مکانی استفاده کنند؟",
      answer:
        "بله، کاربران می‌توانند از هر مکانی که دسترسی به اینترنت و دوربین دارند، از خدمات احراز هویت ویدیویی استفاده کنند. این ویژگی به کاربران امکان می‌دهد بدون نیاز به حضور فیزیکی، از هر مکانی و در هر ساعتی از شبانه روز فرایند احراز هویت خود را انجام دهند.",
    },
    {
      question:
        "آیا احراز هویت ویدیویی برای دستگاه‌های مختلف (موبایل، تبلت، کامپیوتر) قابل انجام است؟",
      answer:
        "بله، سیستم ما با طیف گسترده‌ای از دستگاه‌ها سازگار است و مشتریان شما می توانند از هر دستگاهی که دارای دوربین و اتصال به اینترنت باشد، برای انجام احراز هویت خود استفاده نمایند.",
    },
    {
      question: "چه نوع مدارکی برای احراز هویت ویدیویی مورد نیاز است؟",
      answer:
        "مشتریان شما به هیچ مدرکی برای احراز هویت نیاز ندارند و صرفا با وارد نمودن کد ملی و تاریخ تولد و گرفتن سلفی با دوربین خود . هوش مصنوعی سیستم قادر است از طریق تطبیق چهره در ویدیو با اطلاعات ثبت احوال، هویت فرد را تایید کند.",
    },
    {
      question:
        "آیا احراز هویت ویدیویی کاربران توسط یک انسان نیز بررسی می‌شود؟",
      answer:
        "خیر، فرایند احراز هویت غیرحضوری لوانت به طور کامل توسط هوش مصنوعی ما انجام می‌شود. این امر باعث می‌شود تا فرایند سریع‌تر و دقیق‌تر انجام شود.",
    },
    {
      question:
        "آیا فرایند eKYC نیاز به اپراتور یا تماس با مرکز پشتیبانی دارد؟",
      answer:
        "خیر، فرایند eKYC به‌صورت کاملاً خودکار انجام می‌شود و نیازی به دخالت اپراتور انسانی یا تماس با مرکز پشتیبانی نیست. هوش مصنوعی و سیستم‌های تمام اتوماتیک لوانت،  تمامی مراحل تایید هویت را مدیریت می‌کنند و نتیجه نهایی را به سرعت اعلام می‌کند.",
    },
    {
      question:
        "چگونه می‌توانم فرایند احراز هویت ویدیویی را در سیستم خود ادغام کنم؟",
      answer:
        "ما یک رابط کاربری آسان (API) و مستندات جامع برای ادغام سریع و بی‌ دردسر خدمات احراز هویت ویدیویی در هر پلتفرمی ارائه می‌دهیم. تیم فنی ما نیز آماده است تا در تمامی مراحل، از نصب و راه‌اندازی تا پشتیبانی، شما را همراهی کند.",
    },
    {
      question:
        "آیا احراز هویت ویدیویی با سایر روش‌های احراز هویت مانند احراز هویت مبتنی بر اسناد قابل ترکیب است؟",
      answer:
        "بله، احراز هویت آنلاین لوانت می‌تواند به عنوان یک لایه امنیتی اضافی بر روی سایر روش‌های احراز هویت استفاده شود تا سطح امنیت را افزایش دهد. ",
    },
    {
      question:
        "آیا فناوری احراز هویت ویدیویی قادر است تغییرات ظاهری افراد را تشخیص دهد؟",
      answer:
        "بله، الگوریتم‌های هوش مصنوعی به گونه‌ای طراحی شده‌اند که تغییرات ظاهری مانند مدل مو یا تغییرات سن را تشخیص داده و همچنان هویت فرد را احراز می کنند. همچنین سیستم قادر به شناسایی ویژگی‌های پایدار چهره مانند فاصله بین چشم‌ها یا ساختار صورت است.",
    },
  ];

  // Toggles the visibility of the answer
  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="FAQ">
      <h2
        className="section-title"
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        سوالات متداول
      </h2>
      <h3
        className="section-subtitle"
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        سوالات رایج درباره احراز هویت ویدیویی برای شما گردآوری شده است. در صورت
        وجود ابهام، لطفا با ما تماس بگیرد.{" "}
      </h3>
      <div
        className="qa-container"
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        <div className="qa-left">
          {questions.slice(0, 5).map((item, index) => (
            <div
              className="qa-item"
              key={index}
              onClick={() => toggleAnswer(index)}
            >
              <div
                className={`qa-question ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                {item.question}
                <span className="qa-icon">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>

              <div
                className={
                  index === activeIndex ? "content content-open" : "content"
                }
              >
                <div
                  className={
                    index === activeIndex
                      ? "content-text content-text-open"
                      : "content-text"
                  }
                >
                  {" "}
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="qa-right">
          {questions.slice(5).map((item, index) => (
            <div
              className="qa-item"
              key={index + 5}
              onClick={() => toggleAnswer(index + 5)}
            >
              <div
                className={`qa-question ${
                  activeIndex === index + 5 ? "active" : ""
                }`}
              >
                {item.question}
                <span className="qa-icon">
                  {activeIndex === index + 5 ? "-" : "+"}
                </span>
              </div>

              <div
                className={
                  index + 5 === activeIndex ? "content content-open" : "content"
                }
              >
                <div
                  className={
                    index + 5 === activeIndex
                      ? "content-text content-text-open"
                      : "content-text"
                  }
                >
                  {" "}
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommonQuestions;
