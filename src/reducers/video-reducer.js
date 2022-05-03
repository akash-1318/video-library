const videoReducer = (state, action) => {
    switch (action.type){
        case "GET_VIDEOS" :
            return {...state, videosData : action.payload}
    }
}

export {videoReducer}