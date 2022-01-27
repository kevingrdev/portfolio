import { CURSES_LIST } from 'src/const/data'
import { useNearScreen } from 'src/hooks/useNearScreen'
export const Curses = () => {
  const cursses = CURSES_LIST.map((url) => <CurseItem key={url} url={url} />)
  return (
    <section className="curses">
      <h3 className="text-seccond upperCase">Cursos con certificaciones</h3>
      <ul className="ul-curses">{cursses}</ul>
    </section>
  )
}

const CurseItem = ({ url }) => {
  const { isNearScreen, frontRefF } = useNearScreen()
  return (
    <li ref={frontRefF}>
      {isNearScreen && (
        <img
          className="fade-in-image"
          key={url}
          src={url}
          alt={`curse ${url}`}
        />
      )}
    </li>
  )
}
