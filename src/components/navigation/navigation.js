import "./navigation.css";
import { Link } from "react-router-dom";
import { usePrimaryStatesContext } from "../../contexts/primary-states-context";
import {useThemeContext} from "../../contexts/theme-context"

function Navigation() {
  const { sidebar, setSidebar, setSearchInput } = usePrimaryStatesContext();
  const {theme} = useThemeContext();
  return (
    <header className={`header__nav ${theme === "light" ? "" : "dark"}`}>
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
      <div className="header__nav-middle max-width-765">
        <div className={`search__icon ${theme === "light" ? "" : "dark"}`}>
          <i className="bx bx-search-alt-2"></i>
        </div>
        <input placeholder="search" className="header__search" 
        onChange = {(e) => setSearchInput(e.target.value)}
        />
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
