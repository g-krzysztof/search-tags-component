import { borders } from './borders'
import { colors } from './colors'
import { fontSizes } from './fontSizes'
import { fontWeights } from './fontWeights'
import { lineHeights } from './lineHeights'
import { motion } from './motion'
import { radii } from './radii'
import { space } from './space'
import { Theme } from './interfaces'

export type { Theme } from './interfaces'
export { borders } from './borders'
export { colors } from './colors'
export { fontSizes } from './fontSizes'
export { fontWeights } from './fontWeights'
export { lineHeights } from './lineHeights'
export { motion } from './motion'
export { radii } from './radii'
export { space } from './space'

export const theme: Theme = {
  borders,
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  motion,
  radii,
  space,
}
