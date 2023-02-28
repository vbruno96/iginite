import { ThemeProvider } from 'styled-components'

import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
import { CyclesContextProvider } from './contexts/CycleContext'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CyclesContextProvider>
        <RouterProvider router={router} />
      </CyclesContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
