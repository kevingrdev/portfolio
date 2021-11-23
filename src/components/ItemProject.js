import PropTypes from 'prop-types'

import Button from './Button'

import useTheme from '../hooks/useTheme'

import '../css/itemProject.css'

const ItemProject = ({ href, text, img }) => {
  const { STATUS_DARK } = useTheme()

  const classForContent = `content ${
    STATUS_DARK ? 'content--dark' : 'content--white'
  }`
  const classForItem = `item-proyect ${
    STATUS_DARK ? 'item-proyect--dark' : 'item-proyect--white'
  }`

  return (
    <>
      <div className={classForItem}>
        <div style={{ margin: 'auto' }}>
          <img className="fade-in-image" src={img} alt={text.one} />
        </div>
        <div className={classForContent}>
          <div className="paragraphs">
            <p>{text.one}</p>
            <p>{text.two}</p>
          </div>
          <a href={href} rel="noreferrer" target="_blank">
            <Button
              text={`Ver 👀`}
              textColor={'#fff'}
              colors={{
                primary: '#f50057',
                secondary: '#FF7272',
              }}
              height="40px"
              width="240px"
            />
          </a>
        </div>
      </div>
    </>
  )
}

ItemProject.defaultProps = {
  href: '',
  text: {
    one: '',
    two: '',
  },
  img: '',
}

ItemProject.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.objectOf(PropTypes.string),
  img: PropTypes.string.isRequired,
}

export default ItemProject
