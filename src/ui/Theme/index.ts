import { borders } from './borders'
import { colors } from './colors'
import { fontSizes } from './fontSizes'
import { fontWeights } from './fontWeights'
import { Theme } from './interfaces'
import { lineHeights } from './lineHeights'
import { motion } from './motion'
import { radii } from './radii'
import { space } from './space'

// Exporting individual theme properties for direct import
export { borders } from './borders'
export { colors } from './colors'
export { fontSizes } from './fontSizes'
export { fontWeights } from './fontWeights'
export type { Theme } from './interfaces'
export { lineHeights } from './lineHeights'
export { motion } from './motion'
export { radii } from './radii'
export { space } from './space'

/**
 * The theme object that combines all the individual theme properties.
 * It includes borders, colors, font sizes, font weights, line heights, motion, radii, and space.
 * This object can be used with styled-components ThemeProvider to provide these values to all components.
 */
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
