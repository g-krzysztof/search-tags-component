import { Md5 } from 'ts-md5'

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

/**
 * Interface for the data wrapper that contains the results of a character search.
 */
export interface CharacterDataWrapper {
  results: Character[]
}

// Base URL for the Marvel API.
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
// Public key for the Marvel API.
const API_PUBLIC_KEY = process.env.NEXT_PUBLIC_API_PUBLIC_KEY
// Private key for the Marvel API.
const API_PRIVATE_KEY = process.env.NEXT_PUBLIC_API_PRIVATE_KEY

/**
 * Returns the current timestamp as a string.
 */
const getTimeStamp = () => Date.now().toString()

/**
 * Generates a hash for the Marvel API request.
 * The hash is a md5 digest of the timestamp, private key and public key.
 *
 * @param timeStamp - The timestamp for the request.
 */
const getHash = (timeStamp: string) =>
  Md5.hashStr(timeStamp + API_PRIVATE_KEY + API_PUBLIC_KEY)

const timeStamp = getTimeStamp()
const hash = getHash(timeStamp)
const query = `ts=${timeStamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`

/**
 * Handles the response from the Marvel API.
 * If the response is not ok, it throws an error with the status text.
 * Otherwise, it returns the data from the response as the specified type.
 *
 * @param response - The response from the Marvel API.
 */
const handleResponse = async <T>(response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()
  return data.data as T
}

/**
 * Searches for Marvel characters that start with the specified query.
 * It returns a promise that resolves to a CharacterDataWrapper.
 *
 * @param querySearch - The search query.
 */
export const searchCharacters = async (
  querySearch: string | null,
): Promise<CharacterDataWrapper> => {
  const url = `${API_BASE_URL}/characters?nameStartsWith=${querySearch}&limit=99&${query}`
  const response = await fetch(url)
  return handleResponse<CharacterDataWrapper>(response)
}
