import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import HeaderApp from "./";

describe("<HeaderApp/>", () => {
  const data = {
    title: "Hola, soy Kevin, programador.",
    description:
      "Tengo dos años de experiencia en el mundo de la programación, comence desarrollando en PHP, actualmente mi especialidad es React.js, pero tengo experiencia en el mundo movil y backend. ¡Me gusta aprender tecnologías nuevas!",
    btnText: "Colaborar conmigo..",
  };

  test("renders component", () => {
    const component = render(
      <HeaderApp
        title={data.title}
        description={data.description}
        btnText={data.btnText}
      />
    );
    component.getByText(data.title);
    component.getByText(data.description);
    component.getByText(data.btnText);
  });

  test("When values null", () => {
    const component = render(<HeaderApp />);
    component.getByText("title");
    component.getByText("description");
    component.getByText("button text");
  });
});
