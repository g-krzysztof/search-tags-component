import { Box, Text, Divider, Chip, IconButton, Button } from '../../ui'
import {
  ContextMenuItem,
  StrengthProgress,
  SearchInput,
} from '@/src/components'
import { chipsItems, contextMenuItems } from '@/lib/dummyData'
import { useState } from 'react'

export interface SearchTagsProps {}

const SearchTags: React.FC<SearchTagsProps> = () => {
  const [inputValue, setInputValue] = useState('testFill')
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
        <Box>
          <Button
            label="Zapisz"
            active={true}
            onClick={() => console.log('zapisz')}
          />
        </Box>
      )}
    </Box>
  )
}

export default SearchTags
