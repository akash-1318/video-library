import {createContext, useContext, useEffect, useState} from "react"

const ThemeContext = createContext();

const getTheme = localStorage.getItem("Theme")

const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState("dark")

    useEffect(()=>{
        setTheme(getTheme)
    },[])

    return(
        <ThemeContext.Provider value = {{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

const useThemeContext = () => useContext(ThemeContext)

export {ThemeContextProvider, useThemeContext}