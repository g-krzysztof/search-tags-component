import { TagProps } from '@/src/components'
import { Box, Checkbox, Text } from '@/src/ui'
import React from 'react'
import styled from 'styled-components'

interface SearchItemProps {
  tag: TagProps
  selectedTags: TagProps[]
  setSelectedTags: (tags: TagProps[]) => void
}

export const SearchItem: React.FC<SearchItemProps> = ({
  tag,
  selectedTags,
  setSelectedTags,
}) => {
  const { label, tagId, score, selected = false } = tag
  const handleOnClick = (tag: TagProps) => {
    const { tagId, selected } = tag
    const newSelectedTagsArray = [...selectedTags]
    if (selected) {
      tag.selected = false
      const arrayReduceBySelected = newSelectedTagsArray.filter(
        (tag) => tag.tagId !== tagId,
      )
      setSelectedTags(arrayReduceBySelected)
    } else {
      const selectedTag = tag
      selectedTag.selected = true
      newSelectedTagsArray.unshift(selectedTag)
      setSelectedTags(newSelectedTagsArray)
    }
  }

  return (
    <StyledBox
      key={tagId}
      px="xxs"
      py="xxxs"
      my="2px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      border={selected ? 'blueMedium' : 'whiteMedium'}
      borderRadius="rounded"
    >
      <Checkbox
        isChecked={selected}
        label={label}
        onClick={() => handleOnClick(tag)}
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
