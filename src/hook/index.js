import { useEffect, useState, useCallback } from "react";

export const useDay = () => {
  const [currentDay, setCurrentDay] = useState("");
  const getDate = useCallback(() => {
    const cur_date = new Date();
    const day = cur_date.getDate();
    setCurrentDay(day);
  }, []);

  useEffect(() => {
    const run = setInterval(getDate, 1000);
    return () => clearInterval(run);
  }, []);

  return {
    currentDay,
  };
};

export const usePopupLive = (start, end) => {
  const { currentDay } = useDay();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const { closePopup } = checkCookie("popupExhibition");

    const calculatePopupLive = () => {
      const startDay = new Date(start).getDate();
      const endDay = new Date(end).getDate();
      if (currentDay <= endDay && currentDay >= startDay) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    calculatePopupLive();
    if (closePopup) {
      setIsOpen(false);
    }
  }, [currentDay]);
  return {
    isOpen,
    setIsOpen,
  };
};

export const setCoockie = (cookieName, cookieValue, cookieExpire) => {
  const daysToExpire = new Date(cookieExpire).toUTCString();
  document.cookie =
    cookieName + "=" + cookieValue + "; expires=" + daysToExpire;
};

export const getCookie = (cname) => {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export const checkCookie = (name) => {
  let closePopup = getCookie(name);
  return {
    closePopup,
  };
};
