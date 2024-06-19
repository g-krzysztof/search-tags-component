import styled from 'styled-components'
import { Box } from '../Box'
import icons from './icons'
import React, { FC } from 'react'
import { SpaceProps, ColorProps, TypographyProps } from 'styled-system'
import { theme } from '@/src/ui'

interface Icon extends SpaceProps, ColorProps, TypographyProps {
  iconName: keyof typeof icons
  size?: number
  color?: keyof typeof theme.colors
}
export const Icon: FC<Icon> = ({
  iconName,
  color = 'currentColor',
  size = 24,
  ...props
}) => {
  const { viewBox, path } = icons[iconName]

  return (
    <IconWrapper size={size} {...props} color={color}>
      <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
        <path fill="currentColor" d={path} />
      </svg>
    </IconWrapper>
  )
}

const IconWrapper = styled(Box)`
  width: ${({ size }) => size};
  height: auto;
`
