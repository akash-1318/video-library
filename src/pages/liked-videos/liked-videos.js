import "./liked-videos.css";
import {Navigation,Sidebar, VideoCard} from "../../components/compIndex"
import {useVideoContext} from "../../contexts/video-context";
import empty from "../../assets/images/Empty-bag.svg"

function LikedVideos() {
    const {state} = useVideoContext();
    const {likedVideos} = state;
  return (
    <>
      <Navigation />
      <div className="main__container">
        <Sidebar />
        <section className="main__video-container">
        <h1 className="page__text">Liked Videos</h1>
          <div className="videos__container">
              {likedVideos.length === 0 ? (<>
              <div className="empty__video-container">
              <h2>You haven't liked any video yet !</h2>
              <img src={empty} className="empty__img"/>
              </div>
              </>) : (<>
                {likedVideos.map((video) => {
                  return(
                    <VideoCard videoData={video} key={video.id}/>
                  )
              })}
              </>)}
          </div>
        </section>
      </div>
    </>
  );
}

export { LikedVideos };
