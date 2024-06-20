import { NextRequest, NextResponse } from 'next/server'
import { Md5 } from 'ts-md5'

// Base URL for the Marvel API.
const API_BASE_URL = process.env.API_BASE_URL
// Public key for the Marvel API.
const API_PUBLIC_KEY = process.env.API_PUBLIC_KEY
// Private key for the Marvel API.
const API_PRIVATE_KEY = process.env.API_PRIVATE_KEY

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
export async function GET(request: NextRequest) {
  const querySearch = request.nextUrl.searchParams.get('query')

  const url = `${API_BASE_URL}/characters?nameStartsWith=${querySearch}&limit=99&${query}`
  const response = await fetch(url)

  const data = await response.json()

  return NextResponse.json({ data: data.data }, { status: 200 })
}
