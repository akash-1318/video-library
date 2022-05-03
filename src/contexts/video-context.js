import axios from 'axios';
import {createContext, useContext, useReducer, useEffect} from 'react'
import { videoReducer } from '../reducers/video-reducer';

const VideoContext = createContext();

const initialStates = {
    videosData : [],
}

const VideoContextProvider = ({children}) =>{

    const [state, dispatch] = useReducer(videoReducer, initialStates)

    useEffect(()=>{
        const videoData = async() =>{
            try{
                const {data : {videos}} = await axios.get("/api/videos")
                dispatch({type : "GET_VIDEOS", payload : videos})
                console.log(videos)
            } catch(err){
                console.log(err)
            }
        }
        videoData()
    },[])

    return(
        <VideoContext.Provider value = {{state, dispatch}}>
            {children}
        </VideoContext.Provider>
    )
}

const useVideoContext = () => useContext(VideoContext); 

export {VideoContextProvider, useVideoContext}