import { MdOpenInNew } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";

function Button(props: {
  text: string;
  styleClass: string;
  isPop: boolean;
  isArrow: boolean;
  linkTo: string;
}) {
  return (
    <>
      {props.isPop ? (
        <Link to={props.linkTo} target="_blank">
          <button className={props.styleClass}>
            {props.text}
            <MdOpenInNew />
          </button>
        </Link>
      ) : (
        <Link to={props.linkTo}>
          <button className={props.styleClass}>
            {props.text}
            {props.isArrow ? <MdArrowForward /> : ""}
          </button>
        </Link>
      )}
    </>
  );
}

export default Button;
