import React from "react";
import Link from "next/link";
import "./HeaderBanner.scss";
import BannerBg from "@assets/abstract-design.svg?url";
import { CloseIcon } from "@assets/index";

const HeaderBanner = () => {
  return (
    <div
      className="header-banner"
      style={{ backgroundImage: `url(${BannerBg.src})` }}
    >
      <div className="header-banner__content">
        <span>✨Discover Your Dream Property with Estatein</span>
        <Link href="#">Learn More</Link>
      </div>
      <button className="header-banner__action">
        <CloseIcon />
      </button>
    </div>
  );
};

export default HeaderBanner;
