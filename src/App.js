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
} from "./pages/index";
import { RequireAuth } from "./utils/utils-index";
import MockMan from "mockman-js";

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={1000} />
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
      </Routes>
    </div>
  );
}

export default App;
