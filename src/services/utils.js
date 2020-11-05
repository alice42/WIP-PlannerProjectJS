//api
export const api = 'http://newsapi.org/v2/'
export const headLines = 'top-headlines'
export const everything = 'everything'
export const query = '?q='
export const fromCountry = '?country='
export const apiKey = '&apiKey=803fdd9b8517490d89d8c85ade466b8d'

//BASIC FETCH API METHOD
export const basicFetch = async (method, url, config, data) => {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: data
    })
    const textResponse = await response.text()
    const result = {
      data: textResponse,
      status: response.status
    }
    return result
  } catch (error) {
    return error
  }
}
