import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import filtered_img from "../Main_img/Sort.svg";
import filterStore from "../../../filterStore";
import "./filterMenu.css";

const FilterMenu: FC = () => {
  // <div className="filtered_menu">
  //   <button className="fitered_menu_btn">
  //     <img
  //       src={filtered_img}
  //       alt=""
  //     />
  //     Сначала в наличии
  //   </button>
  // </div>
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSortChange = (sortBy: string) => {
    filterStore.setSortBy(sortBy);
    setMenuOpen(false);
  };
  return (
    <div className="filtered_menu">
      <button
        className="filtered_menu_btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img
          src={filtered_img}
          alt=""
        />
        {filterStore.sortByLabel}
      </button>
      {menuOpen && (
        <div className="filtered_options">
          <div
            className="filtered_option"
            onClick={() => handleSortChange("availability")}
          >
            Сначала в наличии
          </div>
          <div
            className="filtered_paragraph"
            onClick={() => handleSortChange("name-asc")}
          >
            По имени (A-Z)
          </div>
          <div
            className="filtered_paragraph"
            onClick={() => handleSortChange("name-desc")}
          >
            По имени (Z-A)
          </div>
          <div
            className="filtered_paragraph"
            onClick={() => handleSortChange("year-new")}
          >
            Сначала новее
          </div>
          <div
            className="filtered_paragraph"
            onClick={() => handleSortChange("year-old")}
          >
            Сначала старше
          </div>
          <div
            className="filtered_paragraph"
            onClick={() => handleSortChange("price-low")}
          >
            Сначала дешевле
          </div>
          <div
            className="filtered_paragraph"
            onClick={() => handleSortChange("price-high")}
          >
            Сначала дороже
          </div>
        </div>
      )}
    </div>
  );
};

export default observer(FilterMenu);
