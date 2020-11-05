import {
  basicFetch,
  api,
  headLines,
  everything,
  fromCountry,
  query,
  apiKey
} from './utils'

export const dataMethod = country =>
  basicFetch(
    'GET',
    `${api}${headLines}${fromCountry}${country}&pageSize=100${apiKey}`,
    {}
  )

export const searchMethod = ({ search, page }) =>
  basicFetch(
    'GET',
    `${api}${everything}${query}${search}&page=${page || 1}${apiKey}`,
    {}
  )
