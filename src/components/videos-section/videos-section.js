import "./videos-section.css";
import { VideoCard } from "../compIndex";
import { useVideoContext } from "../../contexts/video-context";
import { filterVideos } from "../../utils/filter-videos";

function VideosSection() {
  const { state, dispatch } = useVideoContext();
  const { videosData, categoriesData, singleCategory } = state;
  const filteredVideos = filterVideos(videosData, singleCategory);

  const filterActive = (category) => {
      if(category === singleCategory){
          return "active"
      }
  }
  
  return (
    <section className="main__video-container">
      <div className="category__container">
        <button
          className={`category__item ${filterActive("All")}`}
          onClick={() => dispatch({ type: "SET_CATEGORY", payload: "All" })}
        >
          All
        </button>
        {categoriesData.map((item) => {
          return (
            <button
              className={`category__item ${filterActive(item.categoryName)}`}
              onClick={() =>
                dispatch({ type: "SET_CATEGORY", payload: item.categoryName })
              }
            >
              {item.categoryName}
            </button>
          );
        })}
      </div>
      <div className="videos__container">
        {filteredVideos.map((video) => {
          return <VideoCard videoData={video} />;
        })}
      </div>
    </section>
  );
}

export { VideosSection };
