import { makeAutoObservable } from "mobx";
import { Car } from "./graphql/generated";

class FavoritesStore {
  favorites:any[] = []
  constructor() {
    makeAutoObservable(this)
  }
  addToFavorites(car:any) {
    if(!this.favorites.find((c)=> c.id === car.id)) {
      this.favorites.push(car)
    }
  }

  removeFromFavorites(carId:string) {
    this.favorites = this.favorites.filter((car) => car.id !== carId)
  }
}

export default new FavoritesStore()