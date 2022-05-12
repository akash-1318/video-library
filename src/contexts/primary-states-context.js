import {createContext, useContext, useState} from "react"

const PrimaryStates = createContext();

const PrimaryStatesProvider = ({children}) => {
    const [sidebar, setSidebar] = useState(false)
    const [modal, setModal] = useState(false)
    return(
        <PrimaryStates.Provider value = {{sidebar, setSidebar, modal, setModal}}>
            {children}
        </PrimaryStates.Provider>
    )
}

const usePrimaryStatesContext = () => useContext(PrimaryStates)

export {PrimaryStatesProvider, usePrimaryStatesContext}