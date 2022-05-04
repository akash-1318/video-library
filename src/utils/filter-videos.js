const filterVideos = (videosData, singleCategory) => {
    if(singleCategory !== "" && singleCategory !== "All"){
        return videosData.sort(() => Math.random() - 0.5)
    .filter((item) => item.category === singleCategory)
    } else if(singleCategory === "" || singleCategory === "All"){
        return videosData.sort(() => Math.random() - 0.5)
    }
}

export {filterVideos}