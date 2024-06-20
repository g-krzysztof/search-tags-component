import React from 'react'
import styled from 'styled-components'

import { color, typography, ColorProps, TypographyProps } from 'styled-system'
import {
  FontSizes,
  FontWeights,
  LineHeights,
  Colors,
} from '@/src/ui/Theme/interfaces'

interface TextProps extends ColorProps, TypographyProps {
  children: React.ReactNode
  fontSize?: keyof FontSizes
  fontWeight?: keyof FontWeights
  lineHeight?: keyof LineHeights
  color?: keyof Colors
  oneLine?: boolean
}

const ContainerText = styled.div<TextProps>`
  ${color};
  ${typography};
  ${({ oneLine }) =>
    oneLine &&
    `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`};
`

export const Text: React.FC<TextProps> = ({ children, ...props }) => {
  return <ContainerText {...props}>{children}</ContainerText>
}
