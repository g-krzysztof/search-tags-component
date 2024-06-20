import icons from '@/src/ui/Components/Icons/icons'
import { SideMenuProps } from '@/src/components'

export const contextMenuItemsMock: {
  cmItemId: string
  label: string
  iconName: keyof typeof icons
  active: boolean
}[] = [
  {
    cmItemId: 'cmItemId01',
    label: 'CMS AI',
    iconName: 'ai',
    active: false,
  },
  {
    cmItemId: 'cmItemId02',
    label: 'Analizuj tekst',
    iconName: 'aiFill',
    active: true,
  },
  {
    cmItemId: 'cmItemId03',
    label: 'Najbardziej popularne tagi',
    iconName: 'tagPopular',
    active: true,
  },
]

export const menuItems: SideMenuProps['menuItems'] = [
  {
    itemId: '01',
    iconName: 'info',
  },
  {
    itemId: '02',
    iconName: 'chat',
  },
  {
    itemId: '03',
    iconName: 'gear',
  },
  {
    itemId: '04',
    iconName: 'tag',
    active: true,
  },
  {
    itemId: '05',
    iconName: 'user',
  },
]
