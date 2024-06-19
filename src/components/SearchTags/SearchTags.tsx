import { Box, Text, Divider, Chip, IconButton, ContextMenuItem } from '../../ui'
import { chipsItems, contextMenuItems } from '@/lib/dummyData'

export interface SearchTagsProps {}

const SearchTags: React.FC<SearchTagsProps> = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      border="grayLight"
      borderRadius="rounded"
      p="xxs"
      width="264px"
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
      <Divider color="grayLight" />
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
      <Box py="xxs" display="flex" flexDirection="column">
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
    </Box>
  )
}

export default SearchTags
