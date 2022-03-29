import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

import { GenericProps } from "../../../../Types";
import { userLogout } from "../../../../redux/Actions";
import LinkButton from "../../../UI/linkButton/LinkButton";

export default function Logout({setJwt}: GenericProps) {
  const dispatch = useDispatch()

  const logoutHandler = () => {
    Cookies.remove("jwt");
    dispatch(userLogout)
    setJwt('');
  }

  return (
    <div style={{ marginRight: "10px" }}>
      <LinkButton onClick={logoutHandler}>
        Logout
      </LinkButton>
    </div>
  );
}
