import "./video-listing.css"
import {Navigation} from "../../components/compIndex"
import {Sidebar} from "../../components/compIndex"
import {VideosSection} from "../../components/compIndex"

function VideoListing(){
    return(
        <>
        <Navigation/>
        <div className="main__container">
        <Sidebar/>
        <VideosSection/>
        </div>
        </>
    )
}

export {VideoListing}