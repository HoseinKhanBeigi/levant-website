import React, { useEffect } from "react";
import Modal from "react-modal";
import "./Modal.scss";
import Button from "../widgets/Button/Button";
interface PopupInterface {
  children: any;
  onClose?: () => void;
  isOpen: boolean;
  title?: any;
  maxWidth?: string;
}
const customStyles = (maxWidth: string) => ({
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: maxWidth,
    // maxHeight: "490px",
    width: "100%",
    borderRadius: "12px",
    padding: "0px",
    boxShadow: "0 24px 42px 0 rgba(0, 0, 0, 0.16)",
    backgroundColor: " #fff",
  },
  overlay: {
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(0, 19, 51, 0.2)",
    zIndex: 4,
  },
});

export default function Popup({
  children,
  onClose,
  isOpen,
  title,
  maxWidth = "680px",
}: PopupInterface) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isOpen]);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles(maxWidth)}
      contentLabel="globalModal"
    >
      {title && (
        <div className="modal-header">
          {title}
          <Button onClick={onClose} type="link">
            <span className="icon-cancel" />
          </Button>
        </div>
      )}

      {children}
    </Modal>
  );
}
