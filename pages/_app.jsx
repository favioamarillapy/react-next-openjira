import '../styles/globals.css'

import { CssBaseline, ThemeProvider } from '@mui/material'

import { darkTheme } from '../themes'



function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
