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
          title={"Portfolio V1"}
          description={
            "The firt version of my portfolio, made to display all my skills at web development and other information."
          }
          linkTo={"https://diogoagostinho.netlify.app/"}
          image={"/websites/portfoliov1.png"}
        />
        <WebsiteItem
          title={"Toyota Stand"}
          description={
            "Website listing all current toyota vehicles, database made with MongoDB"
          }
          linkTo={"https://toyota-stand.netlify.app/"}
          image={"/websites/toyotastand.png"}
        />
        <WebsiteItem
          title={"4DEVS"}
          description={"Copy of DEV.to, made with MySQL"}
          linkTo={"https://4devs.work4thenoob.pt/"}
          image={"/websites/4devs.png"}
        />
        <WebsiteItem
          title={"Webbal"}
          description={"List of useful tools and resources for web developers"}
          linkTo={"https://webbal.netlify.app/"}
          image={"/websites/webbal.png"}
        />
        <WebsiteItem
          title={"Wallabank"}
          description={"Website to promote a digital wallet"}
          linkTo={"https://wallabank.vercel.app/"}
          image={"/websites/wallabank.png"}
        />
        <WebsiteItem
          title={"Nanocard"}
          description={"Website to promote a digital wallet"}
          linkTo={"https://agstnh-nanocard.netlify.app/"}
          image={"/websites/nanocard.png"}
        />
        <WebsiteItem
          title={"nanocard"}
          description={"Website to promote a digital wallet"}
          linkTo={"https://agstnh-nanocard.netlify.app/"}
          image={"/websites/nanocard.png"}
        />
        <WebsiteItem
          title={"Firebase Copy"}
          description={"Copy of Firebase blog website"}
          linkTo={"https://diogoagostinho.github.io/firebase-blog/"}
          image={"/websites/firebase.png"}
        />
        <WebsiteItem
          title={"GitHub Universe"}
          description={"Copy of GitHub Universe 2023"}
          linkTo={"https://diogoagostinho.github.io/github-universe-23/"}
          image={"/websites/githubuniverse.png"}
        />
        <WebsiteItem
          title={"Game Library"}
          description={"Website listing videogames via json"}
          linkTo={"https://diogoagostinho.github.io/design-matters-lookalike/"}
          image={"/websites/gamelibrary.png"}
        />
      </div>
    </>
  );
}

export default Websites;
