import { Box } from '../Box'
import icons from '@/src/ui/Components/Icons/icons'
import { Icon } from '../Icons'
import { Colors } from '../../Theme/interfaces'
import styled from 'styled-components'

export interface IconButtonProps {
  iconName: keyof typeof icons
  color?: keyof Colors
  active?: boolean
  onClick?: () => void
  variant?: 'default' | 'bare'
}

export const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  color = 'black',
  active = false,
  variant = 'default',
  onClick,
}) => {
  return (
    <StyledBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="rounded"
      width={variant === 'bare' ? '20px' : '40px'}
      height={variant === 'bare' ? '20px' : '40px'}
      active={active}
      variant={variant}
      onClick={onClick && onClick}
    >
      <Icon iconName={iconName} color={color} />
    </StyledBox>
  )
}

const StyledBox = styled(Box)<{
  active: boolean
  variant: IconButtonProps['variant']
  onClick?: () => void
}>`
  cursor: pointer;
  transition: 0.2s;
  background-color: ${({ theme: { colors }, active }) =>
    active ? colors.grayLight : colors.white};
  &:hover {
    background-color: ${({ theme: { colors }, variant }) =>
      variant === 'bare' ? colors.white : colors.grayLight};
  }
`
