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
            "My photographic eye seeks to reveal the harmony between natural landscapes and urban settings. Each click is an attempt to capture the essence of places - from the calm of a forest to the vibrant pulse of the streets. With sensitivity and attention to detail, I transform spaces into visual stories."
          }
        />
      </div>
      <div className="albumList">
        <AlbumShowcase
          buttonTo={
            "https://imgur.com/gallery/algarve-iberian-racing-festival-TscroC5"
          }
          title={"Algarve Iberian Racing Festival 2025"}
          image1={"/photography/algarve-irf2025/1.jpg"}
          image2={"/photography/algarve-irf2025/2.jpg"}
          image3={"/photography/algarve-irf2025/3.jpg"}
          image4={"/photography/algarve-irf2025/4.jpg"}
          image5={"/photography/algarve-irf2025/5.jpg"}
          image6={"/photography/algarve-irf2025/6.jpg"}
        />
        <AlbumShowcase
          buttonTo={"https://imgur.com/gallery/porto-2025-dxkAjPQ"}
          title={"Porto"}
          image1={"/photography/porto-1/1.jpg"}
          image2={"/photography/porto-1/2.jpg"}
          image3={"/photography/porto-1/3.jpg"}
          image4={"/photography/porto-1/4.jpg"}
          image5={"/photography/porto-1/5.jpg"}
          image6={"/photography/porto-1/6.jpg"}
        />
        <AlbumShowcase
          buttonTo={"https://imgur.com/gallery/random-pics-1-L77g8iM"}
          title={"Alto da Ameixeira & Fonte Benémola"}
          image1={"/photography/fonteb-altoa/1.jpg"}
          image2={"/photography/fonteb-altoa/2.jpg"}
          image3={"/photography/fonteb-altoa/3.jpg"}
          image4={"/photography/fonteb-altoa/4.jpg"}
          image5={"/photography/fonteb-altoa/5.jpg"}
          image6={"/photography/fonteb-altoa/6.jpg"}
        />
      </div>
    </>
  );
}

export default Photography;
