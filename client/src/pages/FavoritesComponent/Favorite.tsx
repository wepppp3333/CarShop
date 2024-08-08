import { FC, useMemo } from "react";
import "./favorite.css";
import { observer } from "mobx-react-lite";
import favoritesStore from "../../store";
import { useLocalObservable } from "mobx-react-lite";
import delete_img from "./FavoreteImg/Deletebutton.svg";

const Favorite: FC = () => {
  const localStore = useLocalObservable(() => favoritesStore);
  const getText = (number: number) => {
    const number1 = number % 10;
    const number10 = number % 100;
    if (number10 >= 10) {
      return "Позиций";
    }

    switch (number1) {
      case 1:
        return "Позиция";
      case 2:
      case 3:
      case 4:
        return "Позиции";
      case 5:
        return "Позиций";
    }
  };

  const formatPrice = (prise: string): string => {
    const numberPart = prise.slice(1);

    const formattedNumber = numberPart.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    return `$${formattedNumber}`;
  };

  const removeFromFavorites = (cardId: string) => {
    favoritesStore.removeFromFavorites(cardId);
  };

  console.log(localStore.favorites.length);

  return (
    <div className="favorite_container">
      <h1 className="container_title">
        {localStore.favorites.length === 0
          ? "Добавьте понравившиеся автомобили"
          : `Избранные товары - ${localStore.favorites.length} ${getText(localStore.favorites.length)}`}
      </h1>
      <div className="container_list_cars">
        {localStore.favorites.map((car) => (
          <div
            key={car.id}
            className="favorite-car"
          >
            <div className="card_img">
              <img
                src={`http://localhost:4000${car.img_src}`}
                alt=""
              />
            </div>
            <div className="car_info">
              <h2 className="cars_brand_end_model">
                {car.brand} {car.model}
              </h2>
              <p>{car.description}</p>
              <p>Год: {car.model_year}</p>
              <p>Цвет: {car.color}</p>
              <h4 className="card_price">от {formatPrice(car.price)}</h4>
              <div className="car_info_btn">
                <button className="complection_btn">
                  Выбрать комплектацию
                </button>
                <button
                  className="delete_car"
                  onClick={() => removeFromFavorites(car.id)}
                >
                  <img
                    src={delete_img}
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default observer(Favorite);
