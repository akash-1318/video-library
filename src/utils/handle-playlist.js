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
            dispatch({type : "ADD_PLAYLIST", payload : resp.data.playlists})
            toast.success(`${title} playlist created`);
    } catch(err){
        toast.error("Error while creating playlist");
        console.log(err)
    }
}

export {addPlaylist}