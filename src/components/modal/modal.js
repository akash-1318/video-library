import "./modal.css";
import { usePrimaryStatesContext } from "../../contexts/primary-states-context";
import { useState } from "react";
import { useAuthContext } from "../../contexts/auth-context";
import { useVideoContext } from "../../contexts/video-context";
import { addPlaylist } from "../../utils/utils-index";

function Modal() {
  const { modal, setModal } = usePrimaryStatesContext();
  const { authCred } = useAuthContext();
  const { state, dispatch } = useVideoContext();
  const [playlistName, setPlaylistName] = useState("");
  const { authToken } = authCred;
  const { playlists } = state;
  const setPlaylist = (e) => {
    setPlaylistName(e.target.value.trim());
  };
  return (
    <>
      <div className="modal__container">
        <div className="modal">
          <div className="modal__header">
            <p>Save to...</p>
            <i class="bx bx-x" onClick={() => setModal(!modal)}></i>
          </div>
          <div className="playlist__container">
            {playlists.map((playlist) => {
              return (
                <div className="new__playlist">
                    <label className="playlist__name">
                  <input type="checkbox" />
                  {playlist.title}
                </label>
                <i class='bx bx-trash-alt' ></i>
                </div>
              );
            })}
          </div>
          <div className="create__playlist">
            <p>Name :</p>
            <input
              type="text"
              placeholder="Enter playlist name"
              value = {playlistName}
              onChange={(e) => setPlaylist(e)}
              onKeyPress={(e) => {
                if(e.key == "Enter") {
                    addPlaylist(playlistName, dispatch, authToken)
                }
            }}
            />
          </div>
          <button
            class="create__playlist-btn"
            onClick={() => addPlaylist(playlistName, dispatch, authToken)}
          >
            <i class="bx bx-plus"></i> create
          </button>
        </div>
      </div>
    </>
  );
}

export { Modal };
