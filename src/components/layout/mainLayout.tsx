import React, { FC, useEffect, useRef, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import GoTop from "../GoToTop/goToTop";
import { ToastContainer } from "react-toastify";

interface MainLayoutProps {
  children: React.ReactNode; // More precise type than `any`
}

const Layout: FC<MainLayoutProps> = ({ children }) => {
  // We specify the type for the ref so we can use it safely in scrollIntoView
  const refScrollUp = useRef<HTMLDivElement>(null);

  // Removed the scrollPosition state since we only really need the window.pageYOffset inside our scroll handler
  // to decide whether to show or hide the goTop button.
  // If you need the scroll value for something else, you can keep it,
  // but make sure to handle it correctly (e.g., by reading the position inside the same function that sets it).
  const [showGoTop, setShowGoTop] = useState("goTopHidden");

  useEffect(() => {
    const handleVisibleButton = () => {
      const position = window.pageYOffset;
      if (position > 300) {
        setShowGoTop("goTop");
      } else {
        setShowGoTop("goTopHidden");
      }
    };

    // Attach the scroll event when the component mounts
    window.addEventListener("scroll", handleVisibleButton);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleVisibleButton);
    };
  }, []);

  const handleScrollUp = () => {
    // Using optional chaining `?.` just in case the ref is null at the time of calling
    refScrollUp.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mainLayout">
      <Header />
      {/* We place the reference div here to scroll back to */}
      <div ref={refScrollUp}></div>
      {children}
      <GoTop showGoTop={showGoTop} scrollUp={handleScrollUp} />
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default Layout;
