// @ts-ignore
import React, {useEffect, useMemo, useRef, useState} from "react";
import {Link, navigate} from "gatsby";
import "./layout.scss";
import DropDownMenu from "../dropDownMenu/DropDownMenu";
import {Button} from "../widgets";
import AlvanLogo from "../../../assets/icons/alvanLogo";
import DemoRequest from "../demoRequest/DemoRequest";
import {PRODUCT_ROUTES} from "./routes";
import SidebarMenu from "./sidebarMenu";
import {useLocation} from "@reach/router";

export default function Header() {
    const [isOpenProductList, setIsOpenProductList] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isOpenSideBar, setIsOpenSideBar] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    const handleLogoClick = () => {
        if (location.pathname === "/") {
            // Refresh the main page
            window.location.reload();
        } else {
            // Navigate to the main page
            navigate("/");
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target as Node)
            ) {
                setIsOpenSideBar(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpenProductList(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    function toggleDropDown(menu: string, state: boolean) {
        if (menu === "products") {
            setIsOpenProductList(state);
        }
    }

    const menuRender = useMemo(
        () =>
            isOpenSideBar && (
                <div ref={sidebarRef}>
                    <SidebarMenu setIsOpenSideBar={setIsOpenSideBar}/>
                </div>
            ),
        [isOpenSideBar]
    );

    return (
        <>
            <div className="headerContainer">
                <div className="headerWrapper">
                    <button
                        className="link menuButton"
                        onClick={() => setIsOpenSideBar(!isOpenSideBar)}
                    >
                        {isOpenSideBar ? (
                            <span className="icon-remove"></span>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="48"
                                height="48"
                                viewBox="0 0 32 32"
                                data-name="hamburgerButton"
                                style={{fill: "#eaedf2", transform: "scale(0.8)"}}
                            >
                                <g data-name="Group 3848" transform="translate(-272 -102)">
                                    <rect
                                        data-name="Rectangle 2008"
                                        width="32"
                                        height="32"
                                        rx="5"
                                        transform="translate(272 102)"
                                        fill="#e3e9f2"
                                        opacity=".5"
                                    ></rect>
                                    <g data-name="Group 3847">
                                        <path
                                            data-name="Path 25608"
                                            d="M3 7h18"
                                            fill="none"
                                            stroke="#001333"
                                            strokeLinecap="round"
                                            strokeWidth="2px"
                                            transform="translate(276 106)"
                                        ></path>
                                        <path
                                            data-name="Path 25609"
                                            d="M3 12h18"
                                            fill="none"
                                            stroke="#001333"
                                            strokeLinecap="round"
                                            strokeWidth="2px"
                                            transform="translate(276 106)"
                                        ></path>
                                        <path
                                            data-name="Path 25610"
                                            d="M3 17h18"
                                            fill="none"
                                            stroke="#001333"
                                            strokeLinecap="round"
                                            strokeWidth="2px"
                                            transform="translate(276 106)"
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                        )}
                    </button>
                    <button
                        style={{cursor: "pointer"}}
                        onClick={handleLogoClick}
                        className="alvanButton mobilesize"
                    >
                        <AlvanLogo/>
                    </button>
                    <div className="menuContainer">
                        <button
                            style={{cursor: "pointer"}}
                            onClick={handleLogoClick}
                            className="alvanButton"
                        >
                            <AlvanLogo/>
                        </button>
                        <nav className="menuWrapper stroke ">
                            <ul>
                                <li>
                                    <DropDownMenu
                                        menuSchema={PRODUCT_ROUTES}
                                        menuRef={menuRef}
                                        title={"محصولات"}
                                        isListOpen={isOpenProductList}
                                        onClick={() =>
                                            toggleDropDown("products", !isOpenProductList)
                                        }
                                        onHover={(e) => {
                                            toggleDropDown("products", !isOpenProductList);
                                        }}
                                        onMouseLeave={() => toggleDropDown("products", false)}
                                        onBlur={() => toggleDropDown("products", false)}
                                    />
                                </li>
                                <li>
                                    <Link to={"/aboutUs"} className="dropDownContainer">
                                        <div className="dropDownTitleContainer">
                                            <div className="dropDownTitle">درباره ما</div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/contactUs"} className="dropDownContainer">
                                        <div className="dropDownTitleContainer">
                                            <div className="dropDownTitle">تماس با ما</div>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="btnWrapper">
                        <Button
                            onClick={() => setIsPopupOpen(true)}
                            type="primary"
                            className="desktopSizeNavButton"
                        >
                            <span className="button-text">درخواست دمو</span>
                        </Button>
                        <Button
                            onClick={() => setIsPopupOpen(true)}
                            type="primary"
                            className="mobileSizeNavbutton"
                        >
                            <span className="button-text">دمو</span>
                        </Button>
                    </div>
                </div>
            </div>
            {menuRender}
            <DemoRequest isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}/>
        </>
    );
}
