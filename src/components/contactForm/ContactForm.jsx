import React, { useRef, useState } from "react";
import "./contactForm.scss";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios";

const ContactForm = () => {
  const form = useRef();
  const [responseMessage, setResponseMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    const convertToLatin = (num) => {
      return num
        .replace(/[۰-۹]/g, (digit) => "۰۱۲۳۴۵۶۷۸۹".indexOf(digit)) // Persian
        .replace(/[٠-٩]/g, (digit) => "٠١٢٣٤٥٦٧٨٩".indexOf(digit)); // Arabic
    };

    const phone = convertToLatin(formData.phone);

    if (!formData.name) {
      newErrors.name = "نام و نام خانوادگی الزامی است.";
    }

    if (!formData.email) {
      newErrors.email = "ایمیل الزامی است.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "ایمیل معتبر نیست.";
    }

    if (!formData.phone) {
      newErrors.phone = " موبایل الزامی است.";
    } else if (!/^09[0-9]{9}$/.test(phone)) {
      newErrors.phone = "شماره موبایل معتبر نیست.";
    }

    if (!formData.message) {
      newErrors.message = "پیام شما الزامی است.";
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
    const apiBaseUrl = "https://web.sit.levants.io"; // Force HTTPS

    const response = await fetch(`/api/send-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    await response.json();

    const message = `{name: ${formData?.name},email: ${formData?.email},phone: ${formData?.phone},message: ${formData?.message}}`;
    if (message.length > 1024) {
      toast.error("متن پیام شما بسیار بلند است لطفا پیام خود را ویرایش کنید.", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        rtl: true,
        className: "custom-error-toast",
      });
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    axios
      .post("https://uat.kian.digital/api-proxy/v1/open/request/demo-site", {
        message: message,
      })
      .then(function () {
        setIsSubmitting(false);
        toast.success("پیام شما با موفقیت ارسال شد!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          rtl: true,
          className: "custom-toast",
          onClose: () =>
            setFormData({ name: "", email: "", phone: "", message: "" }),
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
  };

  return (
    <div
      className="contact-form"
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <div style={{ height: "20%" }}>
        <h3>ارتباط با ما</h3>
        <p>در هر زمانی با ما در تماس باشید</p>
      </div>
      <form
        ref={form}
        style={{ height: "81%", justifyContent: "space-between" }}
      >
        <div>
          <div className="form-group fullName">
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              name="name"
              value={formData?.name}
              onChange={handleChange}
            />
            {errors?.name && (
              <span style={{ color: "red", fontSize: "0.8rem" }}>
                {errors?.name}
              </span>
            )}
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <div className="form-group">
              <input
                name="phone"
                type="tel"
                placeholder="شماره موبایل"
                value={formData?.phone}
                onChange={handleChange}
              />
              {errors?.phone && (
                <span style={{ color: "red", fontSize: "0.8rem" }}>
                  {errors?.phone}
                </span>
              )}
            </div>
            <div className="form-group">
              <input
                name="email"
                type="email"
                placeholder="ایمیل"
                value={formData?.email}
                onChange={handleChange}
              />
              {errors?.email && (
                <span style={{ color: "red", fontSize: "0.8rem" }}>
                  {errors?.email}
                </span>
              )}
            </div>
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="پیام شما"
              value={formData?.message}
              onChange={handleChange}
            ></textarea>
            {errors?.message && (
              <span style={{ color: "red", fontSize: "0.8rem" }}>
                {errors?.message}
              </span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="submit-btn"
          onClick={(event) => handleSubmit(event)}
        >
          ارسال پیام
        </button>
      </form>
      {/* <ToastContainer/> */}
    </div>
  );
};

export default ContactForm;
