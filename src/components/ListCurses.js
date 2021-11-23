import Slider from 'react-slick'

import { CURSES_LIST } from '../const/data'

import '../css/listCurses.css'

const ListCurses = (_) => {
  const curses = CURSES_LIST.map((img) => {
    return (
      <li className="container-diploma">
        <img
          className="diploma fade-in-image"
          alt={img.urlImg}
          src={img.urlImg}
        />
      </li>
    )
  })

  const settings = {
    className: 'center',
    infinite: true,
    // dots: true,
    centerPadding: '60px',
    slidesToShow: 3,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      )
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          swipeToSlide: true,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          swipeToSlide: true,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          swipeToSlide: true,
        },
      },
    ],
  }

  return (
    <section className="curses">
      <h2 className="title c-primary mb-28">Cursos y capacitaciones.</h2>
      <div
        style={{
          width: '95%',
          margin: 'auto',
          marginTop: '28px',
          cursor: 'move',
        }}
      >
        <Slider {...settings}>{curses}</Slider>
      </div>
    </section>
  )
}

export default ListCurses
