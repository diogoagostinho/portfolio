import PageInfoSection from "../components/PageInfoSection";

function Home() {
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
    </>
  );
}

export default Home;
