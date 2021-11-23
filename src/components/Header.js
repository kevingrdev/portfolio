import PropTypes from 'prop-types'

import useTheme from '../hooks/useTheme'

import '../css/header.css'

const HeaderApp = ({ title, description, url }) => {
  const { COLORTITLE, COLORTEXT } = useTheme()

  return (
    <div className="header-app">
      <div className="header-app__item mb-15 container-img">
        <img
          className="avatar no-select fade-in-image"
          alt="i am kevin"
          src={url}
        />
        <span className="fade-in-text">Kevin Gutiérrez Rodríguez</span>
      </div>
      <div className="header-app__item">
        <h1 className={`header--title mt-15 mb-15 fade-in-text ${COLORTITLE}`}>
          {title}
        </h1>
        <p
          className={`header--paragraph mt-15 mb-15  fade-in-text ${COLORTEXT}`}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

HeaderApp.defaultProps = {
  title: 'title',
  description: 'description',
  url: '/kevin.jpg',
}

HeaderApp.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default HeaderApp
