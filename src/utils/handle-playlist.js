import axios from "axios";
import {toast} from "react-toastify";

const addPlaylist = async(title, dispatch, authToken) => {
    try{
        const resp = await axios.post(
            "/api/user/playlists",
            {
               playlist : {title : title},
            },
            {
                headers:{
                    authorization: authToken,
                },
            }
            )
            console.log(resp)
            dispatch({type : "HANDLE_PLAYLIST", payload : resp.data.playlists})
            toast.success(`${title} playlist created`);
    } catch(err){
        toast.error("Error while creating playlist");
        console.log(err)
    }
}

const addVideoToPlaylist = async(title, playlistId, video, dispatch, authToken) => {
    try{
        const resp = await axios.post(
            `/api/user/playlists/${playlistId}`,
            {video},
            {
                headers:{
                    authorization: authToken,
                },
            }
            )
            console.log(resp)
            toast.success(`Video added to ${title} playlist`);
    } catch(err){
        console.log(err)
        toast.error("Error while adding video to playlist");
    }
}

const deleteVideoFromPlaylist = async(title, playlistId, video, dispatch, authToken) => {
    try{
        const resp = await axios.delete(
            `/api/user/playlists/${playlistId}/${video._id}`,
            {
                headers:{
                    authorization: authToken,
                },
            }
            )
            console.log(resp)
            toast.success(`Video deleted from ${title} playlist`);
    } catch(err){
        console.log(err)
        toast.error(`Error while deleting video from ${title} playlist`);
    }
}

const deletePlaylist = async(title, playlistId, video, dispatch, authToken) => {
    try{
        const resp = await axios.delete(
            `/api/user/playlists/${playlistId}`,
            {
                headers:{
                    authorization: authToken,
                },
            }
            )
            console.log(resp)
            dispatch({type : "HANDLE_PLAYLIST", payload : resp.data.playlists})
            toast.success(`${title} playlist deleted`);
    } catch(err){
        console.log(err)
        toast.error(`Error while deleting ${title} playlist`);
    }
}

export {addPlaylist, addVideoToPlaylist, deleteVideoFromPlaylist, deletePlaylist}