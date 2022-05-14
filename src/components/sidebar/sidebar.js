import "./sidebar.css";
import {toast} from "react-toastify";
import {Link, useNavigate, NavLink} from "react-router-dom"
import { usePrimaryStatesContext } from "../../contexts/primary-states-context";
import {useAuthContext} from "../../contexts/auth-context"

function Sidebar() {
    const navigate = useNavigate();
  const { sidebar, setSidebar } = usePrimaryStatesContext();
  const {authCred, setAuthCred} = useAuthContext();
  const {authToken, authStatus} = authCred;

  const logout = () => {
    localStorage.clear();
    setAuthCred({ ...authCred, authToken: null, authStatus: false });
    navigate("/videolisting")
    toast.success("You have logged out");
  };

  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "var(--secondry-color)" : "",
    backgroundColor : isActive ? "var(--primary-color)" : null
  });

  return (
    <aside className={`sidebar__menus ${sidebar ? "appear" : ""}`} onClick={() => setSidebar(false)}>
      <ul className="sidebar__menu-container">
      <NavLink style={getActiveStyle} to="/videolisting" className="link__style">
        <li className="sidebar__menu">
          <i class="bx bxs-home-heart"></i>
          <span className="icon__name">
            <p>Home</p>
          </span>
        </li>
        </NavLink>
        <NavLink style={getActiveStyle} to="/likedvideos" className="link__style">
        <li className="sidebar__menu">
          <i class="bx bxs-heart"></i>
          <span className="icon__name">
            <p>Liked</p>
          </span>
        </li>
        </NavLink>
        <NavLink style={getActiveStyle} to="/playlist" className="link__style">
        <li className="sidebar__menu">
          <i class="bx bxs-playlist"></i>
          <span className="icon__name">
            <p>Playlist</p>
          </span>
        </li>
        </NavLink>
        <NavLink style={getActiveStyle} to="/watchlater" className="link__style">
        <li className="sidebar__menu">
          <i class="bx bxs-watch"></i>
          <span className="icon__name">
            <p>Watch Later</p>
          </span>
        </li>
        </NavLink>
        <NavLink style={getActiveStyle} to="/history" className="link__style">
        <li className="sidebar__menu">
          <i class="bx bx-history"></i>
          <span className="icon__name">
            <p>History</p>
          </span>
        </li>
        </NavLink>
        {authStatus ? (
            <li className="sidebar__menu bottom__menu" onClick={logout}>
              <i class='bx bx-log-out-circle'></i>
              <span className="icon__name">
                <p>Logout</p>
              </span>
            </li>
        ) : (
        <NavLink style={getActiveStyle} to="/login" className="link__style">
        <li className="sidebar__menu bottom__menu">
          <i class="bx bx-log-in-circle"></i>
          <span className="icon__name">
            <p>Login</p>
          </span>
        </li>
        </NavLink>
        )}
      </ul>
    </aside>
  );
}

export { Sidebar };
