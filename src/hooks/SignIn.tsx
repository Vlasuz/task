import { useNavigate } from "@tanstack/react-router";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import { IUser } from "../types";

interface signInProps {
  emailField: string;
  passwordField: string;
  resetForm: () => void;
}

export const useSignIn = (props: signInProps) => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    const body = {
      email: props.emailField,
      password: props.passwordField,
    };

    await axios
      .post("https://user1721711071996.requestly.tech/signin", body)
      .then((res: AxiosResponse<IUser>) => {
        if (res.status >= 200 && res.status < 300) {
          navigate({ to: `/`, search: {name: res?.data?.name} });
          props.resetForm();
        }
      })
      .catch((err: AxiosError & {response: {data: {message: string}}}) => {
        setErrorMessage(err?.response?.data?.message ?? err.message);
      });
  };

  return { handleSubmit, errorMessage };
};
