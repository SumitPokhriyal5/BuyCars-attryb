import { IUserLogin, IUserSignup } from "../../types/auth.types";
import { AppDispatch } from "../store";
import { errorAuth, loadAuth, logoutAuth, successAuth, successLoginAuth } from "./auth.action";
import { toast } from "react-toastify";

export const signinApi = (userData: IUserLogin , navigate : any) => async (dispatch: AppDispatch) => {
     if (!userData.email || !userData.password) {
        toast.error("Fill the Details")
        return;
     }

     // start loading
     dispatch(loadAuth());

     try {
          const res = await fetch(`${import.meta.env.VITE_APP_SERVER_URL}/user/signin`, {
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
               toast.success(data.message)
          } else {
               dispatch(errorAuth());
               toast.error(data.message);
          }


     } catch (error : any) {
          console.log('error:', error);
          dispatch(errorAuth());
          toast.error(error.message);
     }
}


export const signupApi = (userData: IUserSignup , navigate : any) => async (dispatch: AppDispatch) => {
     if (!userData.username || !userData.email || !userData.password) return;

     // ? PASSWORD VERIFIER
     if (userData.password.length <= 5) {
          alert('Password must contain more than 5 char!')
          return;
     }

     // start loading
     dispatch(loadAuth());

     try {
          const res = await fetch(`${import.meta.env.VITE_APP_SERVER_URL}/user/signup`, {
               method: "POST",
               body: JSON.stringify(userData),
               headers: {
                    'Content-Type': 'application/json'
               }
          })

          const data = await res.json();

          dispatch(res.ok ? successAuth() : errorAuth());
          if(res.ok){
            navigate('/login')
            toast.success(data.message)
          }else  toast.error(data.message)

     } catch (error : any) {
          console.log('error:', error);
          dispatch(errorAuth())
          toast.error(error.message);
     }
}

/**
 * for log-out only
 */
export const logoutApi = () => (dispatch: AppDispatch) => {
     dispatch(logoutAuth());
     window.location.replace('/')
}
