import "./style.css";
import Menu from "../Menu";
import logo from "./logo.png";

export default function Header() {
  return (
    <header role="banner" className="Header">
      <h1 className="Logo">
        <a href="/">
          <img src={logo} alt="logo" />{" "}<span className="GDG">GDG</span>{" "}
          <span className="Community">Thiruvananthapuram</span>
        </a>
      </h1>
      <Menu />
    </header>
  );
}
