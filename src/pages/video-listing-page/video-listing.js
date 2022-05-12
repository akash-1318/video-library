import "./video-listing.css";
import { Navigation, Sidebar, VideosSection } from "../../components/compIndex";

function VideoListing() {
  return (
    <>
      <Navigation />
      <div className="main__container">
        <Sidebar />
        <VideosSection />
      </div>
    </>
  );
}

export { VideoListing };
