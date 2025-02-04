import React, { useEffect, useMemo, useRef, useState } from "react";
import "./quate.scss";
import { StaticImage } from "gatsby-plugin-image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const People = [
  {
    quote:
      "لوانت یک سامانه هوشمند چندکاره هست که طیف وسیعی از نیازهایتان رو یکجا در اختیارتان میگذره، سامانه های ارتباط با مشتریان ، احراز هویت ، اعتبار سنجی و...  در اختیارتون هست و به طور قابل ملاحظه ای سرعت ،دقت و کارآمدی رو بالا میبره و هزینه هاتون رو در کسب کارتون کا هش میده.",
    name: "جناب آقای رضا قزی پور",
    role: "مدیر عامل واسپاری کیان",
    image: (
      <StaticImage
        width={80}
        height={80}
        src="../../../assets/images/ghezipour.png"
      />
    ),
    rating: 5,
    title: "کیفیت محصول",
  },
  {
    quote:
      "لوانت یک محصول احراز هویت مبتنی بر هوش مصنوعی در رده جهانی هست که هم برای کاربران نهایت سادگی و امنیت رو داره و مهمتر از اون برای نهادهایی که از محصول استفاده می کنند امکانات و گزارش های خیلی با اهمیتی ارائه میده که من در تعداد خیلی کمی از محصولات این حجم از دقت به جزئیات رو دیدم.",
    name: "جناب آقای نیما امیرشکاری",
    role: "مشاور اقتصاد دیجیتال",
    image: (
      <StaticImage
        width={80}
        height={80}
        src="../../../assets/images/shekari.png"
      />
    ),
    rating: 5,
    title: "کیفیت محصول",
  },
  {
    quote:
      "مجموعه لوانت، یک مجموعه منظم، پاسخگو، مسئولیت‌پذیر با نیروهای جوان و متعهد که افتخار همکاری و همراهی را در بسیاری از پروژه‌های مشترک با ایران‌ساین با هم داشتیم.",
    name: "جناب آقای دکتر سید امیر اصغری",
    role: " مدیرعامل شرکت ایران‌ساین",
    image: (
      <StaticImage
        width={80}
        height={80}
        src="../../../assets/images/asghari.png"
      />
    ),
    rating: 5,
    title: "پشتیبانی",
  },
  {
    quote:
      "استفاده از سرویس احراز هویت ویدیویی لوانت برای کسب‌ وکار ما یک گام مهم در جهت افزایش امنیت و ساده سازی فرایندهای احراز هویت مشتریانمان بوده است. لوانت با سرعت و دقت بالا، مشتریان ما را احراز هویت می نماید و زمان انتظار برای تایید کاربران جدید را به‌ طرز قابل توجهی کاهش داده است.",
    name: "جناب آقای مهرداد رجبی",
    role: "مشاور اقتصاد دیجیتال",
    image: (
      <StaticImage
        width={80}
        height={80}
        src="../../../assets/images/rajabi.jpg"
      />
    ),
    title: "بهره‌وری",
    rating: 5,
  },
  {
    quote:
      "لوانت یک سامانه هوشمند چندکاره هست که طیف وسیعی از نیازهایتان رو یکجا در اختیارتان میگذره، سامانه های ارتباط با مشتریان ، احراز هویت ، اعتبار سنجی و...  در اختیارتون هست و به طور قابل ملاحظه ای سرعت ،دقت و کارآمدی رو بالا میبره و هزینه هاتون رو در کسب کارتون کا هش میده.",
    name: "جناب آقای رضا قزی پور",
    role: "مدیر عامل واسپاری کیان",
    image: (
      <StaticImage
        width={80}
        height={80}
        src="../../../assets/images/ghezipour.png"
      />
    ),
    rating: 5,
    title: "کیفیت محصول",
  },
  {
    quote:
      "لوانت یک محصول احراز هویت مبتنی بر هوش مصنوعی در رده جهانی هست که هم برای کاربران نهایت سادگی و امنیت رو داره و مهمتر از اون برای نهادهایی که از محصول استفاده می کنند امکانات و گزارش های خیلی با اهمیتی ارائه میده که من در تعداد خیلی کمی از محصولات این حجم از دقت به جزئیات رو دیدم.",
    name: "جناب آقای نیما امیرشکاری",
    role: "مشاور اقتصاد دیجیتال",
    image: (
      <StaticImage
        width={80}
        height={80}
        src="../../../assets/images/shekari.png"
      />
    ),
    rating: 5,
    title: "کیفیت محصول",
  },
  {
    quote:
      "مجموعه لوانت، یک مجموعه منظم، پاسخگو، مسئولیت‌پذیر با نیروهای جوان و متعهد که افتخار همکاری و همراهی را در بسیاری از پروژه‌های مشترک با ایران‌ساین با هم داشتیم.",
    name: "جناب آقای دکتر سید امیر اصغری",
    role: " مدیرعامل شرکت ایران‌ساین",
    image: (
      <StaticImage
        width={80}
        height={80}
        src="../../../assets/images/asghari.png"
      />
    ),
    rating: 5,
    title: "پشتیبانی",
  },
  {
    quote:
      "استفاده از سرویس احراز هویت ویدیویی لوانت برای کسب‌ وکار ما یک گام مهم در جهت افزایش امنیت و ساده سازی فرایندهای احراز هویت مشتریانمان بوده است. لوانت با سرعت و دقت بالا، مشتریان ما را احراز هویت می نماید و زمان انتظار برای تایید کاربران جدید را به‌ طرز قابل توجهی کاهش داده است.",
    name: "جناب آقای مهرداد رجبی",
    role: "مشاور اقتصاد دیجیتال",
    image: (
      <StaticImage
        width={80}
        height={80}
        src="../../../assets/images/rajabi.jpg"
      />
    ),
    title: "بهره‌وری",
    rating: 5,
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);
  // const handleInteraction = () => {
  //     if (swiperRef.current && swiperRef.current.swiper) {
  //         swiperRef.current.swiper.autoplay.stop();
  //     }
  // };

  // Restart autoplay when mouse leaves the swiper
  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  // Optional: Add hover/interaction logic for better UX
  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  useEffect(() => {
    // Initialize isMobile state based on the initial window width
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    updateIsMobile();

    window.addEventListener("resize", updateIsMobile);

    return () => window.removeEventListener("resize", updateIsMobile);
  }, [isMobile]);

  useEffect(() => {
    const interval = setInterval(() => {
      showNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  function showNext() {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % People.length);
  }

  function showPrev() {
    setCurrentIndex((currentIndex - 1 + People.length) % People.length);
  }

  function child(index, active) {
    return (
      <div className={`testimonial-card testimonial ${active ? "active" : ""}`}>
        <div className="testimonial-content">
          <p className="testimonial-text">{People[index]?.quote} </p>
          <div className="product-quality">
            <span>{People[index]?.title}</span>
            <div className="stars">
              {[...Array(People[index]?.rating)].map((_, i) => (
                <span key={i} className="star">
                  <svg
                    height="200px"
                    width="200px"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 47.94 47.94"
                    xmlSpace="preserve"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        style={{ fill: "#FFDA44" }}
                        d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"
                      ></path>{" "}
                    </g>
                  </svg>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="user-info">
          <StaticImage src="./logos/3m.svg" />
          <div className="user-details">
            <p className="user-name">{People[index]?.name}</p>
            <p className="user-title">{People[index]?.role}</p>
          </div>
        </div>
      </div>
    );
  }

  const childRender = useMemo(() => {
    const nextIndex = (currentIndex - 1 + People.length) % People.length;
    const prevIndex = (currentIndex + 1) % People.length;

    if (isMobile) {
      return child(currentIndex, true);
    } else {
      return (
        <>
          {child(prevIndex, false)}
          {child(currentIndex, true)}
          {child(nextIndex, false)}
        </>
      );
    }
  }, [currentIndex]);

  return (
    <section className="testimonialSection">
      <h2
        className="section-title "
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        آنچه درباره لوانت می‌گویند
      </h2>
      <h3
        className="section-subtitle"
        data-aos="fade-right"
        data-aos-duration="3000"
        style={{ marginBottom: "4rem" }}
      >
        در لوانت، به این افتخار می‌کنیم که خدمات ما به موفقیت کسب‌وکار
        مشتریان‌مان کمک می‌کند. این بازخوردها انگیزه‌ ما را برای ادامه مسیر ارزش
        آفرینی و توسعه چند برابر می‌کند.
      </h3>
      <div className="carousel-container">
        <Swiper
          dir="ltr"
          centeredSlides={true}
          ref={swiperRef}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          loopFillGroupWithBlank={true}
          className="mySwiper"
          coverflowEffect={{
            backgroundColor: "red",
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            700: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1028: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {People.map((person) => (
            <SwiperSlide
              className="swiper-slide"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="quote-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5547 3.16796C6.01423 3.47432 6.1384 4.09519 5.83205 4.55471L2.86852 9.00001H8C9.65685 9.00001 11 10.3432 11 12V18C11 19.6569 9.65685 21 8 21H3C1.34315 21 0 19.6569 0 18V10.6056C0 10.2957 0.0479966 9.98941 0.140814 9.69724C0.225396 9.431 0.347211 9.17642 0.503849 8.94147L4.16795 3.44531C4.4743 2.98579 5.09517 2.86161 5.5547 3.16796ZM2 11V18C2 18.5523 2.44772 19 3 19H8C8.55228 19 9 18.5523 9 18V12C9 11.4477 8.55228 11 8 11H2ZM18.5547 3.16796C19.0142 3.47432 19.1384 4.09519 18.8321 4.55471L15.8685 9.00001H21C22.6569 9.00001 24 10.3432 24 12V18C24 19.6569 22.6569 21 21 21H16C14.3431 21 13 19.6569 13 18V10.6056C13 10.2957 13.048 9.98941 13.1408 9.69724C13.2254 9.431 13.3472 9.17642 13.5038 8.94147L17.1679 3.44531C17.4743 2.98579 18.0952 2.86161 18.5547 3.16796ZM15 11V18C15 18.5523 15.4477 19 16 19H21C21.5523 19 22 18.5523 22 18V12C22 11.4477 21.5523 11 21 11H15Z"
                    fill="#d3d8e0"
                    id="id_101"
                  />
                </svg>
              </div>

              <div className={`testimonial-card testimonial `}>
                <div className="testimonial-content">
                  <p className="testimonial-text">{person.quote} </p>
                  <div className="product-quality">
                    <span>{person.title}</span>
                    <div className="stars">
                      {[...Array(person.rating)].map((_, i) => (
                        <span key={i} className="star">
                          <svg
                            height="200px"
                            width="200px"
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 47.94 47.94"
                            xmlSpace="preserve"
                            fill="#000000"
                          >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              strokLinecap="round"
                              strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path
                                style={{ fill: "#FFDA44" }}
                                d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"
                              ></path>{" "}
                            </g>
                          </svg>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="user-info">
                  <div>{person.image}</div>
                  <div className="user-details">
                    <p className="user-name">{person.name}</p>
                    <p className="user-title">{person.role}</p>
                  </div>
                </div>
              </div>
              {/*</div>*/}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
