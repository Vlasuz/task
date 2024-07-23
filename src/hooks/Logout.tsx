import { useDispatch } from "react-redux";
import { removeUser } from "../features/user";
import { useCookies } from "react-cookie";

export const useLogout = () => {
  const dispatch = useDispatch();

  const [, , removeCookies] = useCookies();

  const handleExit = () => {
    removeCookies("tokenForTestApp");
    dispatch(removeUser());
  };

  return {handleExit}
};
