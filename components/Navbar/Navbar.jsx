import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import Link from "next/link";

//reaction icons
import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const onMouseDown = () => {
    if (window.innerWidth < 960) {
      setDropdown(true);
    }
  };

  // const onMouseUp = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(true);
  //   } else {
  //     setDropdown(true);
  //   }
  // };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link href="/">
          <a className="navbar__logo">Epic</a>
        </Link>

        <div className="menu__icon" onClick={handleClick}>
          {click ? (
            <FaTimes className="fa-times" />
          ) : (
            <FaBars className="fa-bars" />
          )}
        </div>

        <ul className={click ? "nav__menu active" : "nav__menu"}>
          <li className="nav__menu_item">
            <Link href="/">
              <a className="nav__menu_links" onClick={closeMobileMenu}>
                {" "}
                Home{" "}
              </a>
            </Link>
          </li>

          <li
            className="nav__menu_item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseDown={onMouseDown}
            // onMouseUp={onMouseUp}
          >
            <Link href="">
              <a className="nav__menu_links" onClick={closeMobileMenu}>
                {" "}
                Kerith
                <FaCaretDown />
              </a>
            </Link>

            {dropdown && <DropdownMenu />}
          </li>

          <li className="nav__menu_item">
            <Link href="/contact">
              <a className="nav__menu_links" onClick={closeMobileMenu}>
                {" "}
                Contact Us{" "}
              </a>
            </Link>
          </li>

          <Button className="btn" />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
