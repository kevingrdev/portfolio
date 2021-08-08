import useTheme from '../../Hooks/useTheme';

import IconButton from '@material-ui/core/IconButton';

const SwitchTheme = () => {
    const { LOGO, onChangeModeDark } = useTheme();

    return (
        <div style={{ display: 'flex',margin:'auto', maxWidth: '1440px', justifyContent: 'flex-end', paddingTop: '10px' }}>
            <IconButton onClick={onChangeModeDark} >
                {LOGO}
            </IconButton>
        </div>
    )
}
export default SwitchTheme;