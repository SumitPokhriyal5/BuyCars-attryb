import { CARS_ERROR, CARS_LOADING, CARS_SUCCESS } from "./cars.types";

export const loadCars = () => ({ type : CARS_LOADING })
export const errorCars = () => ({ type : CARS_ERROR })
export const successCars = (payload : any[]) => ({ type : CARS_SUCCESS , payload })