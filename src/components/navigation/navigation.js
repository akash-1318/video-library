import "./navigation.css";
import { Link } from "react-router-dom";
import { usePrimaryStatesContext } from "../../contexts/primary-states-context";

function Navigation() {
  const { sidebar, setSidebar } = usePrimaryStatesContext();
  return (
    <header className="header__nav">
      <div className="header__nav-left">
        <div
          className={`sidebar__toggle-btn ${sidebar ? "rotate" : ""}`}
          onClick={() => setSidebar(!sidebar)}
        >
          <i class="bx bxs-chevrons-right"></i>
        </div>
        <Link to="/videolisting" className="logo__name-link">
          <p className="library__logo-name">
            Dev<span className="logo__sub-name">Tube</span>
          </p>
        </Link>
      </div>
      <div className="header__nav-middle">
        <div className="search__icon">
          <i className="bx bx-search-alt-2"></i>
        </div>
        <input placeholder="search" className="header__search" />
      </div>
      <div className="header__nav-right">
        <a href="#">
          <i className="bx bxl-github"></i>
        </a>
        <a href="#">
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="#">
          <i className="bx bxl-twitter"></i>
        </a>
      </div>
    </header>
  );
}

export { Navigation };
