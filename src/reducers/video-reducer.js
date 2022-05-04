const videoReducer = (state, action) => {
    switch (action.type){
        case "GET_VIDEOS" :
            return {...state, videosData : action.payload}
        case "GET_CATEGORY":
            return {...state, categoriesData : action.payload}  
        case "SET_CATEGORY":
            return {...state, singleCategory : action.payload}    
    }
}

export {videoReducer}