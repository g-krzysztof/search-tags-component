'use client'

import SearchTags from '@/src/components/SearchTags/SearchTags'
import SideMenu from '@/src/components/SideMenu/SideMenu'
import isPropValid from '@emotion/is-prop-valid'
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import { Box, GlobalStyle, theme, Text } from '../ui/'
import { menuItems } from '@/lib/dummyData'

export default function Home() {
  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Box display="flex" flexDirection="column" pl="xxxxl">
          <Box pt="xxl">
            <Text>
              Komponent jest podpięty pod Marvel API. Zamiast nazw tagów, należy
              wpisać imiona bohaterów, np. Hulk, Thor.
            </Text>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
            pt="xxxl"
            width="264px"
          >
            <SideMenu menuItems={menuItems} />
            <Box pl="xs">
              <SearchTags />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </StyleSheetManager>
  )
}

function shouldForwardProp(
  propName: string,
  target: string | React.ComponentType,
): boolean {
  if (typeof target === 'string') {
    // For HTML elements, forward the prop if it is a valid HTML attribute
    return isPropValid(propName)
  }
  // For other elements, forward all props
  return true
}
