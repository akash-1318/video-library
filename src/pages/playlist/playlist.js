import "./playlist.css";
import { Navigation, Sidebar, VideoCard } from "../../components/compIndex";
import { useVideoContext } from "../../contexts/video-context";
import empty from "../../assets/images/Empty-bag.svg";

function Playlist() {
  const { state } = useVideoContext();
  const { watchLater } = state;
  console.log(watchLater);
  return (
    <>
      <Navigation />
      <div className="main__container">
        <Sidebar />
        <section className="main__video-container">
          <h1 className="page__text">Playlist</h1>
          <div className="videos__container">
            {watchLater.length === 0 ? (
              <>
                <div className="empty__video-container">
                  <h2>You haven't added any video for later !</h2>
                  <img src={empty} className="empty__img" />
                </div>
              </>
            ) : (
              <>
                {watchLater.map((video) => {
                  return <VideoCard videoData={video} key={video.id} />;
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