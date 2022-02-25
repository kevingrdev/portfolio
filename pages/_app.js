import 'styles/App.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height"
        />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Soy kevin Gutiérrez y esté es mi portafolio de trabajos destacados."
        />
        <meta name="twitter:title" content="KEVIN - DEVELOPER" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:locale" content="es" />
        <meta property="og:url" content="https://kevingr.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="KEVIN - DEVELOPER" />
        <meta property="og:title" content="KEVIN - DEVELOPER" />

        <meta property="og:image" content="web.png" />
        <meta name="author" content="Kevin Guti├®rrez" />

        <title>KEVIN - DEVELOPER</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
