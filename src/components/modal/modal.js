import "./modal.css";
import { usePrimaryStatesContext } from "../../contexts/primary-states-context";
import { useState } from "react";
import { useAuthContext } from "../../contexts/auth-context";
import { useVideoContext } from "../../contexts/video-context";
import { useThemeContext } from "../../contexts/theme-context";
import {
  addPlaylist,
  addVideoToPlaylist,
  deleteVideoFromPlaylist,
  deletePlaylist,
} from "../../utils/utils-index";
import {toast} from "react-toastify"

function Modal() {
  const { modal, setModal } = usePrimaryStatesContext();
  const { authCred } = useAuthContext();
  const { state, dispatch } = useVideoContext();
  const {theme} = useThemeContext();
  const [playlistName, setPlaylistName] = useState("");
  const { authToken } = authCred;
  const { playlists, currentVideo } = state;
  const setPlaylist = (e) => {
    setPlaylistName(e.target.value.trim());
  };

  const addAndDeletePlaylistVideo = (
    e,
    currentVideo,
    dispatch,
    authToken,
    playlist
  ) => {
    if (e.target.checked === true) {
      addVideoToPlaylist(
        playlistName,
        playlist._id,
        currentVideo,
        dispatch,
        authToken
      );
    } else {
      deleteVideoFromPlaylist(
        playlistName,
        playlist._id,
        currentVideo,
        dispatch,
        authToken
      );
    }
  };

  const isVideoAvailable = (playlist, currentVideo) => {
    return playlist.videos
    .find((item) => item._id === currentVideo._id)
}

  return (
    <>
      <div className="modal__container">
        <div className={`modal ${theme === "light" ? "" : "dark"}`}>
          <div className="modal__header">
            <p onClick={() => console.log(currentVideo)}>Save to...</p>
            <i class="bx bx-x" onClick={() => setModal(!modal)}></i>
          </div>
          <div className="playlist__container">
            {playlists.map((playlist) => {
              return (
                <div className="new__playlist">
                  <label className="playlist__name">
                    <input
                      type="checkbox"
                      checked = {isVideoAvailable(playlist, currentVideo)}
                      onChange={(e) =>
                        addAndDeletePlaylistVideo(
                          e,
                          currentVideo,
                          dispatch,
                          authToken,
                          playlist
                        )
                      }
                    />
                    {playlist.title}
                  </label>
                  <i
                    class="bx bx-trash-alt"
                    onClick={() =>
                      deletePlaylist(
                        playlistName,
                        playlist._id,
                        dispatch,
                        authToken
                      )
                    }
                  ></i>
                </div>
              );
            })}
          </div>
          <div className="create__playlist">
            <p>Name :</p>
            <input
              type="text"
              placeholder="Enter playlist name"
              value={playlistName}
              onChange={(e) => setPlaylist(e)}
              onKeyPress={(e) => {
                if (e.key == "Enter") {
                  if(playlistName !== ""){
                    addPlaylist(playlistName, dispatch, authToken);
                    setPlaylistName("")
                  } else{
                    toast.error("Add playlist name")
                  }
                }
              }}
            />
          </div>
          <button
            class="create__playlist-btn"
            onClick={() => {
              if(playlistName !== ""){
                addPlaylist(playlistName, dispatch, authToken)
                setPlaylistName("")
              } else{
                toast.error("Add playlist name")
              }
            }}
          >
            <i class="bx bx-plus"></i> create
          </button>
        </div>
      </div>
    </>
  );
}

export { Modal };
