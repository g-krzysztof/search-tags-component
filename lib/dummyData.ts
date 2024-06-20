import icons from '@/src/ui/Components/Icons/icons'

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
