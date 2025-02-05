import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Websites from "./pages/Websites";
import Photography from "./pages/Photography";
import Games from "./pages/Games";
import Music from "./pages/Music";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="appContainer">
      <div className="mainContent">
        {" "}
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="websites" element={<Websites />} />
          <Route path="photography" element={<Photography />} />
          <Route path="games" element={<Games />} />
          <Route path="music" element={<Music />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>

      <div className="footerContent">
        {" "}
        <Footer />
      </div>
    </div>
  );
}

export default App;
