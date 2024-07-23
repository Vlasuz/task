import { useNavigate } from "@tanstack/react-router";
import axios from "axios";
import { useState } from "react";

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
      .post("https://crm.web-hub.online/api/register", body)
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          navigate({to: '/'})
          props.resetForm();
        }
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

  return { handleSubmit, errorMessage };
};
