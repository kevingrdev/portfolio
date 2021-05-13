import React, { useContext } from 'react';
import ThemeContext from "../../context/Theme";
import IconButton from '@material-ui/core/IconButton';

import useTheme from '../../Hooks/useTheme';

const SwitchTheme = () => {
    const {LOGO} = useTheme();
    const { themeDark, setTheme } = useContext(ThemeContext)
   
    const HandleClick = () => {
        setTheme(!themeDark);
        console.log(themeDark);
        if (themeDark) {
            document.body.style = "background: white;";
            window.localStorage.setItem('theme','normal')
        } else {
            document.body.style = "background: #090008;";
            window.localStorage.setItem('theme','dark')
        }
        console.log(window.localStorage.getItem('theme'));
    };

    return (
        <div style={{ float:'right' }}>
            <IconButton onClick={HandleClick} >
                {LOGO}
            </IconButton>
        </div>
    )
}
export default SwitchTheme;