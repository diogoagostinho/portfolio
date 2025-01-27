import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="appContainer">
      <div className="mainContent">
        {" "}
        <Navbar />
      </div>
      <div className="footerContent">
        {" "}
        <Footer />
      </div>
    </div>
  );
}

export default App;
