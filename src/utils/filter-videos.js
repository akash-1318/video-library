const filteredSearchedVideos = (videosData, singleCategory, searchInput) => {
    const getSearchedVideos = searchedVideos(videosData, searchInput)
    const getFilteredVideos = filterVideos(getSearchedVideos, singleCategory)
    return getFilteredVideos
}

const searchedVideos = (videosData, searchInput) => {
    if(searchInput === "")
    return videosData
    return videosData.filter((item) => item.title.toLowerCase().includes(searchInput.toLowerCase()))
}

const filterVideos = (videosData, singleCategory) => {
        if(singleCategory !== "" && singleCategory !== "All"){
            return videosData
        .filter((item) => item.category === singleCategory)
        } else if(singleCategory === "" || singleCategory === "All"){
            return videosData
        }
}

export {filterVideos, filteredSearchedVideos}