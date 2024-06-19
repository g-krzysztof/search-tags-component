import { Box } from '../../ui'
import icons from '@/src/ui/Components/Icons/icons'
import { Icon } from '../../ui'
import { Colors } from '../../ui/Theme/interfaces'
import styled from 'styled-components'

export interface IconButtonProps {
  iconName: keyof typeof icons
  color?: keyof Colors
  active?: boolean
}

const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  color = 'black',
  active = false,
}) => {
  return (
    <StyledBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="rounded"
      width="40px"
      height="40px"
      active={active}
    >
      <Icon iconName={iconName} color={color} />
    </StyledBox>
  )
}

const StyledBox = styled(Box)<{ active: boolean }>`
  cursor: pointer;
  transition: 0.2s;
  background-color: ${({ theme: { colors }, active }) =>
    active ? colors.grayLight : colors.white};
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.grayLight};
  }
`

export default IconButton
