import { Box, Text, Divider, Chip, IconButton } from '../../ui'

export interface SearchTagsProps {}

const chipsItems = [
  {
    chipId: 'chip01',
    label: 'Gwiazda',
  },
  {
    chipId: 'chip02',
    label: 'Sejm',
  },
  {
    chipId: 'chip03',
    label: 'Mariusz Kamiński',
  },
]

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
    </Box>
  )
}

export default SearchTags
