import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

function setInitialColorMode() {
  function getInitialColorMode() {
    const darkTheme = window.localStorage.getItem('tbn-portfolio-darkmode')

    return JSON.parse(darkTheme) ? 'dark' : 'light'
  }

  const colorMode = getInitialColorMode()

  if (colorMode === 'dark') {
    document.body.classList.add('dark')
  }
}

const setTheme = `(function() {
  ${setInitialColorMode.toString()}
  setInitialColorMode();
})()
`
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
          <meta name='theme-color' content='#fbad3c' />
          <link rel='icon' type='image/png' href='/favicon.png' />
          <meta name='theme-color' content='#fbad3c' />
          <meta name='msapplication-TileColor' content='#fbad3c' />
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: setTheme }}></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
