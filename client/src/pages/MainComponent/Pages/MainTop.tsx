import "./main_top.css";
import filtered_img from "../Main_img/Sort.svg";
import search_btn from "../Main_img/search-button.svg";
import React, { FC } from "react";
import FilterMenu from "./FilterMenu";

type MainTopProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const MainTop: FC<MainTopProps> = ({ search, setSearch }) => {
  return (
    <div className="main_top">
      <FilterMenu />
      <div className="search">
        <input
          className="search_input"
          type="text"
          placeholder="Найти авто"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <img
          src={search_btn}
          alt=""
        />
      </div>
    </div>
  );
};

export default MainTop;
