import { Link } from "react-router-dom";
import "../../styles/Header.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import { IconButton } from "@mui/material";
import { WebStories, AccountCircle, Logout } from "@mui/icons-material";

export default function Header() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const navList = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
  ];

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
        <IconButton className="logout-btn" onClick={logout}>
          <Logout />
        </IconButton>
        <IconButton className="profile-btn">
          <AccountCircle />
        </IconButton>
      </div>
    </nav>
  );
}
