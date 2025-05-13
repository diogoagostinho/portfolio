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
          title={"Nanocard"}
          description={
            "Here is every website i have developed, going from just plain HTML, CSS and JS to full stack projects made with React and various back-end apps like MongoDB or MySQL."
          }
          linkTo={"https://www.google.pt/"}
          image={"/placeholder.jpeg"}
        />
        <GameItem
          title={"Nanocard"}
          description={
            "Here is every website i have developed, going from just plain HTML, CSS and JS to full stack projects made with React and various back-end apps like MongoDB or MySQL."
          }
          linkTo={"https://www.google.pt/"}
          image={"/placeholder.jpeg"}
        />
        <GameItem
          title={"Nanocard"}
          description={
            "Here is every website i have developed, going from just plain HTML, CSS and JS to full stack projects made with React and various back-end apps like MongoDB or MySQL."
          }
          linkTo={"https://www.google.pt/"}
          image={"/placeholder.jpeg"}
        />
        <GameItem
          title={"Nanocard"}
          description={
            "Here is every website i have developed, going from just plain HTML, CSS and JS to full stack projects made with React and various back-end apps like MongoDB or MySQL."
          }
          linkTo={"https://www.google.pt/"}
          image={"/placeholder.jpeg"}
        />
      </div>
    </>
  );
}

export default Games;
