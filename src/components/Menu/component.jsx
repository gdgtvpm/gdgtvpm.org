import "./style.css";

export default function Menu() {
  return (
    <nav className="Nav">
      <ul>
        <li className="active">
          <a className="Link" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="Link" href="/">
            Speakers
          </a>
        </li>
        <li>
          <a className="Link" href="/">
            About Us
          </a>
        </li>
        <li className="cta">
          <a className="Link" href="/">
            Register Now
          </a>
        </li>
      </ul>
    </nav>
  );
}
