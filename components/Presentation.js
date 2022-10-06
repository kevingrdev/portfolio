export const Presentation = () => {
  return (
    <section className="presentation">
      <header>
        <h3 className="no-select">Desarrollador Frontend</h3>
        <h4 className="text-seccond upperCase no-select">
          con base en tlaxcala
        </h4>
      </header>
      <section>
        <div className="max-with-800">
          <h5 className="no-select">
            Actualmente trabajo en el Frontend para Magno Technology
            desarrollado ClaroShop Colombia una tienda el linea con millones de
            usuarios.
          </h5>
          <p className="text-seccond no-select">
            Soy un apasionado por las tecnologías particularmente por React y
            todo lo relacionado con el mundo de javascript.{' '}
          </p>
          <p className="text-seccond no-select">
            Mi meta como desarrollador es escribir menos código más eficiente,
            combinando el poder de componentes recusables con frameworks
            modernos. (React y Vue).
          </p>
        </div>
        <img src="/iamKevin.jpg" className="fade-in-image" />
      </section>
    </section>
  )
}
