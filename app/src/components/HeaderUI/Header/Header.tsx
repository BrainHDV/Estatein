"use client";

import { BurgerMenuIcon, Logo } from "@assets/index";
import Link from "next/link";
import React, { useState } from "react";
import Grid from "@containers/Grid/Grid";
import { usePathname } from "next/navigation";
import CustomLink from "@components/CustomLink/CustomLink";
import IconButton from "@components/IconButton/IconButton";
import "./Header.scss";
import clsx from "clsx";
import HeaderDialog from "../HeaderDialog/HeaderDialog";

export const nav = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about-us" },
  { title: "Properties", href: "/properties" },
  { title: "Services", href: "/services" },
];

const Header = () => {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <Grid>
        <div className="header-inner">
          <Link className="logo" href="/">
            <Logo />
          </Link>

          <nav className={clsx("header__nav")}>
            <ul className="header__nav-list">
              {nav.map((link) => {
                return (
                  <li key={link.title}>
                    <CustomLink
                      className={pathname === link.href && "link-active"}
                      color="secondary"
                      variant={pathname === link.href ? "outlined" : "text"}
                      href={link.href}
                    >
                      {link.title}
                    </CustomLink>
                  </li>
                );
              })}
              <li></li>
            </ul>
            <CustomLink color="secondary" variant="outlined" href="/">
              Contact us
            </CustomLink>
          </nav>
          <IconButton
            className="nav__mobile"
            color="secondary"
            size="x-large"
            onClick={menuToggle}
          >
            <BurgerMenuIcon />
          </IconButton>
          <HeaderDialog open={menuOpen} onClose={menuToggle}>
            <ul className="header__nav-list--mobile">
              {nav.map((link) => {
                return (
                  <li key={link.title}>
                    <CustomLink
                      className={pathname === link.href && "link-active"}
                      color="secondary"
                      size="large"
                      variant={pathname === link.href ? "outlined" : "text"}
                      href={link.href}
                    >
                      {link.title}
                    </CustomLink>
                  </li>
                );
              })}
            </ul>
            <CustomLink color="primary" variant="contained" href="/">
              Contact us
            </CustomLink>
          </HeaderDialog>
        </div>
      </Grid>
    </header>
  );
};

export default Header;
