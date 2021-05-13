import { useContext } from 'react';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import ThemeContext from '../context/Theme';

const useTheme = () => {
    const { themeDark } = useContext(ThemeContext);
    const LOGO = themeDark === true ? <Brightness7Icon style={{ color: '#EAEF00' }} fontSize='large' /> : < Brightness4Icon fontSize='large' style={{ color: '#012E31' }} />;
    const COLORTITLE = themeDark === true ? 'title-dark' : 'title-normal';
    const COLORTEXT = themeDark === true ? 'text-dark' : 'text-normal';
    const BACKGROUND =themeDark === true ? 'background-dark' : 'background-normal';
    
    return {
        LOGO,
        COLORTITLE,
        COLORTEXT,
        BACKGROUND
    };

}
export default useTheme;
