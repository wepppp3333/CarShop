import "./header_style.css";
import bugreg_button from "./Header_img/burger_img.svg";
import img_favorites from "./Header_img/info_favorites.svg";
import { FC } from "react";
import {Link } from "react-router-dom";


const Header: FC = () => {
  return (
    <>
      <div className="header">
        <div className="header_logo">
          <Link
            className="header_logo_title"
            to="/"
          >
            <span >КУПИ</span>
            <span >АВТО</span>
          </Link>
          <button className="header_logo_catalog_btn">
            <img
              src={bugreg_button}
              alt=""
            />
            Каталог
          </button>
        </div>
        <div className="header_info">
          <div className="header_info_location">
            <p>Москва, Волгоградский пр-кт, 43, стр 1</p>
            <a href="tel:+7 800 555 35 35">+7 800 555 35 35</a>
          </div>
          <div className="header_info_favorites">
            <img
              src={img_favorites}
              alt=""
            />
            <Link to="/favorite">Избранное</Link>
          </div>
        </div>
      </div>
      
      
    </>
  );
};

export default Header;
