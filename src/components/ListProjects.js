import { PORFOLIO_LIST } from '../const/data'
import ItemProject from './ItemProject.js'

import '../css/listProjects.css'

const ListProjects = (_) => {
  const listData = PORFOLIO_LIST.map((work) => (
    <ItemProject href={work.href} text={work.text} img={work.img} />
  ))

  return (
    <section id="jobPage" className="jobs">
      <h2 className="title c-primary"> Proyectos personales </h2>{' '}
      <div className="list-works"> {listData} </div>{' '}
    </section>
  )
}

export default ListProjects
