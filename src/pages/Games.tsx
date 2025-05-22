import { useEffect } from "react";
import PageInfoSection from "../components/PageInfoSection";
import GameItem from "../components/GameItem";

function Games() {
  useEffect(() => {
    document.title = "PORTFOLIO - Games";
  });
  return (
    <>
      <div className="pageDescription">
        <PageInfoSection
          title={"Games"}
          text={
            "Here is every website i have developed, going from just plain HTML, CSS and JS to full stack projects made with React and various back-end apps like MongoDB or MySQL."
          }
        />
      </div>
      <div className="websiteList">
        <GameItem
          title={"Tuga Clicker"}
          description={"Idle clicker game"}
          linkTo={"https://gamejolt.com/games/tugaclicker/558992"}
          image={"/games/tugaclicker.jpg"}
        />
        <GameItem
          title={"Geometry Dash: Minecraft Edition"}
          description={"Auto-scroller game, avoid obstacles, 3 levels"}
          linkTo={"https://gamejolt.com/games/gdme/951892"}
          image={"/games/gdme.jpg"}
        />
        <GameItem
          title={"Shit Hexagon"}
          description={"Copy of hexagon game"}
          linkTo={"https://gamejolt.com/games/shithexagon/951895"}
          image={"/games/shithexagon.jpg"}
        />
      </div>
    </>
  );
}

export default Games;
