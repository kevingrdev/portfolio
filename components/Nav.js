import { useState } from 'react'

export const Nav = () => {
  const [classHover, setClassHover] = useState('')
  const handleHover = () => {
    setClassHover('line-effect')
  }
  const handleOut = () => {
    setClassHover('')
  }

  return (
    <nav className="navbar">
      <ul>
        <li>
          <a
            className="text-seccond"
            target="__blank"
            href="https://www.linkedin.com/in/kevin-gutierrez-3679181b5/"
          >
            linkedin
          </a>
        </li>
        <li
          className={`text-line  ${classHover} `}
          onMouseOut={handleOut}
          onMouseOver={handleHover}
        >
          <a href="mailto:kevinngr1@gmail.com">Envíame un email</a>
        </li>
      </ul>
    </nav>
  )
}
