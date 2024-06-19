'use client'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../ui/'
import { Box } from '../ui/'
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Box display="flex" justifyContent="center">
        Hello world
      </Box>
    </ThemeProvider>
  )
}
