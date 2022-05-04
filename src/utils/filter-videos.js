const filterVideos = (videosData, singleCategory) => {
    if(singleCategory !== "" && singleCategory !== "All"){
        return videosData
    .filter((item) => item.category === singleCategory)
    } else if(singleCategory === "" || singleCategory === "All"){
        return videosData
    }
}

export {filterVideos}