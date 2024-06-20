'use client'

import SearchTags from '@/src/components/SearchTags/SearchTags'
import SideMenu, { SideMenuProps } from '@/src/components/SideMenu/SideMenu'
import isPropValid from '@emotion/is-prop-valid'
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import { Box, GlobalStyle, theme } from '../ui/'

const menuItems: SideMenuProps['menuItems'] = [
  {
    itemId: '01',
    iconName: 'info',
  },
  {
    itemId: '02',
    iconName: 'chat',
  },
  {
    itemId: '03',
    iconName: 'gear',
  },
  {
    itemId: '04',
    iconName: 'tag',
    active: true,
  },
  {
    itemId: '05',
    iconName: 'user',
  },
]

export default function Home() {
  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Box display="flex" pl="xxxxl">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
            pt="xxxxl"
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

// @ts-ignore
function shouldForwardProp(propName, target) {
  if (typeof target === 'string') {
    // For HTML elements, forward the prop if it is a valid HTML attribute
    return isPropValid(propName)
  }
  // For other elements, forward all props
  return true
}
