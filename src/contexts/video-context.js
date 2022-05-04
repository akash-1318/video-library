import axios from 'axios';
import {createContext, useContext, useReducer, useEffect} from 'react'
import { videoReducer } from '../reducers/video-reducer';

const VideoContext = createContext();

const initialStates = {
    videosData : [],
    categoriesData : [],
    singleCategory : "All",
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

    useEffect(() => {
        const getCategory = async() => {
            try{
                const {data : {categories}} = await axios.get("/api/categories")
                console.log(categories)
                dispatch({type : "GET_CATEGORY", payload : categories})
            } catch(err){
                console.log(err)
            }
        }
        getCategory()
    },[])

    return(
        <VideoContext.Provider value = {{state, dispatch}}>
            {children}
        </VideoContext.Provider>
    )
}

const useVideoContext = () => useContext(VideoContext); 

export {VideoContextProvider, useVideoContext}