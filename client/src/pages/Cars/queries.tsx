import { gql } from "@apollo/client";

export const GET_CARS = gql`
  query GetCars($search: String) {
    cars(search: $search) {
      id
      brand
      model
      color
      model_year
      img_src
      price
      description
      availability
    }
  }
`;

export const GET_CAR = gql`
  query GetCar($id: Int!) {
    car(id: $id) {
      id
      brand
      model
      color
      model_year
      img_src
      price
      description
      availability
    }
  }
`;
