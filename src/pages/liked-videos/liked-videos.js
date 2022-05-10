import "./liked-videos.css";
import { Navigation } from "../../components/navigation/navigation";
import { Sidebar } from "../../components/sidebar/sidebar";
import {useVideoContext} from "../../contexts/video-context";
import {VideoCard} from "../../components/compIndex"
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
          <div className="videos__container">
              {likedVideos.length === 0 ? (<>
              <div className="empty__video-container">
              <h1>No liked videos</h1>
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
