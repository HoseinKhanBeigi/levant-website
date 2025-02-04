import React from "react";
import { Button } from "../widgets";

interface NoticeBoxProps {
  onClick: () => void;
}

function NoticeBox({ onClick }: NoticeBoxProps) {
  return (
    <div className="notice">
      <span className="title" style={{ textAlign: "right" }}>
        شما می‌توانید برای دریافت اطلاعات بیشتر و خرید این سرویس از کارشناسان ما
        کمک بگیرید.
      </span>
      <Button type="primary" onClick={onClick}>
        مشاوره و خرید
      </Button>
    </div>
  );
}

export default NoticeBox;
