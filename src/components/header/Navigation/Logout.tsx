import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

import { userLogout } from "../../../redux/Actions";
import LinkButton from "../../UI/linkButton/LinkButton";

export default function Logout({setJwt}: any) {
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
