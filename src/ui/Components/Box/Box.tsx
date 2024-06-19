import React from 'react'
import styled from 'styled-components'

import {
  color,
  space,
  layout,
  flexbox,
  position,
  typography,
  border,
  borderRadius,
  LayoutProps,
  PositionProps,
  ColorProps,
  SpaceProps,
  FlexboxProps,
  TypographyProps,
  BorderProps,
  BorderRadiusProps,
} from 'styled-system'
import { Borders, Radii, Space } from '@/src/ui/Theme/interfaces'

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
