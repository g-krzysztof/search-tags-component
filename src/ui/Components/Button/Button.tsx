import { Box } from '../Box'
import { Text } from '../Text'
import { Colors } from '../../Theme/interfaces'
import styled from 'styled-components'

export interface ButtonProps {
  color?: keyof Colors
  active?: boolean
  onClick?: () => void
  variant?: 'default' | 'bare'
  label: string
}

export const Button: React.FC<ButtonProps> = ({
  active = false,
  onClick,
  label,
}) => {
  return (
    <StyledBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="rounded"
      active={active}
      onClick={onClick && onClick}
      py="xxs"
    >
      <Text color={active ? 'white' : 'black'} fontSize="s" fontWeight="medium">
        {label}
      </Text>
    </StyledBox>
  )
}

const StyledBox = styled(Box)<{
  active: boolean
  onClick?: () => void
}>`
  cursor: ${({ active }) => (active ? 'pointer' : 'not-allowed')};
  transition: 0.2s;
  background-color: ${({ theme: { colors }, active }) =>
    active ? colors.blue : colors.grayLight};
  &:hover {
    background-color: ${({ theme: { colors }, active }) =>
      active ? colors.blueDark : colors.grayLight};
  }
`
