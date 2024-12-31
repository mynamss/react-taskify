import { Link } from "react-router-dom";


import "../../styles/Header.css";

export default function Header() {
  const navList = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
  ];

  return (
    <nav>
      <ul className="navlink">
        {navList.map((item) => (
          <li key={item.title}>
            <Link to={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
