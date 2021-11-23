import IconButton from '@material-ui/core/IconButton'

import useTheme from '../hooks/useTheme'

const SwitchTheme = (_) => {
  const { LOGO, onChangeModeDark } = useTheme()

  return (
    <div
      className="fade-in-text"
      style={{
        display: 'flex',
        margin: 'auto',
        maxWidth: '1440px',
        justifyContent: 'flex-end',
        paddingTop: '10px',
      }}
    >
      <IconButton onClick={onChangeModeDark}>{LOGO}</IconButton>
    </div>
  )
}

export default SwitchTheme
