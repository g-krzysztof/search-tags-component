'use client'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme, Box, Icon } from '../ui/'
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Box display="flex" justifyContent="center">
        Hello world
        <Icon iconName="info" color="black" />
        <Icon iconName="gear" color="blue" />
        <Icon iconName="tag" color="redDark" />
        <Icon iconName="user" color="greenLight" />
        <Icon iconName="chat" color="purple" />
        <Icon iconName="search" color="redLight" />
        <Icon iconName="close" color="greenDark" />
        <Icon iconName="infoRound" color="black" />
        <Icon iconName="closeRound" color="blue" />
        <Icon iconName="tagPopular" color="redDark" />
        <Icon iconName="ai" color="greenLight" />
        <Icon iconName="aiFill" color="greenDark" />
        <Icon iconName="check" color="purple" />
      </Box>
    </ThemeProvider>
  )
}
