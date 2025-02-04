import React, {useState} from "react";
import {Link} from "gatsby";
import "./layout.scss";
import {Button} from "../widgets";
import {LEVANT, PRODUCT_ROUTES} from "./routes";

const sideBarMenuSchema = [
    {
        category: "لوانت",
        isOpen: true,
        icon: <span/>,
        subCategories: LEVANT,
    },
    {
        category: "محصولات",
        isOpen: true,
        icon: <span/>,
        subCategories: PRODUCT_ROUTES,
    }
];
export default function SidebarMenu({setIsOpenSideBar}) {
    const [sideBarMenuValue, setSideBarMenuValue] = useState(sideBarMenuSchema);

    function collapseHandler(index) {
        let menu = [...sideBarMenuValue];
        menu[index].isOpen = !menu[index].isOpen;
        setSideBarMenuValue(menu);
    }

    return (
        <div className="sidebarMenuContainer">
            {sideBarMenuValue.map((menu, index) => {
                return (
                    <div className="categoryContainer">
                        <div
                            className="categoryWrapper"
                            onClick={() => collapseHandler(index)}
                        >
                            {menu.icon}
                            <div className="categoryTitle">{menu.category}</div>
                            <div className="hr"/>
                            {menu.isOpen ? (
                                <Button onClick={() => collapseHandler(index)} type="link">
                  <span
                      className="icon-up-pointer"
                      onClick={() => collapseHandler(index)}
                  />
                                </Button>
                            ) : (
                                <Button onClick={() => collapseHandler(index)} type="link">
                  <span
                      className="icon-down-pointer"
                      onClick={() => collapseHandler(index)}
                  />
                                </Button>
                            )}
                        </div>
                        <div className="subMenuContainer">
                            {menu.isOpen &&
                                menu.subCategories.map((subMenu) => (
                                    <Link className="submenuTitle" to={`${subMenu.link}`}>
                                        {subMenu.title}
                                    </Link>
                                ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
