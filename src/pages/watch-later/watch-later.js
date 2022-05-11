import "./watch-later.css";
import { Navigation } from "../../components/navigation/navigation";
import { Sidebar } from "../../components/sidebar/sidebar";
import { VideoCard } from "../../components/compIndex";
import {useVideoContext} from "../../contexts/video-context";
import empty from "../../assets/images/Empty-bag.svg";

function WatchLater() {
    const {state} = useVideoContext();
    const {watchLater} = state;
    console.log(watchLater)
  return (
    <>
      <Navigation />
      <div className="main__container">
        <Sidebar />
        <section className="main__video-container">
          <div className="videos__container">
          {watchLater.length === 0 ? (<>
              <div className="empty__video-container">
              <h1>No added videos</h1>
              <img src={empty} className="empty__img"/>
              </div>
              </>) : (<>
                {watchLater.map((video) => {
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

export { WatchLater };
