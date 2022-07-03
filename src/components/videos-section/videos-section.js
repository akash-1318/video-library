import "./videos-section.css";
import { VideoCard } from "../compIndex";
import { useVideoContext } from "../../contexts/video-context";
import { usePrimaryStatesContext } from "../../contexts/primary-states-context";
import { filteredSearchedVideos } from "../../utils/filter-videos";
import { useThemeContext } from "../../contexts/theme-context";
import empty from "../../assets/images/Empty-bag.svg";
import { useState } from "react";

function VideosSection() {
  const { state, dispatch } = useVideoContext();
  const { searchInput, setSearchInput } = usePrimaryStatesContext();
  const { theme } = useThemeContext();
  const { videosData, categoriesData, singleCategory } = state;
  const [activeState, setActiveState] = useState(null);

  const getFilteredSearchedVideos = filteredSearchedVideos(
    videosData,
    singleCategory,
    searchInput
  );

  const filterActive = (category) => {
    if (category === singleCategory) {
      return "active";
    }
  };

  return (
    <section className="main__video-container">
      <div className="header__nav-middle inside__video-container">
        <div className={`search__icon ${theme === "light" ? "" : "dark"}`}>
          <i className="bx bx-search-alt-2"></i>
        </div>
        <input
          placeholder="search"
          className="header__search"
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      {getFilteredSearchedVideos.length === 0 ? (
        <>
          <div className="empty__video-container">
            <h2>No Video found!</h2>
            <img src={empty} className="empty__img" />
          </div>
        </>
      ) : (
        <>
          <div className="category__container">
            <button
              className={`category__item ${filterActive("All")} ${
                theme === "light" ? "" : "dark"
              } `}
              onClick={() => dispatch({ type: "SET_CATEGORY", payload: "All" })}
            >
              All
            </button>
            {categoriesData.map((item) => {
              return (
                <button
                  className={`category__item ${filterActive(
                    item.categoryName
                  )} ${theme === "light" ? "" : "dark"}`}
                  onClick={() =>
                    dispatch({
                      type: "SET_CATEGORY",
                      payload: item.categoryName,
                    })
                  }
                >
                  {item.categoryName}
                </button>
              );
            })}
          </div>
          <div className="videos__container">
            {getFilteredSearchedVideos.map((video, index) => {
              return <VideoCard 
              videoData={video} 
              key={video._id}
              activeState = {activeState}
              setActiveState = {setActiveState}
              />;
            })}
          </div>
        </>
      )}
    </section>
  );
}

export { VideosSection };
