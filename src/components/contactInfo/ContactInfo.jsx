import React from "react";
import "./contactInfo.scss";
import Utils from "../../../lib/utils";

const ContactInfo = () => (
    <section className="contact-info" style={{marginTop: "0"}}>
        <h2 data-aos="fade-right" data-aos-duration="1000">
            تماس با ما
        </h2>
        <p className="contactDesc" data-aos="fade-right" data-aos-duration="1000">
            جهت دریافت اطلاعات بیشتر، مشاوره یا پشتیبانی، ما همیشه آماده پاسخگویی به
            شما هستیم. از طریق راه‌های ارتباطی زیر با ما تماس بگیرید تا بهترین
            راه‌حل‌ها را در اختیار شما قرار دهیم.
        </p>

        <div className="details-cards">
            <div className="card" data-aos="fade-up" data-aos-duration={1000}>
                <div className="card-title">
          <span role="img" aria-label="postal code">
            <svg
                fill="#005bfc"
                width="16px"
                height="16px"
                viewBox="0 0 50 50"
                version="1.2"
                baseProfile="tiny"
                xmlns="http://www.w3.org/2000/svg"
                overflow="inherit"
            >
              <path
                  d="M25 0c-8.284 0-15 6.656-15 14.866 0 8.211 15 35.135 15 35.135s15-26.924 15-35.135c0-8.21-6.716-14.866-15-14.866zm-.049 19.312c-2.557 0-4.629-2.055-4.629-4.588 0-2.535 2.072-4.589 4.629-4.589 2.559 0 4.631 2.054 4.631 4.589 0 2.533-2.072 4.588-4.631 4.588z"/>
            </svg>
          </span>{" "}
                    کد پستی
                </div>
                <div className="card-content">{Utils.toFarsiNumber(1514945435)} </div>
            </div>

            <div className="card" data-aos="fade-up" data-aos-duration={1500}>
                <div className="card-title">
          <span role="img" aria-label="address">
            <svg
                width="16px"
                height="16px"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill="#005bfc"
            >
              <path
                  d="M19.799 5.165l-2.375-1.83a1.997 1.997 0 0 0-.521-.237A2.035 2.035 0 0 0 16.336 3H9.5l.801 5h6.035c.164 0 .369-.037.566-.098s.387-.145.521-.236l2.375-1.832c.135-.091.202-.212.202-.334s-.067-.243-.201-.335zM8.5 1h-1a.5.5 0 0 0-.5.5V5H3.664c-.166 0-.37.037-.567.099-.198.06-.387.143-.521.236L.201 7.165C.066 7.256 0 7.378 0 7.5c0 .121.066.242.201.335l2.375 1.832c.134.091.323.175.521.235.197.061.401.098.567.098H7v8.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5z"/>
            </svg>
          </span>{" "}
                    آدرس
                </div>
                <div className="card-content">
                    تهران، میدان آرژانتین، خیابان الوند، پلاک ۱۹، طبقه ۵
                </div>
            </div>

            <div className="card" data-aos="fade-up" data-aos-duration={2000}>
                <div className="card-title">
          <span role="img" aria-label="email">
            <svg
                width="16px"
                height="16px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671 18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z"
                  fill="#005bfc"
              />
            </svg>
          </span>{" "}
                    ایمیل
                </div>
                <div className="card-content">support@levants.io</div>
            </div>

            <div className="card" data-aos="fade-up" data-aos-duration={2500}>
                <div className="card-title">
          <span role="img" aria-label="phone">
            <svg
                fill="#005bfc"
                width="16px"
                height="16px"
                viewBox="0 0 24 24"
                id="phone"
                data-name="Flat Color"
                xmlns="http://www.w3.org/2000/svg"
                className="icon flat-color"
            >
              <path
                  id="primary"
                  d="M20.19,13a10,10,0,0,1-3.43-.91,2,2,0,0,0-2.56.83l-.51.85a12.69,12.69,0,0,1-3.44-3.45l.86-.49a2,2,0,0,0,.83-2.56A10,10,0,0,1,11,3.81,2,2,0,0,0,9,2H5.13A3,3,0,0,0,2.86,3a3.13,3.13,0,0,0-.71,2.43A19,19,0,0,0,18.58,21.85a3,3,0,0,0,.42,0,3,3,0,0,0,2-.73,3,3,0,0,0,1-2.26V15A2,2,0,0,0,20.19,13Z"
                  style={{fill: "#005bfc"}}
              ></path>
            </svg>
          </span>{" "}
                    تلفن
                </div>
                <div className="card-content">۰۲۱-{Utils.toFarsiNumber(47183101)}</div>
            </div>
        </div>
    </section>
);

export default ContactInfo;
