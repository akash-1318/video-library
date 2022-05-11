import axios from "axios";
import {toast} from "react-toastify";

const saveToWatchLater = async(video, dispatch, authToken) => {
    try{
        const res = await axios.post(
            "/api/user/watchlater",
            {video},
            {
                headers:{
                    authorization: authToken,
                },
            }
            )
            dispatch({type : "HANDLE_WATCH_LATER", payload : res.data.watchlater})
            toast.success("Added to watch later");
    } catch(err){
        console.log(err)
        toast.error("Error in adding to liked videos");
    }
}


const removeFromWatchLater = async(video, dispatch, authToken) => {
    try{
        const res = await axios.delete(
            `/api/user/watchlater/${video._id}`,
            {
                headers:{
                    authorization: authToken,
                },
            }
            )
            dispatch({type : "HANDLE_WATCH_LATER", payload : res.data.watchlater})
            toast.success("Removed from watch later");
    } catch(err){
        console.log(err)
        toast.success("Error in removing from liked video");
    }
}

export {saveToWatchLater, removeFromWatchLater}