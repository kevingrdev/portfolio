export const TextSlide = () => {
  const cheers = ['Hola❕', 'Hi❗', 'Olá❕', 'konnichi ha❗']
  return (
    <div className="container-lineUp">
      {cheers.map((item, index) => (
        <div className="lineUp " key={`${item}-${index}`}>
          <p className=" text-slide--top">{item}</p>
        </div>
      ))}
    </div>
  )
}
