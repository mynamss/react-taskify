import { Link, useNavigate } from "react-router-dom";
import "../../styles/Header.css";
import { useAuth } from "../../hooks/useAuth";
import { supabase } from "../../configs/db/supabase";

import { IconButton } from "@mui/material";
import { WebStories, AccountCircle, Logout } from "@mui/icons-material";

export default function Header() {
  const navigate = useNavigate();

  const { logout, user } = useAuth();

  const navList = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
  ];

  console.log("user:", user);

  const handleLogout = async () => {
    try {
      await logout();

      // Hapus session dari localStorage
      // localStorage.removeItem("supabase_session");

      // Redirect
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
