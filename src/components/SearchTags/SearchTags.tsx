import {
  Box,
  Text,
  Divider,
  Chip,
  IconButton,
  Button,
  Checkbox,
} from '../../ui'
import {
  ContextMenuItem,
  StrengthProgress,
  SearchInput,
  SearchItem,
} from '@/src/components'
import { chipsItems, contextMenuItems } from '@/lib/dummyData'
import { useEffect, useState } from 'react'
export interface SearchTagsProps {}

const SearchTags: React.FC<SearchTagsProps> = () => {
  const [inputValue, setInputValue] = useState('testFill')
  const [tagsData, setTagsData] = useState<
    {
      tagId: string
      label: string
      score: string
    }[]
  >([])

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
        setTagsData(tagsData.tags)
      })
  }, [])

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
            {chipsItems.map(({ chipId, label }) => (
              <Box key={chipId} pr="xxxs" pb="xxxs">
                <Chip
                  label={label}
                  onClick={() => console.log(`remove tag "${label}"`)}
                />
              </Box>
            ))}
          </Box>
          <Divider color="grayLight" />
          <Box
            py="xxs"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
          >
            {contextMenuItems.map(({ cmItemId, iconName, label, active }) => (
              <ContextMenuItem
                key={cmItemId}
                label={label}
                onClick={() => console.log({ label })}
                iconName={iconName}
                active={active}
              />
            ))}
          </Box>
          <Divider color="grayLight" />
          <StrengthProgress tagsArray={chipsItems} />
        </>
      )}
      {inputValue && (
        <Box display="flex" flexDirection="column">
          <Box display="flex" flexDirection="column" py="xxs">
            {tagsData.map(({ tagId, label, score }) => (
              <SearchItem
                key={tagId}
                label={label}
                tagId={tagId}
                score={score}
              />
            ))}
          </Box>
          <Box display="flex" flexDirection="column">
            <Box>
              <Button
                label="Zapisz"
                active={true}
                onClick={() => console.log('zapisz')}
              />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default SearchTags
