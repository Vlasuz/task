import { createFileRoute } from "@tanstack/react-router";
import { IUser } from "../../types";
import { useSelector } from "react-redux";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/profile/")({
  component: Profile,
});

function Profile() {
  const user: IUser = useSelector((state: any) => state.user.info);
  const isHaveUser = !!user?.name;

  if (!isHaveUser)
    return (
      <div className="">
        <Link to='/signin' className="btn-form w-fit">Sign In</Link>
      </div>
    );

  return (
    <div>
      <h1>Your profile</h1>

      <h2>Hello {user.name}</h2>
    </div>
  );
}
