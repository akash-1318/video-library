const videoReducer = (state, action) => {
    switch (action.type){
        case "GET_VIDEOS" :
            return {...state, videosData : action.payload}
        case "GET_CATEGORY":
            return {...state, categoriesData : action.payload}  
        case "SET_CATEGORY":
            return {...state, singleCategory : action.payload}
        case "HANDLE_LIKED_VIDEOS":
            return {...state, likedVideos : action.payload}
        case "HANDLE_WATCH_LATER":
            return {...state, watchLater : action.payload} 
        case "HANDLE_HISTORY":
            return {...state, history : action.payload}
        case "ADD_PLAYLIST":
            return {...state, playlists : [...action.payload]}    
    }
}

export {videoReducer}