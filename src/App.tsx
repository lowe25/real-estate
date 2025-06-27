import "./styles/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Models from "./pages/Models";
import ModelDetails from "./pages/Models-details";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/models" element={<Models />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/model-details" element={<ModelDetails />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
