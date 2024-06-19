import React from 'react'
import styled from 'styled-components'

import {
  color,
  space,
  layout,
  flexbox,
  position,
  typography,
  LayoutProps,
  PositionProps,
  ColorProps,
  SpaceProps,
  FlexboxProps,
  TypographyProps,
} from 'styled-system'

interface BoxProps
  extends PositionProps,
    LayoutProps,
    ColorProps,
    SpaceProps,
    FlexboxProps,
    TypographyProps {
  children: React.ReactNode
}

const ContainerBox = styled.div<BoxProps>`
  ${color};
  ${space};
  ${layout};
  ${flexbox};
  ${position};
  ${typography};
`

export const Box: React.FC<BoxProps> = ({ children, ...props }) => {
  return <ContainerBox {...props}>{children}</ContainerBox>
}
