import React, { useState } from 'react'
import { Box, Text, Checkbox } from '@/src/ui'
import styled from 'styled-components'

interface SearchItemProps {
  label: string
  tagId: string
  score: string
}

export const SearchItem: React.FC<SearchItemProps> = ({
  label,
  tagId,
  score,
}) => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <StyledBox
      key={tagId}
      px="xxs"
      py="xxxs"
      my="2px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      border={isChecked ? 'blueMedium' : 'whiteMedium'}
      borderRadius="rounded"
    >
      <Checkbox
        isChecked={isChecked}
        label={label}
        setIsChecked={setIsChecked}
      />
      <Text fontSize="xs" color="grayMedium">
        {score}
      </Text>
    </StyledBox>
  )
}

const StyledBox = styled(Box)`
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.grayLight};
    border: ${({ theme: { borders } }) => borders.grayLight};
  }
`
