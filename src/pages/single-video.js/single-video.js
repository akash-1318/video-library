import "./single-video.css";
import axios from "axios";
import Loader from "react-js-loader";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navigation, Sidebar } from "../../components/compIndex";
import {
  addToLikedVideos,
  removeFromLikedVideos,
  saveToWatchLater,
  removeFromWatchLater,
} from "../../utils/utils-index";
import { useVideoContext } from "../../contexts/video-context";
import { useAuthContext } from "../../contexts/auth-context";
import {usePrimaryStatesContext} from "../../contexts/primary-states-context"
import { VideoCard, Modal } from "../../components/compIndex";

function SingleVideo() {
  const navigate = useNavigate();
  const { videoId } = useParams();
  const [singleVideo, setSingleVideo] = useState({});
  const [loader, setLoader] = useState(true)
  const { state, dispatch } = useVideoContext();
  const { authCred } = useAuthContext();
  const { authToken, authStatus } = authCred;
  const { likedVideos, watchLater, videosData } = state;
  const { modal, setModal } = usePrimaryStatesContext();

  useEffect(() => {
    const getSingleVideo = async () => {
      try {
        const resp = await axios.get(`/api/video/${videoId}`);
        setLoader(false)
        setSingleVideo(resp.data.video);
      } catch (err) {
        console.log(err);
      }
    };
    getSingleVideo();
  }, [videoId]);

  return (
    <>
      <Navigation />
      <div className="main__container">
        <Sidebar />
        <section className="main__video-container">
          {loader ? (
            <Loader type="spinner-default" bgColor={"#ff4daf"} title={"loading"} color={"#ff4daf"} size={80}/>
          ) : (<>
                    <iframe
            className="video-player"
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
          ></iframe>
          <div className="video__cta">
            {likedVideos.find((video) => video._id === singleVideo._id) ? (
              <div
                className="single__cta liked__cta"
                onClick={() =>
                  removeFromLikedVideos(singleVideo, dispatch, authToken)
                }
              >
                <i class="bx bxs-heart"></i>
                <p>Liked</p>
              </div>
            ) : (
              <div
                className="single__cta"
                onClick={() => {
                  if (authStatus) {
                    addToLikedVideos(singleVideo, dispatch, authToken);
                  } else {
                    navigate("/login");
                  }
                }}
              >
                <i class="bx bxs-heart"></i>
                <p>Like</p>
              </div>
            )}
            <div className="single__cta">
              <i class="bx bxs-playlist"></i>
              <p onClick={ () => {
                    dispatch({type : "SET_CURRENT_VIDEO", payload : singleVideo})
                    if(authStatus) {
                        setModal(!modal)
                    } else{
                        navigate("/login");
                    }
                }}>Save</p>
            </div>
            {watchLater.find((video) => video._id === singleVideo._id) ? (
              <div
                className="single__cta liked__cta"
                onClick={() =>
                  removeFromWatchLater(singleVideo, dispatch, authToken)
                }
              >
                <i class="bx bxs-watch"></i>
                <p>Watch later</p>
              </div>
            ) : (
              <div
                className="single__cta"
                onClick={() => {
                  if (authStatus) {
                    saveToWatchLater(singleVideo, dispatch, authToken);
                  } else {
                    navigate("/login");
                  }
                }}
              >
                <i class="bx bxs-watch"></i>
                <p>Watch later</p>
              </div>
            )}
          </div>
          <h2>{singleVideo.title}</h2>
          <p className="views__para">
            {singleVideo.views} views • {singleVideo.uploaded}
          </p>
          <p className="description__para">{singleVideo.description}</p>
          </>)}
        </section>
        <aside className="related__videos-container">
          <h2 className="related__heading">Suggestions</h2>
          {videosData.map((video) => {
            return <VideoCard videoData={video} />;
          })}
        </aside>
      </div>
      {modal ? (<Modal />) : null}
    </>
  );
}

export { SingleVideo };
