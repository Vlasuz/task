import { useNavigate } from "@tanstack/react-router";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import { IUser } from "../types";
import { useCookies } from "react-cookie";
import { setUser } from "../features/user";
import { useDispatch } from "react-redux";

interface signUpProps {
  userNameField: string;
  emailField: string;
  passwordField: string;
  resetForm: () => void;
}

interface FetchUser extends IUser {
  token: string;
}

export const useSignUp = (props: signUpProps) => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [, setCookie] = useCookies();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    const body = {
      name: props.userNameField,
      email: props.emailField,
      password: props.passwordField,
    };

    await axios
      .post("https://crm.web-hub.online/api/register", body)
      .then((res: AxiosResponse<FetchUser>) => {
        if (res.status >= 200 && res.status < 300) {
          navigate({ to: "/" });

          const { token, ...user } = res.data;

          setCookie("tokenForTestApp", token);
          dispatch(setUser(user));

          props.resetForm();
        }
      })
      .catch((err: AxiosError) => {
        setErrorMessage(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { handleSubmit, errorMessage, isLoading };
};
