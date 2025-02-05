import Badge from "../components/Badge";
import FeaturedRow from "../components/FeaturedRow";
import PageInfoSection from "../components/PageInfoSection";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "PORTFOLIO - By Diogo Agostinho";
  });
  return (
    <>
      <div className="pageDescription">
        <PageInfoSection
          title={"Welcome to my portfolio!"}
          text={
            "This is where I display all of my projects i've made along the years, from music and photo albums to videogames and websites, everything i've put my sweat and hard work into is here for everyone (interested) to see."
          }
        />
      </div>
      <div className="topicSeparation">
        <h3>Skill stack</h3>
        <div className="badgeRow">
          <Badge text={"javascript"} color={"green"} />
          <Badge text={"typescript"} color={"green"} />
          <Badge text={"c#"} color={"green"} />
          <Badge text={"python"} color={"green"} />
          <Badge text={"php"} color={"green"} />
          <Badge text={"tailwindcss"} color={"green"} />
          <Badge text={"bootstrap"} color={"green"} />
          <Badge text={"react"} color={"green"} />
          <Badge text={"next"} color={"green"} />
          <Badge text={"express"} color={"green"} />
          <Badge text={"expo"} color={"green"} />
          <Badge text={"vercel"} color={"green"} />
          <Badge text={"netlify"} color={"green"} />
          <Badge text={"cloudinary"} color={"green"} />
          <Badge text={"aws"} color={"green"} />
          <Badge text={"nodejs"} color={"green"} />
          <Badge text={"mysql"} color={"green"} />
          <Badge text={"firebase"} color={"green"} />
          <Badge text={"mongodb"} color={"green"} />
          <Badge text={"figma"} color={"green"} />
        </div>
        <div className="badgeRow">
          <Badge text={"canon eos 100d"} color={"blue"} />
          <Badge text={"ef-s 18-55mm is stm"} color={"blue"} />
          <Badge text={"ef-s 18-135mm f/3.5-5.6 is stm"} color={"blue"} />
          <Badge text={"photoshop"} color={"blue"} />
        </div>
        <div className="badgeRow">
          <Badge text={"unity"} color={"red"} />
          <Badge text={"blender"} color={"red"} />
        </div>
        <div className="badgeRow">
          <Badge text={"fl studio"} color={"purple"} />
        </div>
      </div>
      <div className="topicSeparation">
        <FeaturedRow
          buttonTo={"Websites"}
          title={"Latest websites"}
          image1={"/placeholder.jpeg"}
          image2={"/placeholder.jpeg"}
          image3={"/placeholder.jpeg"}
        />
      </div>
      <div className="topicSeparation"></div>
      <div className="topicSeparation">
        <FeaturedRow
          buttonTo={"Photography"}
          title={"Latest photos"}
          image1={"/placeholder.jpeg"}
          image2={"/placeholder.jpeg"}
          image3={"/placeholder.jpeg"}
        />
      </div>
      <div className="topicSeparation"></div>
      <div className="topicSeparation">
        <h3>Work experience</h3>
        <b>Xerox analyst and technician</b>
        <p className="workDate">2023 - Present</p>
        <p>
          Currently working for XEKmate as an analyst/technician. My job is to
          analyze the workplace of a client and make sure it has enough room and
          resources to install a MFP Xerox device, after the analysis, the
          printer is installed in the client's office. The other side of the job
          involves technical support (helpdesk) through Anydesk and/or
          TeamViewer.
        </p>
      </div>
      <div className="topicSeparation">
        <b>Computer technician</b>
        <p className="workDate">2022 - 2023</p>
        <p>
          I used to work for PCQUATRO, the job involved building PCs for
          individuals and enterprises, along with repairing similar systems
          (PCs, laptops, AIOs). I also worked with networking architectures,
          passing and creating ethernet cables for clients. This job also gave
          me experience with helpdesk, tech support and selling products to
          clients within the physical shop.
        </p>
      </div>
      <div className="topicSeparation"></div>
      <hr />
      <div className="topicSeparation"></div>
      <div className="topicSeparation">
        <h3>Education</h3>
        <b>University of Algarve</b>
        <p className="workDate">2020 - 2022</p>
        <p>
          I had 2 years of education in UALG learning Computing Systems and
          Technologies, finished the university with a Certificate of
          Professional Qualification Level 4, within the studies I learnt C, C#,
          Python and Web Development (JavaScript).
        </p>
      </div>
      <div className="topicSeparation">
        <b>Pinheiro e Rosa</b>
        <p className="workDate">2017 - 2020</p>
        <p>
          Had a 3 year professional education course learning programming
          languages for the first time, also learnt to work with computers at a
          technical level with a sum of 6 months internship on hardware.
        </p>
      </div>
      <div className="topicSeparation"></div>
    </>
  );
}

export default Home;
