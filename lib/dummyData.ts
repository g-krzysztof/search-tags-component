import icons from '@/src/ui/Components/Icons/icons'

export const chipsItems = [
  {
    chipId: 'chip01',
    label: 'Maryla Rodowicz',
  },
  {
    chipId: 'chip02',
    label: 'Gwiazda',
  },
  {
    chipId: 'chip03',
    label: 'Sejm',
  },
  // {
  //   chipId: 'chip04',
  //   label: 'Mariusz Kamiński',
  // },
  // {
  //   chipId: 'chip05',
  //   label: 'Polska muzyka',
  // },
  // {
  //   chipId: 'chip06',
  //   label: 'Ikona popkultury',
  // },
]

export const contextMenuItems: {
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
