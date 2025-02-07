import Button from "./Button";

function WebsiteItem(props: {
  title: string;
  description: string;
  linkTo: string;
  image: string;
}) {
  return (
    <div className="websiteSingleItem">
      <div className="websiteSingleItem__top">
        <img src={props.image} />
      </div>
      <div className="websiteSingleItem__bottom">
        <p className="pageInfoTitle">{props.title}</p>
        <p className="pageInfoText">{props.description}</p>
        <Button
          text={"Open website"}
          styleClass={"subtle"}
          isPop={true}
          linkTo={props.linkTo}
          isArrow={false}
        />
      </div>
    </div>
  );
}

export default WebsiteItem;
