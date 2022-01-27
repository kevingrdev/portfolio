import { useEffect, useState } from 'react'

export const TextSlide = () => {
  const [currentGreeting, setCurrentGreeting] = useState(0)
  const cheers = ['Hola❕', 'Hi❗', 'Olá❕', 'konnichi ha❗']
  const limint = cheers.length

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((pre) => (limint == pre + 1 ? 0 : pre + 1))
    }, 2000)
    return () => clearInterval(interval)
  })

  return <p className="text-slide text-slide--top">{cheers[currentGreeting]}</p>
}
