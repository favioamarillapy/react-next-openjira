import '../styles/globals.css'

import { CssBaseline, ThemeProvider } from '@mui/material'

import { darkTheme } from '../themes'
import { UiProvider } from '../context/ui'
import { EntryProvider } from '../context/entries'



function MyApp({ Component, pageProps }) {
  return (
    <EntryProvider>
      <UiProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UiProvider>
    </EntryProvider>
  )
}

export default MyApp
