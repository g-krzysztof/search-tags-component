import React, { useState } from 'react'
import styled from 'styled-components'
import { Box } from '../Box'
import { Icon } from '../Icons'
import { Text } from '../Text'

interface CheckboxProps {
  isChecked: boolean
  setIsChecked: (isChecked: boolean) => void
  label?: string
}

const ContainerCheckbox = styled(Box)<{ isChecked: boolean }>`
  background-color: ${({ theme: { colors }, isChecked }) =>
    isChecked ? colors.blue : colors.grayLight};
  border: 1px solid
    ${({ theme: { colors }, isChecked }) =>
      isChecked ? colors.blue : colors.grayMedium};
  cursor: pointer;
`

export const Checkbox: React.FC<CheckboxProps> = ({
  isChecked,
  setIsChecked,
  label,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      onClick={() => setIsChecked(!isChecked)}
    >
      <ContainerCheckbox
        isChecked={isChecked}
        borderRadius="rectangle"
        display="flex"
        justifyContent="center"
        alignItems="center"
        mr="xxs"
      >
        <Icon
          iconName="check"
          color={isChecked ? 'white' : 'grayLight'}
          size={12}
        />
      </ContainerCheckbox>
      <Box width="180px">
        <StyledText
          color="black"
          fontSize="s"
          fontWeight="medium"
          oneLine={true}
        >
          {label}
        </StyledText>
      </Box>
    </Box>
  )
}

const StyledText = styled(Text)`
  cursor: pointer;
`
