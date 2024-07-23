import React from "react";
import { IUser } from "../types";
import { useSelector } from "react-redux";
import { useLogout } from "../hooks/Logout";
import { Link } from "@tanstack/react-router";

interface IUserInfoProps {}

const UserInfo: React.FC<IUserInfoProps> = () => {
  const user: IUser = useSelector((state: any) => state.user.info);

  const { handleExit } = useLogout();

  return (
    <div className="ml-auto flex items-center">
      <Link to="/profile" className="hover:underline mr-5">
        <strong>{user.name}</strong>
      </Link>

      <button className="py-1 px-2 border btn-form mt-0" onClick={handleExit}>Exit from site</button>
    </div>
  );
};

export default UserInfo;
