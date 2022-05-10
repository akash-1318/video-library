import { createContext, useContext, useState, } from "react"

const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [authCred, setAuthCred] = useState({
        authToken : localStorage.getItem("TOKEN"),
        authStatus : !!localStorage.getItem("TOKEN"),
    })
    return(
        <AuthContext.Provider value={{authCred, setAuthCred}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuthContext = () => useContext(AuthContext)

export {useAuthContext, AuthContextProvider}