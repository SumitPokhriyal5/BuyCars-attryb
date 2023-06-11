import { AppDispatch } from '../store';
import { errorOems, loadOems, successOems } from './oems.action';

export const getAllOemsAction = (queryString = "") => async (dispatch: AppDispatch) => {
    dispatch(loadOems());

    try {
        const token = localStorage.getItem("token");
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
            'authorization': token ? JSON.parse(token) : ""
        };
        const res = await fetch(`${import.meta.env.VITE_APP_SERVER_URL}/oemspec?${queryString}`, { headers });

        const data = await res.json();

        if (res.ok) {
            dispatch(successOems(data.data));
        } else {
            dispatch(errorOems());
        }
    } catch (error: any) {
        console.log('error:', error);
        alert(error.message);
        dispatch(errorOems());
    }
};