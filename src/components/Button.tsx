import { MdOpenInNew } from "react-icons/md";

function Button(props: { text: string; styleClass: string; isPop: boolean }) {
  return (
    <>
      <button className={props.styleClass}>
        {props.text}
        {props.isPop ? <MdOpenInNew /> : ""}
      </button>
    </>
  );
}

export default Button;
