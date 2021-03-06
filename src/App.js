import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  VideoListing,
  Signup,
  Login,
  LikedVideos,
  WatchLater,
  History,
  SingleVideo,
  Playlist,
} from "./pages/index";
import { RequireAuth } from "./utils/utils-index";
import { useThemeContext } from "./contexts/theme-context";
import MockMan from "mockman-js";

function App() {
  const {theme} = useThemeContext();
  return (
    <div className={`App ${theme === "light" ? "" : "dark"}`}>
      <ToastContainer autoClose={1000} style={{fontSize : "1.5rem"}} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videolisting" element={<VideoListing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/video/:videoId" element={<SingleVideo />} />
        <Route path="/mock" element={<MockMan />}></Route>
        <Route
          path="/likedvideos"
          element={
            <RequireAuth>
              <LikedVideos />
            </RequireAuth>
          }
        />
        <Route
          path="/watchlater"
          element={
            <RequireAuth>
              <WatchLater />
            </RequireAuth>
          }
        />
        <Route
          path="/history"
          element={
            <RequireAuth>
              <History />
            </RequireAuth>
          }
        />
        <Route
          path="/playlist"
          element={
            <RequireAuth>
              <Playlist />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
