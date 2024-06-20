import React from 'react'
import styled from 'styled-components'

import { Borders, Radii, Space } from '@/src/ui/Theme/interfaces'
import {
  BorderProps,
  BorderRadiusProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
  border,
  borderRadius,
  color,
  flexbox,
  layout,
  position,
  space,
  typography,
} from 'styled-system'

interface BoxProps
  extends PositionProps,
    LayoutProps,
    ColorProps,
    SpaceProps,
    FlexboxProps,
    TypographyProps,
    BorderProps,
    BorderRadiusProps {
  children: React.ReactNode
  border?: keyof Borders
  borderRadius?: keyof Radii
  p?: keyof Space
  px?: keyof Space
  py?: keyof Space
  pl?: keyof Space
  pr?: keyof Space
  pt?: keyof Space
  pb?: keyof Space
  m?: keyof Space
  mx?: keyof Space
  mt?: keyof Space
  mb?: keyof Space
  onClick?: () => void
}

const ContainerBox = styled.div<BoxProps>`
  ${color};
  ${space};
  ${layout};
  ${flexbox};
  ${position};
  ${typography};
  ${border};
  ${borderRadius};
`

export const Box: React.FC<BoxProps> = ({ children, ...props }) => {
  return <ContainerBox {...props}>{children}</ContainerBox>
}
