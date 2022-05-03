import "./sidebar.css";
import { usePrimaryStatesContext } from "../../contexts/primary-states-context";

function Sidebar() {
  const { sidebar, setSidebar } = usePrimaryStatesContext();
  return (
    <aside className={`sidebar__menus ${sidebar ? "appear" : ""}`}>
      <ul className="sidebar__menu-container">
        <li className="sidebar__menu">
          <i class="bx bxs-home-heart"></i>
          <span className="icon__name">
            <p>Home</p>
          </span>
        </li>
        <li className="sidebar__menu">
          <i class="bx bxs-heart"></i>
          <span className="icon__name">
            <p>Liked</p>
          </span>
        </li>
        <li className="sidebar__menu">
          <i class="bx bxs-playlist"></i>
          <span className="icon__name">
            <p>Playlist</p>
          </span>
        </li>
        <li className="sidebar__menu">
          <i class="bx bxs-watch"></i>
          <span className="icon__name">
            <p>Watch Later</p>
          </span>
        </li>
        <li className="sidebar__menu">
          <i class="bx bx-history"></i>
          <span className="icon__name">
            <p>History</p>
          </span>
        </li>
        <li className="sidebar__menu bottom__menu">
          <i class="bx bx-log-in-circle"></i>
          <span className="icon__name">
            <p>Login</p>
          </span>
        </li>
      </ul>
    </aside>
  );
}

export { Sidebar };
