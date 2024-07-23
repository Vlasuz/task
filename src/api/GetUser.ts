import axios, { AxiosError, AxiosResponse } from "axios";
import { IUser } from "../types";
import { Action, Dispatch } from "@reduxjs/toolkit";
import { setUser } from "../features/user";

interface GetUserAction extends Action {
  type: "user/setUser";
  payload: IUser;
}

interface FetchUser extends IUser {
    token: string;
  }

export const getUser = (cookie: string, dispatch: Dispatch<GetUserAction>) => {
  axios.defaults.headers.common.Authorization = `Bearer ${cookie}`;
  axios
    .get("https://crm.web-hub.online/api/me")
    .then((res: AxiosResponse<FetchUser>) => {
      const {token, ...user} = res.data

      dispatch(setUser(user))
    })
    .catch((err: AxiosError) => {
        console.log("GetUser Error – ", err);
        
    });
};
