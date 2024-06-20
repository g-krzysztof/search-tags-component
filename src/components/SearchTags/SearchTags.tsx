import { activeTagsMock, contextMenuItemsMock } from '@/lib/dummyData'
import {
  ContextMenuItem,
  SearchInput,
  SearchItem,
  StrengthProgress,
} from '@/src/components'
import { useEffect, useState } from 'react'
import { Box, Button, Chip, Divider, IconButton, Text } from '../../ui'
export interface SearchTagsProps {}

export interface TagProps {
  tagId: string
  label: string
  score: string
  selected?: boolean
}

const SearchTags: React.FC<SearchTagsProps> = () => {
  const [inputValue, setInputValue] = useState('')
  const [activeTags, setActiveTags] = useState(activeTagsMock)
  const [tagsData, setTagsData] = useState<TagProps[]>([])
  const [listAvailableTags, setListAvailableTags] = useState<TagProps[]>([])
  const [selectedTags, setSelectedTags] = useState<TagProps[]>([])

  useEffect(() => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (tagsData) {
        const newTagsDataArray = [...tagsData.tags]
        setTagsData(newTagsDataArray)
      })
  }, [])

  useEffect(() => {
    const activeTagsIds = activeTags.map((tag) => tag.tagId)
    const tagsDataIds = tagsData.map((tag) => tag.tagId)
    const availableTagsIds = tagsDataIds.filter(
      (id) => !activeTagsIds.includes(id),
    )
    const availableTags = tagsData.filter((tag) =>
      availableTagsIds.includes(tag.tagId) ? tag : false,
    )
    setListAvailableTags(availableTags)
  }, [tagsData, activeTags])

  const handleRemoveActiveTag = (tagId: string) => {
    const newTagsArray = [...activeTags]
    setActiveTags(newTagsArray.filter((tag) => tag.tagId !== tagId))
  }

  const handleSaveOnClick = () => {
    const newActiveTagsArray = [...activeTags]
    const newSelectedTagsArray = [...selectedTags]
    newSelectedTagsArray.forEach((tag) => {
      tag.selected = false
      newActiveTagsArray.unshift(tag)
    })
    setActiveTags(newActiveTagsArray)
    setSelectedTags([])
    setInputValue('')
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      border="grayLight"
      borderRadius="rounded"
      p="xxs"
      width="268px"
    >
      <Box display="flex" justifyContent="space-between" p="xxs">
        <Text fontSize="xl" color="black" fontWeight="bold">
          Tagi
        </Text>
        <IconButton
          iconName="close"
          variant="bare"
          onClick={() => console.log('close tags')}
        />
      </Box>
      <Box px="xxs" pt="xs" pb="s">
        <SearchInput inputValue={inputValue} setInputValue={setInputValue} />
      </Box>
      <Divider color="grayLight" />
      {!inputValue && (
        <>
          <Box display="flex" pt="xxs" pb="xxxs" flexWrap="wrap">
            {activeTags.map(({ tagId, label }) => (
              <Box key={tagId} pr="xxxs" pb="xxxs">
                <Chip
                  label={label}
                  onClick={() => handleRemoveActiveTag(tagId)}
                />
              </Box>
            ))}
            {activeTags.length === 0 && (
              <Box px="xxs" py="xxxs">
                <Text fontSize="s" color="redDark" fontWeight="medium">
                  Wyszukaj i dodaj pierwszy tag
                </Text>
              </Box>
            )}
          </Box>
          <Divider color="grayLight" />
          <Box
            py="xxs"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
          >
            {contextMenuItemsMock.map(
              ({ cmItemId, iconName, label, active }) => (
                <ContextMenuItem
                  key={cmItemId}
                  label={label}
                  onClick={() => console.log({ label })}
                  iconName={iconName}
                  active={active}
                />
              ),
            )}
          </Box>
          <Divider color="grayLight" />
          <StrengthProgress tagsArray={activeTags} />
        </>
      )}
      {inputValue && (
        <Box display="flex" flexDirection="column">
          <Box display="flex" flexDirection="column" py="xxs">
            {listAvailableTags.map((tag) => (
              <SearchItem
                key={tag.tagId}
                tag={tag}
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
              />
            ))}
          </Box>
          <Box display="flex" flexDirection="column">
            <Box>
              <Button
                label="Zapisz"
                active={selectedTags.length > 0}
                onClick={() => handleSaveOnClick()}
              />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default SearchTags
