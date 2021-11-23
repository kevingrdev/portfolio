import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

import useTheme from '../hooks/useTheme'

import '../css/footer.css'

const Footer = (_) => {
  const { COLORTEXT, COLORTITLE } = useTheme()

  return (
    <footer className="footer">
      <div className="container-icons">
        <a
          className={`fade-in-text ${COLORTEXT}`}
          href="https://www.instagram.com/kevvingr/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon fontSize="medium" />
        </a>
        <a
          className={`fade-in-text ${COLORTEXT}`}
          href="https://www.linkedin.com/in/kevin-gutierrez-3679181b5/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon fontSize="medium" />
        </a>
        <a
          className={`fade-in-text ${COLORTEXT}`}
          href="https://github.com/keivnGutierrez"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon fontSize="medium" />
        </a>
      </div>
      <p className={`fade-in-text ${COLORTITLE}`}>
        Copyright ©2021 All rights reserved
      </p>
    </footer>
  )
}

export default Footer
