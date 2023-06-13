import { ICarData } from "../../types/cars.types";
import { CARS_ERROR, CARS_LOADING, CARS_SUCCESS } from "./cars.types";
import { Reducer } from "@reduxjs/toolkit";

interface CarState {
  loading: boolean;
  error: boolean;
  data: ICarData[]; 
}

const initialState: CarState = {
  loading: false,
  error: false,
  data: [],
};

export const carsReducer : Reducer<CarState> = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case CARS_LOADING: {
      return { ...state, loading: true, error: false };
    }

    case CARS_ERROR: {
      return { ...state, loading: false, error: true };
    }

    case CARS_SUCCESS: {
      return { data: payload, loading: false, error: false };
    }

    default:
      return state;
  }
};
