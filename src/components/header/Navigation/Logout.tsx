import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

import { userLogout } from "../../../redux/Action";
import LinkButton from "../../UI/linkButton/LinkButton";

export default function Logout(props: any) {
  const dispatch = useDispatch()

  const logoutHandler = () => {
    Cookies.remove("jwt");
    dispatch(userLogout)
    props.setRerender(!props.rerender);
  }

  return (
    <div style={{ marginRight: "10px" }}>
      <LinkButton onClick={logoutHandler}>
        Logout
      </LinkButton>
    </div>
  );
}
