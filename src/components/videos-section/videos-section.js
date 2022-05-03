import "./videos-section.css"
import {VideoCard} from "../compIndex"
import {useVideoContext} from "../../contexts/video-context"

function VideosSection () {
    const {state, dispatch} = useVideoContext();
    const {videosData} = state;
    console.log(videosData)
    return(
        <section className="main__video-container">
           <div className="category__container">
               <button className="category__item">All</button>
               <button className="category__item">HTML5</button>
               <button className="category__item">CSS3</button>
               <button className="category__item">Javascript</button>
               <button className="category__item">React JS</button>
           </div>
           <div className="videos__container">
               {videosData.map((video) => {
                   return(
                    <VideoCard videoData = {video}/>
                   )
               })}
           </div>
        </section>
    )
}

export { VideosSection }