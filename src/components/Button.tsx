import { MdOpenInNew } from "react-icons/md";
import { Link } from "react-router-dom";

function Button(props: {
  text: string;
  styleClass: string;
  isPop: boolean;
  linkTo: string;
}) {
  return (
    <>
      <Link to={props.linkTo}>
        <button className={props.styleClass}>
          {props.text}
          {props.isPop ? <MdOpenInNew /> : ""}
        </button>
      </Link>
    </>
  );
}

export default Button;
