import '../styles/globals.css'

import { CssBaseline, ThemeProvider } from '@mui/material'

import { darkTheme } from '../themes'
import { UiProvider } from '../context/ui'



function MyApp({ Component, pageProps }) {
  return (
    <UiProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UiProvider>
  )
}

export default MyApp
