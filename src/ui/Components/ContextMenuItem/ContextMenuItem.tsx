import React from 'react'
import { Box } from '../Box'
import { Text } from '../Text'
import { Icon } from '../Icons/Icon'
import icons from '@/src/ui/Components/Icons/icons'
import styled from 'styled-components'

interface ChipProps {
  label: string
  onClick: () => void
  iconName: keyof typeof icons
  active: boolean
}

export const ContextMenuItem: React.FC<ChipProps> = ({
  label,
  onClick,
  iconName,
  active,
}) => {
  return (
    <StyledBox
      py="xxxs"
      my="xxxs"
      onClick={active ? onClick : () => console.log('not active')}
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      width="190px"
    >
      <Box pl="xxxs" pr="xxs" onClick={onClick}>
        <Icon
          iconName={iconName}
          color={active ? 'purple' : 'grayMedium'}
          size={18}
        />
      </Box>
      <Text
        color={active ? 'black' : 'grayMedium'}
        fontSize="s"
        fontWeight="medium"
      >
        {label}
      </Text>
    </StyledBox>
  )
}

const StyledBox = styled(Box)`
  cursor: pointer;
`
