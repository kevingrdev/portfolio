import React, { useEffect, useState } from 'react'

const Context = React.createContext({});

export const ThemeContextProvider = ({ children }) => {
    const [themeDark, setTheme] = useState(false);
    useEffect(() => {
        let theme = window.localStorage.getItem('theme');
        if (theme==='dark'){
            setTheme(true)
            document.body.style = "background: #090008;";
        }
    }, [])
    return <Context.Provider value={{ themeDark, setTheme }}>
        {children}
    </Context.Provider>
}
export default Context;
