import {useLocation, Navigate} from "react-router-dom"
import {useAuthContext} from "../contexts/auth-context" 

function RequireAuth ({children}) {
    const {authCred} = useAuthContext();
    const {authToken} = authCred;
    const location = useLocation();
    return(
        authToken ? children : <Navigate to = "/login" state={{from : location}} replace/>
    )
}

export {RequireAuth}