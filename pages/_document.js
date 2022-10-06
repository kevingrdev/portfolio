import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Kevin Gutiérrez : :: Frontend Developer</title>

        <meta
          name="description"
          content="kevin Gutiérrez desarrollador front-end con React y esté es mi portafolio de trabajos destacados."
        />
        <meta name="keywords" content="kevin Gutiérrez, Frontend Developer" />
        <meta name="author" content="kevin Gutiérrez" />
        <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kevingr.dev/" />
        <meta
          property="og:title"
          content="Kevin Gutiérrez : :: Frontend Developer"
        />
        <meta property="og:image" content="https://kevingr.dev/web.png" />
        <meta
          name="publish_date"
          property="og:publish_date"
          content="@post.Published.Value.ToString(2022-03-21T00:00:00-0600)"
        />
        <meta
          property="og:description"
          content="Soy un apasionado por las tecnologías particularmente por React y todo lo relacionado con el mundo de javascript. Mi meta como desarrollador es escribir menos código más eficiente, combinando el poder de componentes recusables con frameworks modernos...."
        />
        <meta property="og:locale" content="es" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
