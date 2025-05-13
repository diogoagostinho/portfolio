import { useEffect } from "react";
import MusicItem from "../components/MusicItem";
import PageInfoSection from "../components/PageInfoSection";

function Music() {
  useEffect(() => {
    document.title = "PORTFOLIO - Music";
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
        <MusicItem
          title={"Nanocard"}
          linkTo={"https://www.google.pt/"}
          image={"/logo-holographic.png"}
        />
        <MusicItem
          title={"Nanocard"}
          linkTo={"https://www.google.pt/"}
          image={"/logo-holographic.png"}
        />
        <MusicItem
          title={"Nanocard"}
          linkTo={"https://www.google.pt/"}
          image={"/logo-holographic.png"}
        />
      </div>
    </>
  );
}

export default Music;
