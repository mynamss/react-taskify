import { Link } from "react-router-dom";
import "../../styles/Header.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { supabase } from "../../configs/db/supabase";

import { IconButton } from "@mui/material";
import { WebStories, AccountCircle, Logout } from "@mui/icons-material";

export default function Header() {
  const navigate = useNavigate();

  const navList = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
  ];

  const handleLogout = async () => {
    try {
      // Logout dari Supabase
      await supabase.auth.signOut();

      // Hapus session dari localStorage
      localStorage.removeItem("supabase_session");

      // Redirect ke halaman login
      navigate("/login");
    } catch (e) {
      console.error("Error during logout:", e.message);
    }
  };

  return (
    <nav className="navbar">
      <IconButton onClick={() => navigate("/")}>
        <WebStories />
      </IconButton>
      <ul className="navlink">
        {navList.map((item) => (
          <li key={item.title}>
            <Link to={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <div className="header-btn">
        <IconButton className="logout-btn" onClick={handleLogout}>
          <Logout />
        </IconButton>
        <IconButton className="profile-btn">
          <AccountCircle />
        </IconButton>
      </div>
    </nav>
  );
}
