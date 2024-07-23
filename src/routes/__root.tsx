import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { IUser } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "../api/GetUser";
import { useCookies } from "react-cookie";
import UserInfo from "../components/UserInfo";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const [cookies] = useCookies(["tokenForTestApp"]);
  const dispatch = useDispatch();

  const user: IUser = useSelector((state: any) => state.user.info);
  const isHaveUser = !!user?.name;

  useEffect(() => {
    getUser(cookies.tokenForTestApp, dispatch);
  }, []);

  return (
    <>
      <div className="py-4 flex">
        <Link
          to="/"
          className="[&.active]:font-bold border-r border-gray-300 last:border-none px-4"
        >
          Главная
        </Link>
        {!isHaveUser && (
          <Link
            to="/signup"
            className="[&.active]:font-bold border-r border-gray-300 last:border-none px-4"
          >
            Sign Up
          </Link>
        )}
        {!isHaveUser && (
          <Link
            to="/signin"
            className="[&.active]:font-bold border-r border-gray-300 last:border-none px-4"
          >
            Sign In
          </Link>
        )}
        {isHaveUser && (
          <Link
            to="/profile"
            className="[&.active]:font-bold border-r border-gray-300 last:border-none px-4"
          >
            Profile
          </Link>
        )}

        {isHaveUser && <UserInfo/>}
      </div>
      <hr className="mb-10" />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
