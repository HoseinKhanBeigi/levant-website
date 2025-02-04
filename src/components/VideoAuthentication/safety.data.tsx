import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
const safetyData = [
    {
        title: "گواهی‌نامه افتا",
        description: "وزارت ارتباطات و فناوری اطلاعات",
        link: 'https://sec.ito.gov.ir/',
        icon: (
            <StaticImage
                src="../../../assets/images/afta.png"
                alt="introduction"
                layout="fixed"
                className="aftaImage"
            />
        ),
    },
    {
        title: "مجوز صدور و تصدیق امضای دیجیتال",
        description: "وزارت صنعت معدن تجارت",
        link: 'https://www.mimt.gov.ir/fa/index.php',
        icon: (
            <StaticImage
                src="../../../assets/images/eSign.png"
                alt="introduction"
                layout="fixed"
                className="esignImage"
            />
        ),
    },
];

export default safetyData;