import React from "react";
import logo from "../../images/nike.png";
import search from "../../images/search.png";
import wishlist from "../../images/wishlist.png";
import bag from "../../images/bag.png";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="nike logo" />
      <div className="menu">
        <span>New arrivals</span>
        <span>Men</span>
        <span>Women</span>
        <span>Kids</span>
        <span>Collection</span>
      </div>
      <div className="headerLogos">
        <img src={search} alt="nike search" />
        <img src={wishlist} alt="nike wishlist" />
        <img src={bag} alt="nike bag" />
      </div>
    </div>
  );
};

export default Header;
