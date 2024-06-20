import { Md5 } from 'ts-md5'

export interface Character {
  id: string
  name: string
  events: {
    available: string
  }
}

export interface CharacterDataWrapper {
  results: Character[]
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const API_PUBLIC_KEY = process.env.NEXT_PUBLIC_API_PUBLIC_KEY
const API_PRIVATE_KEY = process.env.NEXT_PUBLIC_API_PRIVATE_KEY

const getTimeStamp = () => Date.now().toString()
const getHash = (timeStamp: string) =>
  Md5.hashStr(timeStamp + API_PRIVATE_KEY + API_PUBLIC_KEY)

const timeStamp = getTimeStamp()
const hash = getHash(timeStamp)
const query = `ts=${timeStamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`

const handleResponse = async <T>(response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()
  return data.data as T
}

export const searchCharacters = async (
  querySearch: string | null,
): Promise<CharacterDataWrapper> => {
  const url = `${API_BASE_URL}/characters?nameStartsWith=${querySearch}&limit=99&${query}`
  const response = await fetch(url)
  return handleResponse<CharacterDataWrapper>(response)
}
