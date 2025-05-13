import Button from "./Button";

function MusicItem(props: { title: string; linkTo: string; image: string }) {
  return (
    <div className="websiteSingleItem">
      <div className="websiteSingleItem__top">
        <img className="musicItemImage" src={props.image} />
      </div>
      <div className="websiteSingleItem__bottom">
        <p className="pageInfoTitle">{props.title}</p>
        <Button
          text={"Listen"}
          styleClass={"subtle"}
          isPop={true}
          linkTo={props.linkTo}
          isArrow={false}
        />
      </div>
    </div>
  );
}

export default MusicItem;
