import { useRef, useState, useEffect } from "react";

import { CURSES_LIST } from "../const/data";

import "../css/listCurses.css";

const ListCurses = _ => {
  const [disabledRigth, setDisabledRigth] = useState(false);
  const [disabledLefth, setDisabledLefth] = useState(true);
  const [preScroll, setPreScroll] = useState(1);

  const ref = useRef(null);

  useEffect(() => {
    const resize = window.addEventListener("resize", () => {
      setDisabledLefth(false);
      setDisabledRigth(false);
    });

    return () => {
      window.removeEventListener(resize);
    };
  }, []);

  const curses = CURSES_LIST.map(img => {
    return (
      <li>
        <img className="diploma" alt={img.urlImg} src={img.urlImg} />
      </li>
    );
  });

  const ButtonScroll = props => {
    return (
      <button disabled={props.disabled} className={`button-scroll`} {...props}>
        {props.text}
      </button>
    );
  };

  const handleClickScrollRight = () => {
    ref.current.scrollLeft = ref.current.scrollLeft + 320;

    if (ref.current.scrollLeft <= preScroll && preScroll !== 1) {
      setDisabledRigth(true);
    } else {
      setDisabledLefth(false);
    }
    setPreScroll(ref.current.scrollLeft);
  };
  const handleClickScrollLeft = () => {
    ref.current.scrollLeft = ref.current.scrollLeft - 320;
    console.log(ref.current.scrollLeft);
    if (ref.current.scrollLeft === 0) {
      setDisabledLefth(true);
    } else {
      setDisabledRigth(false);
    }
    setPreScroll(ref.current.scrollLeft);
  };
  return (
    <section>
      <h2 className="title c-primary mb-28">Cursos y capacitaciones.</h2>
      <ul ref={ref} className={`list-curses`}>
        {curses}
      </ul>
      <div className="conatiner-list-curses">
        <ButtonScroll
          disabled={disabledLefth}
          text={"<"}
          onClick={handleClickScrollLeft}
        />
        <ButtonScroll
          disabled={disabledRigth}
          text={">"}
          onClick={handleClickScrollRight}
        />
      </div>
    </section>
  );
};

export default ListCurses;
