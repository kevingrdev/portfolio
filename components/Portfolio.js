import { PROJECTS } from 'public/data'
import { useNearScreen } from 'hooks/useNearScreen'

export const Portfolio = () => {
  return (
    <section className="portfolio">
      <header>
        <h3 className="upperCase">
          <span className="text-seccond">-</span>Portafolio
        </h3>
        <h6 className="upperCase text-seccond">proyectos seleccionados</h6>
      </header>
      <ul className="list">
        {PROJECTS.map((project) => (
          <ItemPortfolio key={project.title} {...project} />
        ))}
      </ul>
    </section>
  )
}

const ItemPortfolio = ({ title, type, tecnologies, url, img }) => {
  const { isNearScreen, frontRefF } = useNearScreen()

  return (
    <li className="item-portfolio" ref={frontRefF}>
      {isNearScreen && (
        <>
          <div>
            <div className="container-anchor">
              <a href={url} target="_blank">
                <h4 className="no-select">{title}</h4>
              </a>
              <a href={url} target="_blank">
                <span>{'<-Ver'}</span>
              </a>
            </div>
            <p className="upperCase text-seccond no-select">{type}</p>
            <ul className="upperCase text-seccond no-select">
              {tecnologies.join('-')}
            </ul>
          </div>
          <img className="fade-in-image" src={img} alt={`curse ${url}`} />
        </>
      )}
    </li>
  )
}
