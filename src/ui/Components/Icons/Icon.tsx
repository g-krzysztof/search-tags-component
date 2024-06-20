import { FC } from 'react'
import styled from 'styled-components'
import { ColorProps, SpaceProps, TypographyProps } from 'styled-system'
import { Colors } from '../../Theme/interfaces'
import { Box } from '../Box'
import icons from './icons'

interface Icon extends SpaceProps, ColorProps, TypographyProps {
  iconName: keyof typeof icons
  size?: number
  color?: keyof Colors
}
export const Icon: FC<Icon> = ({
  iconName,
  color = 'currentColor',
  size = 24,
}) => {
  const { viewBox, path } = icons[iconName]

  return (
    <IconWrapper
      size={size}
      color={color}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
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
