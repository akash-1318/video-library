import axios from "axios";
import {toast} from "react-toastify";

const addToLikedVideos = async(video, dispatch, authToken) => {
    try{
        const res = await axios.post(
            "/api/user/likes",
            {video},
            {
                headers:{
                    authorization: authToken,
                },
            }
            )
            dispatch({type : "HANDLE_LIKED_VIDEOS", payload : res.data.likes})
            toast.success("Added to liked videos");
    } catch(err){
        console.log(err)
        toast.error("Error in adding to liked videos");
    }
}


const removeFromLikedVideos = async(video, dispatch, authToken) => {
    try{
        const res = await axios.delete(
            `/api/user/likes/${video._id}`,
            {
                headers:{
                    authorization: authToken,
                },
            }
            )
            dispatch({type : "HANDLE_LIKED_VIDEOS", payload : res.data.likes})
            toast.success("Removed from liked video");
    } catch(err){
        console.log(err)
        toast.success("Error in removing from liked video");
    }
}

export {addToLikedVideos, removeFromLikedVideos}