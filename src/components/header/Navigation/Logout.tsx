
import Cookies from "js-cookie";
import LinkButton from "../../UI/linkButton/LinkButton";

export default function Logout(props: any) {

  const logoutHandler = () => {
    Cookies.remove("jwt");
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
