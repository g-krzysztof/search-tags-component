import React from 'react'
import { Box } from '../Box'
import { Text } from '../Text'
import { IconButton } from '../IconButton'

interface ChipProps {
  label: string
  onClick: () => void
}

export const Chip: React.FC<ChipProps> = ({ label, onClick }) => {
  return (
    <Box
      border="grayLightThin"
      pl="xxs"
      pr="xxxs"
      py="xxxs"
      borderRadius="rounded"
      onClick={onClick}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text color="black" fontSize="xm" fontWeight="bold">
        {label}
      </Text>
      <Box pl="xxxs">
        <IconButton
          iconName="close"
          variant="bare"
          onClick={onClick}
          color="grayMedium"
        />
      </Box>
    </Box>
  )
}
