import {createContext, useContext, useState} from "react"

const PrimaryStates = createContext();

const PrimaryStatesProvider = ({children}) => {
    const [sidebar, setSidebar] = useState(false)
    return(
        <PrimaryStates.Provider value = {{sidebar, setSidebar}}>
            {children}
        </PrimaryStates.Provider>
    )
}

const usePrimaryStatesContext = () => useContext(PrimaryStates)

export {PrimaryStatesProvider, usePrimaryStatesContext}