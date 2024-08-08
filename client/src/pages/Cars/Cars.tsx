import { FC, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CARS } from "./queries";
import { observer } from "mobx-react-lite";
import "./cars.css";
import card_img_favorited_noactive from "./CarsImg/card_img_favorited_noactive.svg";
import card_img_favorited_isactive from "./CarsImg/card_img_favorited_isactive.svg";
import favoritesStore from "../../store";
import filterStore from "../../filterStore";
import filterMenu from "../MainComponent/Pages/FilterMenu";

type CarsProps = {
  search: string;
};

const Cars: FC<CarsProps> = ({ search }) => {
  const { loading, error, data } = useQuery(GET_CARS, {
    variables: { search },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Формирование цены

  const formatPrice = (prise: string): string => {
    const numberPart = prise.slice(1);

    const formattedNumber = numberPart.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    return `$${formattedNumber}`;
  };

  const clickBtnFavorite = (car: any) => {
    if (favoritesStore.favorites.find((c) => c.id === car.id)) {
      favoritesStore.removeFromFavorites(car.id);
    } else {
      favoritesStore.addToFavorites(car);
    }
  };

  const filteredCars = data.cars
    .filter((car: any) => {
      return (
        (filterStore.brand === "" ||
          car.brand.toLowerCase().includes(filterStore.brand.toLowerCase())) &&
        (filterStore.model_year === "" ||
          car.model_year
            .toLowerCase()
            .includes(filterStore.model_year.toLowerCase())) &&
        (filterStore.price === "" ||
          car.price.toString().includes(filterStore.price)) &&
        (!filterStore.availability || car.availability)
      );
    })
    .sort((a: any, b: any) => {
      switch (filterStore.sortBy) {
        case "name-asc":
          return a.brand.localeCompare(b.brand);
        case "name-desc":
          return b.brand.localeCompare(a.brand);
        case "year-new":
          return b.model_year - a.model_year;
        case "year-old":
          return a.model_year - b.model_year;
        case "price-low":
          return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
        case "price-high":
          return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1));
        case "availability":
        default:
          return b.availability - a.availability;
      }
    });

  return (
    <div className="cars">
      <div className="conteiner_card">
        {filteredCars.map((car: any) => {
          const isFavorite = !!favoritesStore.favorites.find(
            (c) => c.id === car.id
          );
          return (
            <div
              key={car.id}
              className="card"
            >
              <div className="card_img_position">
                <img
                  className={`card_img ${car.availability ? "" : "availability"}`}
                  src={`http://localhost:4000${car.img_src}`}
                  alt=""
                />
                <div
                  className="card_no-active"
                  style={{
                    display: car.availability ? "none" : "flex",
                  }}
                >
                  Нет в наличии
                </div>
              </div>

              <h2 className="cars_brand_end_model">
                {car.brand} {car.model}
              </h2>

              <span className="card_year">Год: {car.model_year}</span>
              <span className="card_color">Цвет: {car.color}</span>
              <h4 className="card_price">от {formatPrice(car.price)}</h4>
              <div className="card_btn_end_img">
                <button
                  className="card_btn"
                  style={{
                    backgroundColor: car.availability ? "#4f2cd9" : "#d9d9d9",
                    color: car.availability ? "#fff" : "#000",
                    cursor: car.availability ? "pointer" : "not-allowed",
                  }}
                >
                  Купить
                </button>
                <button
                  className="card_favorite_btn"
                  onClick={() => clickBtnFavorite(car)}
                >
                  <img
                    className="card_favorite_img"
                    src={
                      isFavorite
                        ? card_img_favorited_isactive
                        : card_img_favorited_noactive
                    }
                    alt=""
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default observer(Cars);
