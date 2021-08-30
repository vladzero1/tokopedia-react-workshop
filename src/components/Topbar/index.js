import { Link } from "react-router-dom";
import "./styles.css";

const Topbar = () => {
  return (
    <header className="header">
      <Link to="/" className="header-link">
        <img
          className="header-logo"
          src="/logo-devcamp-2021.png"
          alt="Tokopedia DevCamp 2021"
        />
      </Link>
    </header>
  );
};

export default Topbar;
