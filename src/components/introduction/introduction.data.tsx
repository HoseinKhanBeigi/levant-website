import React from "react";
import { StaticImage } from "gatsby-plugin-image";

// just arrays with two items
const introductionData = [
    {
      icon: (
        <StaticImage
          src="../../../assets/images/bankers.png"
          width={150}
          height={120}
          alt="introduction"
          layout="fixed"
          className="productImage"
        />
      ),
      title: "تشخیص زنده بودن",
      titleEn: "(Liveness Detection)",
      description:
        "تشخیص زنده بودن اطمینان حاصل می‌کند که فردی که  به صورت آنلاین در حال ثبت نام و احراز هویت است یک انسان واقعی است.",
      link: "/solutions/banks",
    },
    {
      icon: (
        <StaticImage
            src="../../../assets/images/bankers.png"
          width={150}
            height={120}
          alt="introduction"
          layout="fixed"
          className="cryptoImage"
        />
      ),
      title: "پیشگیری از تقلب",
      titleEn: "(Fraud Prevention)",
      description:
        "ین فناوری به دنبال شناسایی و جلوگیری از هرگونه تلاش برای فریب سیستم احراز هویت است و اطمینان حاصل می‌کند که این فرد همان کسی است که ادعا می‌کند و از هویت دزدیده شده استفاده نمی‌کند.",
      link: "/solutions/exchange",
    },
    {
      icon: (
        <StaticImage
            src="../../../assets/images/bankers.png"
          width={150}
            height={120}
          alt="introduction"
          layout="fixed"
          className="productImage"
        />
      ),
      title: "تشخیص چهره",
      titleEn: "(Face Recognition)",
      description:
        "فناوری پیشرفته‌ای است که با استفاده از هوش مصنوعی، ویژگی‌های منحصر به فرد صورت را شناسایی و تحلیل می‌کند.",
      link: "/solutions/financialOrgs",
    },
    {
      icon: (
        <StaticImage
            src="../../../assets/images/bankers.png"
          width={150}
            height={120}
          alt="introduction"
          layout="fixed"
          className="fintechImage"
        />
      ),
      title: "تشخیص دیپفیک",
      titleEn: "(Deepfake Detection)",
      description:
        "از الگوریتم‌های پیشرفته هوش مصنوعی برای شناسایی ویدیوهای جعلی که با نرم افزار ساخته و دستکاری شده است استفاده می‌کند. ",
      link: "/solutions/fintech",
    }
];

export default introductionData;
