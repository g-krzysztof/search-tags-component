import { Box, Icon, Text } from '@/src/ui'
import React from 'react'

interface StrengthProgressProps {
  tagsArray: {
    chipId: string
    label: string
  }[]
}

const STRENGTH_NUMBER = 3

export const StrengthProgress: React.FC<StrengthProgressProps> = ({
  tagsArray,
}) => {
  const tagsNumber = tagsArray.length

  return (
    <Box display="flex" flexDirection="column" p="xxs">
      <Box display="flex">
        <Box pr="xxs">
          <Text
            color={tagsNumber <= STRENGTH_NUMBER ? 'redDark' : 'greenDark'}
            fontWeight="bold"
            fontSize="xm"
          >
            {tagsNumber <= STRENGTH_NUMBER ? 'Słabo' : 'Dobrze'}
          </Text>
        </Box>
        <Box display="flex">
          {['pr1', 'pr2', 'pr3', 'pr4', 'pr5'].map((prItem, index) => {
            const iconColor =
              tagsNumber <= STRENGTH_NUMBER ? 'redLight' : 'greenLight'

            return (
              <Icon
                key={prItem}
                iconName="progressBar"
                color={index < tagsNumber ? iconColor : 'grayMedium'}
                size={17}
              />
            )
          })}
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pt="xxxs"
      >
        <Box>
          <Icon iconName="infoRound" color="grayMedium" size={17} />
        </Box>
        <Box pl="xxxs">
          <Text color="grayMedium" fontSize="xs" fontWeight="medium">
            Zbyt mało tagów. Dodaj jeszcze{' '}
            {tagsNumber >= 5 ? '0' : 5 - tagsNumber} aby poprawić widoczność
            artykułu.
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
