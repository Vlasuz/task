import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useResetForm } from "../../hooks/ResetForm";
import { useSignUp } from "../../hooks/SignUp";

export const Route = createFileRoute("/_auth/signup")({
  component: SignUp,
});

function SignUp() {
  // Можно сделать через react-hook-form

  const [userNameField, setUserNameField] = useState<string>("");
  const [emailField, setEmailField] = useState<string>("");
  const [passwordField, setPasswordField] = useState<string>("");

  const { handleSubmit, errorMessage } = useSignUp({
    emailField,
    passwordField,
    userNameField,
    resetForm,
  });

  function resetForm() {
    // Передаем только то, что нам надо привести к дефолтному значению
    useResetForm({ stateFunctions: [setEmailField, setPasswordField] });
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-[300px] mx-auto">
        <h1 className="text-center mb-4">Registration</h1>
        <input
          onChange={(e) => setUserNameField(e.target.value)}
          value={userNameField}
          required
          type="text"
          className="block w-full border border-gray-400 rounded-md outline-none py-2 px-3 mt-2"
          placeholder="Enter you username"
        />
        <input
          onChange={(e) => setEmailField(e.target.value)}
          value={emailField}
          required
          type="email"
          className="block w-full border border-gray-400 rounded-md outline-none py-2 px-3 mt-2"
          placeholder="Enter you email"
        />
        <input
          onChange={(e) => setPasswordField(e.target.value)}
          value={passwordField}
          required
          type="password"
          className="block w-full border border-gray-400 rounded-md outline-none py-2 px-3 mt-2"
          placeholder="Enter you password"
        />
        <button className="btn-form">
          Sign Up
        </button>

        <Link to="/signin" className="mt-2 block underline text-blue-800 hover:text-blue-300">Already have an account?</Link>

        <p className="text-red-500 mt-2">{errorMessage}</p>
      </form>
    </div>
  );
}
