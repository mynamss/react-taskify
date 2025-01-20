import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeConfigProvider from "./configs/ThemeConfig";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
// context
import { TaskProvider } from "./context/TaskContext";
import { AuthProvider } from "./context/AuthContext";
// components
// import Header from "./components/base/Header";
import Footer from "./components/base/Footer";
// routes
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

export default function App() {
  return (
    <Router>
      <ThemeConfigProvider>
        {/* {!isAuthPage && <Header />} */}
        <AuthProvider>
          <TaskProvider>
            <Routes>
              <Route element={<PublicRoute />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/profile" element={<Profile />} />
              </Route>
              {/* <Route
                path="/about"
                element={
                  <PrivateRoute>
                    <About />
                  </PrivateRoute>
                }
              />
              <Route
                path="/contact"
                element={
                  <PrivateRoute>
                    <Contact />
                  </PrivateRoute>
                }
              /> */}
              {/* <Route
                path="/login"
                element={
                  <PublicRoute>
                    <Login />
                  </PublicRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute>
                    <Register />
                  </PublicRoute>
                }
              /> */}
              {/* <Route
                path="/profile/me"
                element={
                  <PublicRoute>
                    <Register />
                  </PublicRoute>
                }
              /> */}
            </Routes>
          </TaskProvider>
          <Footer />
        </AuthProvider>
      </ThemeConfigProvider>
    </Router>
  );
}
