import { useEffect } from "react";
import PageInfoSection from "../components/PageInfoSection";
import AlbumShowcase from "../components/AlbumShowcase";

function Photography() {
  useEffect(() => {
    document.title = "PORTFOLIO - Photography";
  });
  return (
    <>
      <div className="pageDescription">
        <PageInfoSection
          title={"Photography"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
        />
      </div>
      <div className="albumList">
        <AlbumShowcase
          buttonTo={"https://unsplash.com/"}
          title={"Coimbra"}
          image1={"/placeholder.jpeg"}
          image2={"/placeholder.jpeg"}
          image3={"/placeholder.jpeg"}
          image4={"/placeholder.jpeg"}
          image5={"/placeholder.jpeg"}
          image6={"/placeholder.jpeg"}
        />
        <AlbumShowcase
          buttonTo={"https://unsplash.com/"}
          title={"Porto"}
          image1={"/placeholder.jpeg"}
          image2={"/placeholder.jpeg"}
          image3={"/placeholder.jpeg"}
          image4={"/placeholder.jpeg"}
          image5={"/placeholder.jpeg"}
          image6={"/placeholder.jpeg"}
        />
      </div>
    </>
  );
}

export default Photography;
