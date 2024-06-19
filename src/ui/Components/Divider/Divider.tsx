import React from 'react'
import styled from 'styled-components'

import { Colors } from '@/src/ui/Theme/interfaces'

interface DividerProps {
  color: keyof Colors
}

const ContainerDivider = styled.div<DividerProps>`
  border-top: 1px solid ${({ theme: { colors }, color }) => colors[color]};
`

export const Divider: React.FC<DividerProps> = ({
  color,
  ...props
}: {
  color: keyof Colors
}) => {
  return <ContainerDivider color={color} {...props} />
}
