import axios from "axios";
import {toast} from "react-toastify";

const addToHistory = async(video, dispatch, authToken) => {
    try{
        const res = await axios.post(
            "/api/user/history",
            {video},
            {
                headers:{
                    authorization: authToken,
                },
            }
            )
            console.log(res)
            dispatch({type : "HANDLE_HISTORY", payload : res.data.history})
    } catch(err){
        console.log(err)
    }
}


const deleteFromHistory = async(video, dispatch, authToken) => {
    try{
        const res = await axios.delete(
            `/api/user/history/${video._id}`,
            {
                headers:{
                    authorization: authToken,
                },
            }
            )
            dispatch({type : "HANDLE_HISTORY", payload : res.data.history})
    } catch(err){
        console.log(err)
    }
}

const clearAllHistory = async(dispatch, authToken) => {
    try{
        const res = await axios.delete(
            `/api/user/history/all`,
            {
                headers:{
                    authorization: authToken,
                },
            }
            )
            dispatch({type : "HANDLE_HISTORY", payload : res.data.history})
    } catch(err){
        console.log(err)
    }
}

export {addToHistory, deleteFromHistory, clearAllHistory}