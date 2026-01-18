import Link from "next/link";
import React, { useState } from "react";
// internal
import menu_data from "./menu-data";

const MobileMenus = () => {
  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  const isExternalLink = (url) => {
    return url && (url.startsWith('http://') || url.startsWith('https://'));
  };

  return (
    <>
      <nav className="mean-nav">
        <ul>
          {menu_data.map((menu, i) => (
            <React.Fragment key={i}>
              {menu.has_dropdown && (
                <li className="has-dropdown">
                  {isExternalLink(menu.link) ? (
                    <a href={menu.link} target="_blank" rel="noopener noreferrer">{menu.title}</a>
                  ) : (
                    <Link href={menu.link}>{menu.title}</Link>
                  )}
                  <ul
                    className="submenu"
                    style={{
                      display: navTitle === menu.title ? "block" : "none",
                    }}
                  >
                    {menu.sub_menus.map((sub, i) => (
                      <li key={i}>
                        {isExternalLink(sub.link) ? (
                          <a href={sub.link} target="_blank" rel="noopener noreferrer">{sub.title}</a>
                        ) : (
                          <Link href={sub.link}>{sub.title}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                  <a
                    className={`mean-expand ${
                      navTitle === menu.title ? "mean-clicked" : ""
                    }`}
                   
                    onClick={() => openMobileMenu(menu.title)}
                    style={{ fontSize: "18px", cursor: "pointer" }}
                  >
                    <i className="fal fa-plus"></i>
                  </a>
                </li>
              )}
              {!menu.has_dropdown && (
                <li>
                  {isExternalLink(menu.link) ? (
                    <a href={menu.link} target="_blank" rel="noopener noreferrer">{menu.title}</a>
                  ) : (
                    <Link href={menu.link}>{menu.title}</Link>
                  )}
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileMenus;
