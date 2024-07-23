import { useNavigate } from "@tanstack/react-router";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import { IUser } from "../types";

interface signUpProps {
  userNameField: string;
  emailField: string;
  passwordField: string;
  resetForm: () => void;
}

export const useSignUp = (props: signUpProps) => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    const body = {
      name: props.userNameField,
      email: props.emailField,
      password: props.passwordField,
    };

    await axios
      .post("https://user1721711071996.requestly.tech/signin", body)
      .then((res: AxiosResponse<IUser>) => {
        if (res.status >= 200 && res.status < 300) {
          navigate({to: '/'})
          props.resetForm();
        }
      })
      .catch((err: AxiosError) => {
        setErrorMessage(err.message);
      });
  };

  return { handleSubmit, errorMessage };
};
