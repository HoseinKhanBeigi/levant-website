// @ts-ignore
import React, {useEffect, useState} from "react";
import {Link} from "gatsby";
import "./introduction.scss";
import DemoRequest from "../demoRequest/DemoRequest";
import {Button} from "../widgets";
import heroImg from "../../../assets/images/heroSection.png";
import {StaticImage} from "gatsby-plugin-image";

export default function Introduction() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [contactLink, setContactLink] = useState("");

    useEffect(() => {
        const updateContactLink = () => {
            if (window.innerWidth <= 768) {
                setContactLink("tel:+982147180515");
            } else {
                setContactLink("/contactUs");
            }
        };

        updateContactLink();

        window.addEventListener("resize", updateContactLink);

        return () => {
            window.removeEventListener("resize", updateContactLink);
        };
    }, []);

    return (
        <>
            <div className="introContainer">
                <div className="introWrapper">
                    <div className="introWrapper_Container">
                        <div className="introContentWrapper">
                            <div className="introTitleSmall animate one">
                                <span>هوشمند</span>
                                <span>،</span> <span>ساده</span>
                                <span>،</span> <span>ایمن</span>
                            </div>
                            <div className="introTitle animate two">
                                <span> سرویس</span>&nbsp;
                                <span> احراز</span> <span>هویت</span> <span>ویدیویی</span>{" "}
                                <span>لوانت</span>
                            </div>
                            <div className="introSubTitle">
                                احراز هویت مشتریان خود را با لوانت مطمئن، سریع و مقرون به صرفه
                                انجام دهید.
                            </div>
                            <div
                                className="introBtnContainer"
                                data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-once="true"
                                data-aos-mirror="false"
                                data-aos-offset="-100"

                            >
                                <Button
                                    onClick={() => setIsPopupOpen(true)}
                                    type="primary"
                                    className="headerButton icon"
                                >
                                    <span>درخواست دمو</span>
                                </Button>
                                <Button type="secondary" className="headerButton icon">
                                    <Link to={"/contactUs"}>ارتباط با کارشناسان</Link>
                                </Button>
                            </div>
                        </div>
                        <img className="heroImage" src={heroImg}/>
                    </div>
                </div>
                <div className="heroNav" data-aos="fade-right" data-aos-mirror="false" data-aos-once="true"
                     data-aos-duration="1000">
                    <button className=" heroCard">
                        <StaticImage
                            src="../../../assets/images/recession.png"
                            alt="recession icon"
                            className="icon-placeholder"
                        />
                        <h5>مقرون به صرفه</h5>
                    </button>
                    <button className=" heroCard">
                        <StaticImage
                            src="../../../assets/images/pay-per-use.png"
                            alt="pay-per-click icon"
                            className="icon-placeholder"
                        />
                        <h5>پرداخت فقط به ازای احراز موفق</h5>
                    </button>
                    <button className=" heroCard">
                        <StaticImage
                            src="../../../assets/images/dashboard.png"
                            alt="admin-panel icon"
                            className="icon-placeholder"
                        />
                        <h5>پنل تحت وب گزارش دهی</h5>
                    </button>
                    <button className=" heroCard">
                        <StaticImage
                            src="../../../assets/images/support.png"
                            alt="support icon"
                            className="icon-placeholder"
                        />
                        <h5>پشتیبانی در تمام مراحل</h5>
                    </button>
                </div>
            </div>

            <DemoRequest isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}/>
        </>
    );
}
