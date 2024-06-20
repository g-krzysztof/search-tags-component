/**
 * Interface for a Marvel character.
 */
export interface Character {
  id: string
  name: string
  events: {
    available: string
  }
}
export const marvelApiToTagsHelper = (data: Character[]) => {
  const newDataArray = [...data]
  return newDataArray.map((character) => {
    return {
      tagId: character.id,
      label: character.name,
      score: character.events.available,
    }
  })
}
