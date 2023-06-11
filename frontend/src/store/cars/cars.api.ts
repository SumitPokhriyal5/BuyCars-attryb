import { ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { AppDispatch, RootState } from "../store";
import { errorCars, loadCars, successCars } from "./cars.action";

export const getAllCarsApi: ActionCreator<ThunkAction<
    void,
    RootState,
    null,
    AnyAction
>> = (queryString = "") => async (dispatch: AppDispatch) => {
    // start loading
    dispatch(loadCars());

    try {
        const token = localStorage.getItem("carToken");
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
            'authorization': token ? JSON.parse(token) : ""
        };
        const res = await fetch(
            `${import.meta.env.VITE_APP_SERVER_URL}/marketplace?${queryString}`,
            {
                headers
            }
        );

        const data = await res.json();


        // if request success then store the data otherwise set error
        if (res.ok) dispatch(successCars(data.data));
        else dispatch(errorCars());
    } catch (error: any) {
        console.log("error:", error);
        alert(error.message);
        dispatch(errorCars());
    }
};

export const createCarApi: ActionCreator<ThunkAction<
    void,
    RootState,
    null,
    AnyAction
>> = (car) => async (dispatch: AppDispatch) => {
    if (Object.keys(car).length === 0) return;

    // start loading
    dispatch(loadCars());

    try {
        const token = localStorage.getItem("carToken");
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
            'authorization': token ? JSON.parse(token) : ""
        };
        const res = await fetch(
            `${import.meta.env.VITE_APP_SERVER_URL}/marketplace`,
            {
                method: "POST",
                body: JSON.stringify(car),
                headers
            }
        );

        const data = await res.json();


        // if request success then store the data otherwise set error
        if (res.ok) dispatch<any>(getAllCarsApi());
        else dispatch(errorCars());

        alert(data.message);
    } catch (error: any) {
        console.log('error:', error);
        alert(error.message);
        dispatch(errorCars());
    }
};

export const updateCarApi: ActionCreator<ThunkAction<
    void,
    RootState,
    null,
    AnyAction
>> = ({ carId, update }) => async (dispatch: AppDispatch) => {
    if (!carId || Object.keys(update).length === 0) return;
    console.log({ carId, update });
    // start loading
    dispatch(loadCars());

    try {
        const token = localStorage.getItem("carToken");
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
            'authorization': token ? JSON.parse(token) : ""
        };
        const res = await fetch(
            `${import.meta.env.VITE_APP_SERVER_URL}/marketplace/${carId}`,
            {
                method: 'PATCH',
                body: JSON.stringify(update),
                headers
            }
        );

        const data = await res.json();

        // if request success then store the data otherwise set error
        if (res.ok) dispatch<any>(getAllCarsApi());
        else dispatch(errorCars());

        alert(data.message);
    } catch (error: any) {
        console.log('error:', error);
        alert(error.message);
        dispatch(errorCars());
    }
};

export const deleteCarApi: ActionCreator<ThunkAction<
    void,
    RootState,
    null,
    AnyAction
>> = (carId) => async (dispatch: AppDispatch) => {
    if (!carId) return;

    // start loading
    dispatch(loadCars());

    try {
        const token = localStorage.getItem("carToken");
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
            'authorization': token ? JSON.parse(token) : ""
        };
        const res = await fetch(
            `${import.meta.env.VITE_APP_SERVER_URL}/marketplace/${carId}`,
            {
                method: 'DELETE',
                headers
            }
        );

        const data = await res.json();

        // if request success then store the data otherwise set error
        if (res.ok) dispatch<any>(getAllCarsApi());
        else dispatch(errorCars());

        alert(data.message);
    } catch (error: any) {
        console.log('error:', error);
        alert(error.message);
        dispatch(errorCars());
    }
};


