import React from 'react'
import PropTypes from 'prop-types'

import useTheme from '../hooks/useTheme'

import '../css/button.css'

const Button = ({ text, colors, width, height, textColor }) => {
  const { STATUS_DARK } = useTheme()

  const { primary, secondary } = colors

  return (
    <div
      className={STATUS_DARK ? 'button-general--dark' : 'button-general'}
      style={{
        width: width,
        height: height,
        backgroundColor: 'linea-gradient(to right,red,blue)',
        background: `linear-gradient( to right, ${primary}, ${secondary})`,
      }}
    >
      <p style={{ color: textColor }}> {text} </p>{' '}
    </div>
  )
}

Button.defaultProps = {
  text: '',
  colors: {
    primary: '#FF0C7F',
    secondary: '#20294F',
  },
  width: 'auto',
  height: 'auto',
  textColor: 'whitesmoke',
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  colors: PropTypes.objectOf(PropTypes.string),
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
}

export default Button
