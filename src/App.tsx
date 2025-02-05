import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="appContainer">
      <div className="mainContent">
        {" "}
        <Navbar />
        <Home />
      </div>

      <div className="footerContent">
        {" "}
        <Footer />
      </div>
    </div>
  );
}

export default App;
