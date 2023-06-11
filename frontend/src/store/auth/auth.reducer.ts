import { Reducer } from "redux";
import { AUTH_ERROR, AUTH_LOADING, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT, AUTH_SUCCESS } from "./auth.types";
import { ILoginUser } from "../../types/auth.types";

interface AuthState {
    loading: boolean,
    error: boolean,
    isAuth: boolean,
    user: ILoginUser | object
}

const initialState: AuthState = {
    loading: false,
    error: false,
    isAuth: false,
    user: {},
};

export const authReducer: Reducer<AuthState> = (
    state = initialState,
    { type, payload }
) => {
    switch (type) {
        case AUTH_LOADING: {
            return { ...state, loading: true, error: false };
        }

        case AUTH_ERROR: {
            return { ...state, loading: false, error: true };
        }

        case AUTH_SUCCESS: {
            return { ...state, loading: false, error: false };
        }

        case AUTH_LOGIN_SUCCESS: {
            localStorage.setItem("carToken", payload.token);
            localStorage.setItem("username", payload.name);
            return { loading: false, error: false, isAuth: true, user: payload };
        }

        case AUTH_LOGOUT: {
            localStorage.clear();
            return initialState;
        }

        default:
            return state;
    }
};
