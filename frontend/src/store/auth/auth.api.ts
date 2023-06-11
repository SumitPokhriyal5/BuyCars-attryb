import { IUserLogin, IUserSignup } from "../../types/auth.types";
import { AppDispatch } from "../store";
import { errorAuth, loadAuth, logoutAuth, successAuth, successLoginAuth } from "./auth.action";

export const signinApi = (userData: IUserLogin , navigate : any) => async (dispatch: AppDispatch) => {
     if (!userData.email || !userData.password) return;

     // start loading
     dispatch(loadAuth());

     try {
          const res = await fetch(`${import.meta.env.VITE_APP_SERVER_URL}/auth/signin`, {
               method: 'POST',
               body: JSON.stringify(userData),
               headers: {
                    'Content-Type': 'application/json'
               }
          })

          const data = await res.json();

          if (res.ok) {
               dispatch(successLoginAuth(data.user));
               navigate('/');
          } else {
               dispatch(errorAuth());
          }

          alert(data.message)

     } catch (error : any) {
          console.log('error:', error);
          dispatch(errorAuth());
          alert(error.message);
     }
}


export const signupApi = (userData: IUserSignup) => async (dispatch: AppDispatch) => {
     if (!userData.username || !userData.email || !userData.password) return;

     // ? PASSWORD VERIFIER
     if (userData.password.length <= 5) {
          alert('Password must contain more than 5 char!')
          return;
     }

     // start loading
     dispatch(loadAuth());

     try {
          const res = await fetch(`${import.meta.env.VITE_APP_SERVER_URL}/auth/signup`, {
               method: "POST",
               body: JSON.stringify(userData),
               headers: {
                    'Content-Type': 'application/json'
               }
          })

          const data = await res.json();

          dispatch(res.ok ? successAuth() : errorAuth());

          alert(data.message);
     } catch (error : any) {
          console.log('error:', error);
          dispatch(errorAuth())
          alert(error.message);
     }
}

/**
 * for log-out only
 */
export const logoutApi = () => (dispatch: AppDispatch) => {
     dispatch(logoutAuth());
     window.location.replace('/')
}
