import Button from "./Button";

function FeaturedRow(props: {
  buttonTo: string;
  title: string;
  image1: string;
  image2: string;
  image3: string;
}) {
  return (
    <>
      <div className="featuredRow">
        <h3>{props.title}</h3>
        <Button
          text={props.buttonTo}
          styleClass={"subtle"}
          isPop={false}
          linkTo={"/" + props.buttonTo}
          isArrow={true}
        />
      </div>
      <div className="featuredRowImages">
        <img src={props.image1} />
        <img src={props.image2} />
        <img src={props.image3} />
      </div>
    </>
  );
}

export default FeaturedRow;
