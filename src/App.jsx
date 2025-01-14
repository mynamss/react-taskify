import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ThemeConfigProvider from "./configs/ThemeConfig";
// import "./styles/App.css";

import Header from "./components/base/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/base/Footer";
import { TaskProvider } from "./context/TaskContext";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <Router>
      <ThemeConfigProvider>
        {/* {!isAuthPage && <Header />} */}
        <AuthProvider>
          <TaskProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </TaskProvider>
          <Footer />
        </AuthProvider>
      </ThemeConfigProvider>
    </Router>
  );
}
