import React, { useState } from 'react'
import { Box, Text, Icon, IconButton } from '@/src/ui'
import styled from 'styled-components'

interface SearchInputProps {}
export const SearchInput: React.FC<SearchInputProps> = () => {
  const [inputValue, setInputValue] = useState('')

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box display="flex" alignItems="center">
        <Icon iconName="search" color="grayDark" size={24} />
        <Text color="black" fontSize="s">
          <StyledInput
            type="text"
            placeholder="Wyszukaj grupę lub tag"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Text>
      </Box>
      <Box>
        <IconButton
          iconName="closeRound"
          color="grayMedium"
          variant="bare"
          onClick={() => setInputValue('')}
        />
      </Box>
    </Box>
  )
}

const StyledInput = styled.input`
  border: none;
  font-size: inherit;
  font-family: inherit;
  outline: 0 none;
  :focus {
    outline: 0 none;
  }
`
