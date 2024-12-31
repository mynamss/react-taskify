import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import "./styles/App.css";

import Header from "./components/base/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="container">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer>© 2024 My App</footer>
    </Router>
  );
}
