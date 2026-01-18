import Link from "next/link";
import React from "react";
import menu_data from "./menu-data";

const NavMenu = () => {
  const isExternalLink = (url) => {
    return url && (url.startsWith('http://') || url.startsWith('https://'));
  };

  return (
    <>
      <ul>
        {menu_data.map((menu_item, i) => (
          <li key={i}>
            {isExternalLink(menu_item.link) ? (
              <a href={menu_item.link} target="_blank" rel="noopener noreferrer">{menu_item.title}</a>
            ) : (
              <Link href={menu_item.link}>{menu_item.title}</Link>
            )}
            {menu_item.has_dropdown && (
              <ul className="submenu">
                {menu_item.sub_menus.map((sub_menu, i) => (
                  <li key={i}>
                    {isExternalLink(sub_menu.link) ? (
                      <a href={sub_menu.link} target="_blank" rel="noopener noreferrer">{sub_menu.title}</a>
                    ) : (
                      <Link href={sub_menu.link}>{sub_menu.title}</Link>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
