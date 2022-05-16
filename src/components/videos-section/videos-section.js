import "./videos-section.css";
import { VideoCard } from "../compIndex";
import { useVideoContext } from "../../contexts/video-context";
import {usePrimaryStatesContext} from "../../contexts/primary-states-context"
import { filteredSearchedVideos } from "../../utils/filter-videos";
import {useThemeContext} from "../../contexts/theme-context"

function VideosSection() {
  const { state, dispatch } = useVideoContext();
  const {searchInput, setSearchInput} = usePrimaryStatesContext();
  const {theme} = useThemeContext();
  const { videosData, categoriesData, singleCategory } = state;

  console.log(searchInput)

  const getFilteredSearchedVideos = filteredSearchedVideos(videosData, singleCategory, searchInput);

  const filterActive = (category) => {
      if(category === singleCategory){
          return "active"
      }
  }
  
  return (
    <section className="main__video-container">
      <div className="header__nav-middle inside__video-container">
        <div className={`search__icon ${theme === "light" ? "" : "dark"}`}>
          <i className="bx bx-search-alt-2"></i>
        </div>
        <input placeholder="search" className="header__search"
        onChange = {(e) => setSearchInput(e.target.value)} 
        />
      </div>
      <div className="category__container">
        <button
          className={`category__item ${filterActive("All")} ${theme === "light" ? "" : "dark"} `}
          onClick={() => dispatch({ type: "SET_CATEGORY", payload: "All" })}
        >
          All
        </button>
        {categoriesData.map((item) => {
          return (
            <button
              className={`category__item ${filterActive(item.categoryName)} ${theme === "light" ? "" : "dark"}`}
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
        {getFilteredSearchedVideos.map((video) => {
          return <VideoCard videoData={video} key = {video._id} />;
        })}
      </div>
    </section>
  );
}

export { VideosSection };
