import React, { useState } from "react";
import Link from "next/link";
import { MenuItems } from "./MenuItems";

const DropdownMenu = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown_menu clicked" : "dropdown_menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.path}>
                <a className={item.cName} onClick={() => setClick(false)}>
                  {item.title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DropdownMenu;
