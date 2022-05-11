import "./history.css";
import { Navigation } from "../../components/navigation/navigation";
import { Sidebar } from "../../components/sidebar/sidebar";
import { VideoCard } from "../../components/compIndex";
import { useVideoContext } from "../../contexts/video-context";
import { useAuthContext } from "../../contexts/auth-context";
import { clearAllHistory } from "../../utils/handle-history";
import empty from "../../assets/images/Empty-bag.svg";

function History() {
  const { state, dispatch } = useVideoContext();
  const { history } = state;
  const { authCred } = useAuthContext();
  const { authToken } = authCred;
  console.log(history);
  return (
    <>
      <Navigation />
      <div className="main__container">
        <Sidebar />
        <section className="main__video-container">
          <h1 className="page__text">History</h1>
          {history.length > 0 && (
              <button
              className="clear__history"
              onClick={() => clearAllHistory(dispatch, authToken)}
            >
              {" "}
              <i class="bx bx-trash"></i> Clear all history
            </button>
          )}
          <div className="videos__container">
            {history.length === 0 ? (
              <>
                <div className="empty__video-container">
                  <h2>You haven't watched any video yet !</h2>
                  <img src={empty} className="empty__img" />
                </div>
              </>
            ) : (
              <>
                {history.map((video) => {
                  return <VideoCard videoData={video} key={video.id} />;
                })}
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export { History };
