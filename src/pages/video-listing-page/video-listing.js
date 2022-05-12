import "./video-listing.css";
import { Navigation, Sidebar, VideosSection, modal, Modal } from "../../components/compIndex";
import {usePrimaryStatesContext} from "../../contexts/primary-states-context"

function VideoListing() {
    const { modal } = usePrimaryStatesContext();
  return (
    <>
      <Navigation />
      <div className="main__container">
        <Sidebar />
        <VideosSection />
      </div>
      {modal ? (<Modal/>) : null}
    </>
  );
}

export { VideoListing };
