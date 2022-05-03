import "./video-card.css";
import {viewsConvertor} from "../../utils/views-convertor"
import { useState } from "react";
function VideoCard({videoData}) {
    const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="video__card-conatiner">
      <div class="card">
        <div class="card__container">
          <div class="card__img">
            <img
              src={`http://i1.ytimg.com/vi/${videoData._id}/0.jpg`}
              alt="card-img"
              class="card__img-c"
            />
            <div className="video__overlay"></div>
            <div className="overlay__text">
            <i class='bx bx-play-circle' ></i>
            </div>
          </div>
          <div class="card__desc">
            <img src={videoData.profile} className="channel__img"/>
            <div className="video__details">
            <p class="card__desc-text">
              {videoData.title}
            </p>
            <p className="additional__details">{videoData.creator}</p>
            <p className="additional__details">{viewsConvertor(videoData.views)} • {videoData.uploaded}</p>
            </div>
            <span className="menu__icon" onClick = {(e) => setShowMenu(!showMenu)}>
                <i class='bx bx-dots-vertical-rounded' ></i>
            </span>
            {showMenu === true ? (
            <div className={`menu__bar-conatiner`}>
                <p className="menu__name"> <i class='bx bxs-watch' ></i> Save to watch later</p>
                <p className="menu__name"> <i class='bx bxs-playlist' ></i> Save to play list</p>
                <p className="menu__name"> <i class='bx bxs-heart' ></i> Add to liked videos</p>
            </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export { VideoCard };
