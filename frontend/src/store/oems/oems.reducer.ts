import { Reducer } from "@reduxjs/toolkit";
import { CarData } from "../../types/oems.type";
import { OEMS_ERROR, OEMS_LOADING, OEMS_SUCCESS } from "./oems.types";

interface OemsState {
    loading: boolean;
    error: boolean;
    data: CarData[]; 
}

const initialState: OemsState = {
    loading: false,
    error: false,
    data: []
};

export const oemsReducer : Reducer<OemsState> = (state = initialState, { type, payload }) => {
    switch (type) {
        case OEMS_LOADING: {
            return { ...state, loading: true, error: false };
        }

        case OEMS_ERROR: {
            return { ...state, loading: false, error: true };
        }

        case OEMS_SUCCESS: {
            return { ...state, data: payload, loading: false, error: false };
        }

        default:
            return state;
    }
};
