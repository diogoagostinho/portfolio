import Button from "./Button";

function AlbumShowcase(props: {
  buttonTo: string;
  title: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
}) {
  return (
    <>
      <div className="albumShowcaseItem">
        <div className="albumShowcaseTop">
          <h3>{props.title}</h3>
          <Button
            text={"See album"}
            styleClass={"subtle"}
            isPop={false}
            linkTo={props.buttonTo}
            isArrow={true}
          />
        </div>

        <div className="albumImagesTopRow">
          <img src={props.image1} />
          <img src={props.image2} />
          <img src={props.image3} />
        </div>
        <div className="albumImagesBottomRow">
          <img src={props.image4} />
          <img src={props.image5} />
          <img src={props.image6} />
        </div>
      </div>
    </>
  );
}

export default AlbumShowcase;
