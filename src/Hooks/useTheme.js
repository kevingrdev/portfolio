import { useContext, useEffect } from 'react';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import ThemeContext from '../context/Theme';

const useTheme = () => {
    const { themeDark, setTheme } = useContext(ThemeContext);
    useEffect(() => {
        let theme = window.localStorage.getItem('theme');
        if (theme === 'dark') {
            activeModeDark();
        }
    }, [])

    const LOGO = themeDark === true ? <Brightness7Icon style={{ color: '#EAEF00' }} fontSize='large' /> : < Brightness4Icon style={{ color: '#476072' }} fontSize='large' s />;
    const COLORTITLE = themeDark === true ? 'title-dark' : 'title-normal';
    const COLORTEXT = themeDark === true ? 'text-dark' : 'text-normal';
    // const BACKGROUND = themeDark === true ? 'background-dark' : 'background-normal';
    const activeModeDark = () => {
        setTheme(true)
        document.body.style = "background: #01162C;";
        window.localStorage.setItem('theme', 'dark')
    }
    const desActiveModeDark = () => {
        setTheme(false);
        document.body.style = "background: white;";
        window.localStorage.setItem('theme', 'normal')
    }

    const onChangeModeDark=themeDark===true?desActiveModeDark:activeModeDark;

    return {
        LOGO,
        COLORTITLE,
        COLORTEXT,
        onChangeModeDark:onChangeModeDark,
        STATUS_DARK:themeDark
        // BACKGROUND
    };

}
export default useTheme;
