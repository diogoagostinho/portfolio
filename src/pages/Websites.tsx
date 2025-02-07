import { useEffect } from "react";
import PageInfoSection from "../components/PageInfoSection";
import WebsiteItem from "../components/WebsiteItem";

function Websites() {
  useEffect(() => {
    document.title = "PORTFOLIO - Websites";
  });
  return (
    <>
      <div className="pageDescription">
        <PageInfoSection
          title={"Web development"}
          text={
            "Here is every website i have developed, going from just plain HTML, CSS and JS to full stack projects made with React and various back-end apps like MongoDB or MySQL."
          }
        />
      </div>
      <div className="websiteList">
        <WebsiteItem
          title={"Nanocard"}
          description={
            "Here is every website i have developed, going from just plain HTML, CSS and JS to full stack projects made with React and various back-end apps like MongoDB or MySQL."
          }
          linkTo={"https://www.google.pt/"}
          image={"/placeholder.jpeg"}
        />
        <WebsiteItem
          title={"Nanocard"}
          description={
            "Here is every website i have developed, going from just plain HTML, CSS and JS to full stack projects made with React and various back-end apps like MongoDB or MySQL."
          }
          linkTo={"https://www.google.pt/"}
          image={"/placeholder.jpeg"}
        />
        <WebsiteItem
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

export default Websites;
