import { Box } from '../../ui'
import icons from '@/src/ui/Components/Icons/icons'
import IconButton from '@/src/components/IconButton/IconButton'

export interface SideMenuProps {
  menuItems: {
    iconName: keyof typeof icons
    itemId: string
    active?: boolean
  }[]
}

const SideMenu: React.FC<SideMenuProps> = ({ menuItems }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      border="grayLight"
      borderRadius="rounded"
      px="xxxs"
      pt="xxxs"
    >
      {menuItems.map(({ iconName, itemId, active }) => (
        <Box key={itemId} pb="xxxs">
          <IconButton iconName={iconName} active={active} color="black" />
        </Box>
      ))}
    </Box>
  )
}

export default SideMenu
