import { CarData } from "../../types/oems.type";
import { OEMS_ERROR, OEMS_LOADING, OEMS_SUCCESS } from "./oems.types";

export const loadOems = () => ({ type : OEMS_LOADING })
export const errorOems = () => ({ type : OEMS_ERROR })
export const successOems = (payload : CarData[]) => ({ type : OEMS_SUCCESS , payload })