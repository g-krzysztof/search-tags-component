import { Box } from '../../ui'

export interface SearchTagsProps {}

const SearchTags: React.FC<SearchTagsProps> = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      border="grayLight"
      borderRadius="rounded"
      p="xxxs"
      width="264px"
    >
      hello search tags
    </Box>
  )
}

export default SearchTags
