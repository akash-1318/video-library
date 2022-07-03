import "./playlist.css";
import { Navigation, Sidebar, VideoCard } from "../../components/compIndex";
import { useVideoContext } from "../../contexts/video-context";
import { useAuthContext } from "../../contexts/auth-context";
import { clearAllHistory } from "../../utils/handle-history";
import { deletePlaylist } from "../../utils/utils-index";
import empty from "../../assets/images/Empty-bag.svg";

function Playlist() {
  const { state, dispatch } = useVideoContext();
  const { playlists, playlistVideos } = state;
  const { authCred } = useAuthContext();
  const { authToken } = authCred;

  return (
    <>
      <Navigation />
      <div className="main__container">
        <Sidebar />
        <section className="main__video-container">
          <h1 className="page__text">Playlists</h1>
          <div className="playlist__container playlist">
            {playlists.length === 0 ? (
              <>
                <div className="empty__video-container">
                  <h2>You haven't created any playlist yet !</h2>
                  <img src={empty} className="empty__img" />
                </div>
              </>
            ) : (
              <>
                {playlists.map((item) => {
                  return (
                    <div className="playlist__conatiner">
                      <div className="playlist__header">
                        <p>{item.title}</p>
                        <i
                          class="bx bx-trash"
                          onClick={() =>
                            deletePlaylist(
                              item.title,
                              item._id,
                              dispatch,
                              authToken
                            )
                          }
                        ></i>
                      </div>
                      <div className="videos__container playlist">
                        {item.videos.map((playlistVideo) => {
                          return <VideoCard videoData={playlistVideo} />;
                        })}
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export { Playlist };
