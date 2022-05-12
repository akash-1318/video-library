import "./modal.css"
import {usePrimaryStatesContext} from "../../contexts/primary-states-context"

function Modal () {
    const {modal, setModal} = usePrimaryStatesContext();
    return(
        <>
        <div className="modal__container">
            <div className="modal">
                <div className="modal__header">
                    <p>Save to...</p>
                    <i class='bx bx-x' onClick={() => setModal(!modal)}></i>
                </div>
                <div className="playlist__container">
                    <label className="playlist__name">
                        <input type = "checkbox"
                        />
                        Playlist name
                    </label>
                    <label className="playlist__name">
                        <input type = "checkbox"
                        />
                        Playlist name
                    </label>
                </div>
                <div className="create__playlist">
                    <p>Name :</p>
                    <input type = "text"
                    placeholder = "Enter playlist name"
                    />
                </div>
                <button class="create__playlist-btn"><i class='bx bx-plus'></i> create</button>
            </div>
        </div>
        </>
    )
}

export {Modal}