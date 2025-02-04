import React, {useMemo, useRef, useState} from "react";
import Popup from "../modal/Modal";
import {Button, Input} from "../widgets";
import Utils from "../../../lib/utils";
import "./DemoRequest.scss";
import {toast} from "react-toastify";
import axios from "axios";

interface DemoRequestProps {
    isOpen: boolean;
    onClose: () => void;
    subject?: string;
    title?: string;
}

export default function DemoRequest({
                                        isOpen,
                                        onClose,
                                        subject,
                                        title,
                                    }: DemoRequestProps) {
    const form = useRef();
    const [formData, setFormData] = useState({
        fullName: "",
        mobile: "",
        email: "",
        companyName: "",
        position: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const validate = () => {
        const convertToLatin = (num) => {
            return num
                .replace(/[۰-۹]/g, (digit) => "۰۱۲۳۴۵۶۷۸۹".indexOf(digit)) // Persian
                .replace(/[٠-٩]/g, (digit) => "٠١٢٣٤٥٦٧٨٩".indexOf(digit)); // Arabic
        };
        const newErrors = {};
        const mobile = convertToLatin(formData.mobile);

        if (!formData.fullName) {
            newErrors.fullName = "نام و نام خانوادگی الزامی است.";
        }

        if (!formData.email) {
            newErrors.email = "ایمیل الزامی است.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "ایمیل معتبر نیست.";
        }

        if (!formData.mobile) {
            newErrors.mobile = " موبایل الزامی است.";
        } else if (!/^09[0-9]{9}$/.test(mobile)) {
            newErrors.mobile = "شماره موبایل معتبر نیست.";
        }

        return newErrors;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const message = `{"name": ${formData?.fullName},"email": "${formData.email}","phone": ${formData?.mobile},"message": "${formData?.position}-${formData?.companyName}"}`


        setErrors({});
        setIsSubmitting(true);

        axios.post('https://uat.kian.digital/api-proxy/v1/open/request/demo-site', {
            message: message
        })
            .then(function () {
                setIsSubmitting(false);
                toast.success("درخواست شما با موفقیت ارسال شد!", {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    rtl: true,
                    className: "custom-toast",
                    onClose: () => onClose(),
                });
                setFormData({
                    fullName: "",
                    email: "",
                    mobile: "",
                    companyName: "",
                    position: "",
                });
            })
            .catch(function (error) {
                setIsSubmitting(false);
                toast.error("خطایی رخ داده است .لطفا دوباره تلاش کنید.", {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    rtl: true,
                    className: "custom-error-toast",
                });
            });

        //
        // emailjs
        //     .send(
        //         "service_86jdpsq", // Replace with your EmailJS Service ID
        //         // "service_2g2of2f",
        //         "template_wy3op55", // Replace with your EmailJS Template ID
        //         // "template_2kot8np",
        //         {
        //             name: formData?.fullName,
        //             email: formData?.email,
        //             phone: formData?.mobile,
        //             message: `سمت:${formData?.position}-نام شرکت :${formData?.companyName}`,
        //         },
        //         {
        //             publicKey: "zzQk9kAIPPVxBTmma",
        //             // publicKey: "vmxgbUnOIh5DPH015",
        //         }
        //     )
        //     .then(
        //         (response) => {
        //             setIsSubmitting(false);
        //             toast.success("درخواست شما با موفقیت ارسال شد!", {
        //                 position: "bottom-right",
        //                 autoClose: 3000,
        //                 hideProgressBar: false,
        //                 closeOnClick: true,
        //                 pauseOnHover: true,
        //                 draggable: true,
        //                 rtl: true,
        //                 className: "custom-toast",
        //                 onClose: () => onClose(),
        //             });
        //             setFormData({
        //                 fullName: "",
        //                 email: "",
        //                 mobile: "",
        //                 companyName: "",
        //                 position: "",
        //             });
        //         },
        //         (error) => {
        //             setIsSubmitting(false);
        //             toast.error("خطایی رخ داده است .لطفا دوباره تلاش کنید.", {
        //                 position: "bottom-right",
        //                 autoClose: 3000,
        //                 hideProgressBar: false,
        //                 closeOnClick: true,
        //                 pauseOnHover: true,
        //                 draggable: true,
        //                 rtl: true,
        //                 className: "custom-error-toast",
        //             });
        //         }
        //     );
        // try {
        //     const response = await fetch("/.netlify/functions/sendEmail", {
        //         method: "POST",
        //         headers: {"Content-Type": "application/json"},
        //         body: JSON.stringify({
        //             name: formData?.fullName,
        //             email: formData?.email,
        //             phone: formData?.mobile,
        //             message: `سمت:${formData?.position}-نام شرکت :${formData?.companyName}`,
        //         },),
        //     });
        //
        //     if (response.ok) {
        //         setIsSubmitting(false);
        //         toast.success("درخواست شما با موفقیت ارسال شد!", {
        //             position: "bottom-right",
        //             autoClose: 3000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             rtl: true,
        //             className: "custom-toast",
        //             onClose: () => onClose(),
        //         });
        //         setFormData({
        //             fullName: "",
        //             email: "",
        //             mobile: "",
        //             companyName: "",
        //             position: "",
        //         });
        //     } else {
        //         setIsSubmitting(false);
        //         toast.error("خطایی رخ داده است .لطفا دوباره تلاش کنید.", {
        //             position: "bottom-right",
        //             autoClose: 3000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             rtl: true,
        //             className: "custom-error-toast",
        //         });
        //     }
        // } catch (error) {
        //     console.error("Error:", error);
        //     setIsSubmitting(false);
        //     toast.error("خطایی رخ داده است .لطفا دوباره تلاش کنید.", {
        //         position: "bottom-right",
        //         autoClose: 3000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         rtl: true,
        //         className: "custom-error-toast",
        //     });
        // }
    };

    const header = useMemo(
        () => (
            <div className="titleWrapper" style={{}}>
                <span className="icon-demoRequest"/>
                <span>{title || "درخواست دمو"}</span>
            </div>
        ),
        [title]
    );
    return (
        <Popup onClose={onClose} isOpen={isOpen} title={header}>
            <form ref={form} className="demoRequestBody">
                <div>
                    <div className="demoRequestRow">
                        <div className="inputWrapper">
                            <Input
                                label={"نام و نام‌خانوادگی"}
                                name="fullName"
                                value={formData?.fullName}
                                onChange={(e) => handleChange(e)}
                                placeholder={" علی علیپور"}
                                Error={errors?.fullName}
                            />
                        </div>
                        <div className="inputWrapper">
                            <Input
                                label={"نام سازمان یا شرکت"}
                                value={formData?.companyName}
                                name="companyName"
                                onChange={handleChange}
                                placeholder={" بانک اقتصاد نوین"}
                            />
                        </div>
                    </div>
                    <div className="demoRequestRow">
                        <div className="inputWrapper">
                            <Input
                                label={"سمت شما"}
                                value={formData?.position}
                                onChange={handleChange}
                                name="position"
                                placeholder={" مدیرعامل"}
                            />
                        </div>
                        <div className="inputWrapper">
                            <Input
                                label={"آدرس ایمیل"}
                                value={formData?.email}
                                onChange={handleChange}
                                placeholder={" abc@gmail.com"}
                                Error={errors?.email}
                                name="email"
                            />
                        </div>
                    </div>
                    <div className="demoRequestRow">
                        <div className="inputWrapper">
                            <Input
                                label={"شماره تلفن همراه"}
                                value={formData.mobile}
                                onChange={handleChange}
                                placeholder={" ۰۹۱۲۰۰۰۰۰۰۰"}
                                Error={errors?.mobile}
                                name="mobile"
                            />
                        </div>
                        <div className="inputWrapper">
                            {!Utils.isEmptyString(subject) && (
                                <Input
                                    label={"موضوع"}
                                    disabled={!Utils.isEmptyString(subject)}
                                    value={subject}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className="popupFooter">
                    <Button
                        onClick={handleSubmit}
                        type="primary"
                        className={"submitDemo"}
                    >
                        ارسال
                    </Button>
                    <Button onClick={onClose} type="secondary" className={"cancelDemo"}>
                        بازگشت
                    </Button>
                </div>
            </form>
        </Popup>
    );
}
