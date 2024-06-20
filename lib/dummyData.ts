import icons from '@/src/ui/Components/Icons/icons'

export const activeTagsMock = [
  {
    tagId: 'tag01',
    label: 'Gwiazda',
    score: '+35',
  },
  {
    tagId: 'tag02',
    label: 'Sejm',
    score: '+25',
  },
  {
    tagId: 'tag03',
    label: 'Mariusz Kamiński',
    score: '+55',
  },
  // {
  //   tagId: 'tag04',
  //   label: 'Maryla Rodowicz',
  //   score: '+40',
  // },
  // {
  //   tagId: 'tag05',
  //   label: 'Odmrażanie trupa',
  //   score: '+35',
  // },
  // {
  //   tagId: 'tag06',
  //   label: 'Festiwal w Opolu',
  //   score: '+32',
  // },
  // {
  //   tagId: "tag07",
  //   label: "Legendy polskiej sceny muzycznej",
  //   score: "+30"
  // },
  // {
  //   tagId: "tag08",
  //   label: "Przeboje lat 70",
  //   score: "+26"
  // },
  // {
  //   tagId: "tag09",
  //   label: "Ikonka popkultury",
  //   score: "+25"
  // },
  // {
  //   tagId: "tag10",
  //   label: "Polska muzyka",
  //   score: "+17"
  // },
  // {
  //   tagId: "tag11",
  //   label: "Kabaret",
  //   score: "+12"
  // }
]

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
