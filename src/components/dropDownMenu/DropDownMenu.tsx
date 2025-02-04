import React from "react";
import {Link} from "gatsby";
import "./DropDownMenu.scss";

interface DropDownMenuInterface {
    menuSchema: Array<any>;
    isListOpen: boolean;
    title: string;
    onClick: () => void;
    onHover: () => void;
    onBlur: () => void;
    onMouseLeave: () => void;
}

export default function DropDownMenu({
                                         menuSchema,
                                         isListOpen,
                                         title,
                                         onClick,
                                         onBlur,
                                         onHover,
                                         onMouseLeave,
                                         menuRef,

                                     }:

                                         DropDownMenuInterface) {

    return (
        <div onClick={onClick} onMouseEnter={onHover} onMouseLeave={onMouseLeave}
             className={`dropDownContainer ${isListOpen ? "open" : ''}`}
             tabIndex={0}>
            <div className="dropDownTitleContainer">
                <div className="dropDownTitle">{title}</div>
            </div>
            {isListOpen && (
                <>
                    <div className="dropdownListContainer" ref={menuRef}>
                        {menuSchema.map((menu) => (
                            <Link className="dropdownListTitle" to={menu.link} style={{
                                display: "flex",
                                justifyContent: "start",
                                alignItems: "center",
                                gap: "5px"
                            }}>
                                {menu.title}
                            </Link>
                        ))}
                    </div>
                    <div onClick={onBlur} className="dropDownBackdrop"/>
                </>
            )}
        </div>
    );
}
