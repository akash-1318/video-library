import "./video-card.css";
import { viewsConvertor } from "../../utils/views-convertor";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../contexts/auth-context";
import { useVideoContext } from "../../contexts/video-context";
import {usePrimaryStatesContext} from "../../contexts/primary-states-context"
import { useThemeContext } from "../../contexts/theme-context";
import {
  addToLikedVideos,
  removeFromLikedVideos,
  saveToWatchLater,
  removeFromWatchLater,
  addToHistory,
  deleteFromHistory,
} from "../../utils/utils-index";
import {Modal} from "../compIndex"

function VideoCard({ videoData }) {
  const navigate = useNavigate();
  const {theme} = useThemeContext();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const { authCred } = useAuthContext();
  const { state, dispatch } = useVideoContext();
  const { authToken, authStatus } = authCred;
  const { likedVideos, watchLater, history } = state;
  const { modal, setModal } = usePrimaryStatesContext();

  const openVideoPage = (e) => {
    e.preventDefault();
    navigate(`/video/${videoData._id}`);
  };

  return (
    <div className="video__card-conatiner">
      <div class={`card ${theme === "light" ? "" : "dark"}`}>
        <div class="card__container">
          <div
            class="card__img"
            onClick={() => {
              if (location.pathname !== "/history") {
                  addToHistory(videoData, dispatch, authToken);
              }
            }}
          >
            <img
              src={`http://i1.ytimg.com/vi/${videoData._id}/0.jpg`}
              alt="card-img"
              class="card__img-c"
            />
            <div className="video__overlay"></div>
            <div className="overlay__text" onClick={openVideoPage}>
              <i class="bx bx-play-circle"></i>
            </div>
          </div>
          <div class="card__desc">
            <img src={videoData.profile} className="channel__img" />
            <div className="video__details">
              <p class="card__desc-text">{videoData.title}</p>
              <p className="additional__details">{videoData.creator}</p>
              <p className="additional__details">
                {viewsConvertor(videoData.views)} • {videoData.uploaded}
              </p>
            </div>
            <span
              className="menu__icon"
              onClick={(e) => setShowMenu(!showMenu)}
            >
              <i class="bx bx-dots-vertical-rounded"></i>
            </span>
            {showMenu === true ? (
              <div
                className={`menu__bar-conatiner ${theme === "light" ? "" : "dark"}`}
                onClick={() => setShowMenu(false)}
              >
                {watchLater.find((video) => video._id === videoData._id) ? (
                  <p
                    className="menu__name"
                    onClick={() => {
                      removeFromWatchLater(videoData, dispatch, authToken);
                    }}
                  >
                    {" "}
                    <i class="bx bxs-watch"></i> Remove watch later
                  </p>
                ) : (
                  <p
                    className="menu__name"
                    onClick={() => {
                      if (authStatus) {
                        saveToWatchLater(videoData, dispatch, authToken);
                      } else {
                        navigate("/login");
                      }
                    }}
                  >
                    {" "}
                    <i class="bx bxs-watch"></i> Save to watch later
                  </p>
                )}
                <p className="menu__name" onClick={ () => {
                    dispatch({type : "SET_CURRENT_VIDEO", payload : videoData})
                    if(authStatus) {
                        setModal(!modal)
                    } else{
                        navigate("/login");
                    }
                }}>
                  {" "}
                  <i class="bx bxs-playlist"></i> Save to play list
                </p>
                {likedVideos.find((video) => video._id === videoData._id) ? (
                  <p
                    className="menu__name"
                    onClick={() => {
                      removeFromLikedVideos(videoData, dispatch, authToken);
                    }}
                  >
                    {" "}
                    <i class="bx bxs-heart"></i> Remove from liked{" "}
                  </p>
                ) : (
                  <p
                    className="menu__name"
                    onClick={() => {
                      if (authStatus) {
                        addToLikedVideos(videoData, dispatch, authToken);
                      } else {
                        navigate("/login");
                      }
                    }}
                  >
                    {" "}
                    <i class="bx bxs-heart"></i> Add to liked videos{" "}
                  </p>
                )}
                {location.pathname === "/history" && (
                  <p
                    className="menu__name"
                    onClick={() => {
                      deleteFromHistory(videoData, dispatch, authToken);
                    }}
                  >
                    {" "}
                    <i class="bx bxs-heart"></i> Remove from History{" "}
                  </p>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {modal ? (<Modal />) : null}
    </div>
  );
}

export { VideoCard };
