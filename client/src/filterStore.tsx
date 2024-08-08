import { makeAutoObservable } from "mobx";

class FilterStore {
  brand = "";
  model_year = "";
  price = "";
  availability = true;
  sortBy = "availability";

  constructor() {
    makeAutoObservable(this);
  }

  setBrand(brand: string) {
    return (this.brand = brand);
  }
  setYear(model_year: string) {
    return (this.model_year = model_year);
  }
  setPrice(price: string) {
    return (this.price = price);
  }
  setAvailability(availability: boolean) {
    return (availability = availability);
  }
  setSortBy(sortBy: string) {
    this.sortBy = sortBy;
  }
  clearFilters() {
    this.brand = "";
    this.model_year = "";
    this.price = "";
    this.availability = true;
    this.sortBy = "availability";
  }

  get sortByLabel() {
    switch (this.sortBy) {
      case "name-asc":
        return "По имени (A-Z)";
      case "name-desc":
        return "По имени (Z-A)";
      case "year-new":
        return "Сначала новее";
      case "year-old":
        return "Сначала старше";
      case "price-low":
        return "Сначала дешевле";
      case "price-high":
        return "Сначала дороже";
      case "availability":
      default:
        return "Сначала в наличии";
    }
  }
}

const filterStore = new FilterStore();

export default filterStore;
