import React from "react";
import "./exhibitionPopup.scss";
import { usePopupLive, setCoockie } from "../../hook";
import Popup from "../modal/Modal";
import { Button, Input } from "../widgets";
import Typography from "../Typography/typography";
import logo from "../../../assets/images/logo.png";
import CheckBox from "../widgets/Checkbox/Checkbox";
interface ExhibitionPopupInterface {
  startDate: string;
  endDate: string;
  desc: string;
  nameLink: string;
  title: string;
  namebutton: string;
  href: string;
}
export default function ExhibitionPopup({
  startDate,
  endDate,
  desc,
  nameLink,
  title,
  namebutton,
  href,
}: ExhibitionPopupInterface) {
  const { isOpen, setIsOpen } = usePopupLive(startDate, endDate);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    if (e.target.checked) {
      setCoockie("popupExhibition", e.target.checked,endDate);
    }
  };

  return (
    <Popup isOpen={isOpen} maxWidth={"380px"}>
      <div className="contentBody">
        <div className="popupContainer">
          <img src={logo} width={100} />
        </div>

        <div className="popupContainer">
          <div className="content">
            <Typography mt={16}>{title}</Typography>
            <Typography
              mt={8}
              mb={8}
              lh={1.8}
              color="#9C1D56"
              fontSize={1.2}
              fontWeight={700}
            >
              {desc}
            </Typography>
            <Typography mt={8} mb={40} color="#9C1D56">
              (الکامپ)
            </Typography>
          </div>
        </div>

        <div className="popupContainer">
          <div className="content">
            <Typography mb={8} fontSize={0.7}>
              محل دائمی نمایشگاه‌های بین‌المللی تهران،<strong>سالن ۶</strong>،
              غرفه لوانت
            </Typography>
            <Typography mb={8} fontSize={0.7}>
              <strong>۴ تا ۷ تیر</strong>- ساعت ۸:۰۰ الی ۱۵:۰۰
            </Typography>

            <a target="_blank" href={href}>
              <Typography mb={32} fontSize={0.7} color="#0058ff">
                {nameLink}
              </Typography>
            </a>
          </div>
        </div>
        <div className="popupContainer">
          <CheckBox onChange={handleChange} label={"فقط یک بار نمایش دهد"} />
        </div>
        <div className="popupContainer">
          <Button
            onClick={handleClose}
            type="outlined"
            className="popupExibitionButton"
          >
            <span>{namebutton}</span>
          </Button>
        </div>
      </div>
    </Popup>
  );
}
