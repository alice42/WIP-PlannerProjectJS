import { put, takeEvery, all, call } from 'redux-saga/effects'
import {
  DATA_REQUEST,
  DATA_SUCCESS,
  DATA_ERROR,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR
} from '../actions/dataActions'
import { dataMethod, searchMethod } from '../services/dataServices'

function* data(action) {
  try {
    const { country } = action
    const response = yield call(dataMethod, country)
    if (response.status === 200) {
      yield put({
        type: DATA_SUCCESS,
        result: {
          data: JSON.parse(response.data)
        }
      })
    } else {
      yield put({ type: DATA_ERROR, error: JSON.parse(response.data) })
    }
  } catch (error) {
    yield put({ type: DATA_ERROR, error: error.message })
  }
}

function* search(action) {
  try {
    const { search, page } = action
    const payload = {
      search,
      page
    }
    const response = yield call(searchMethod, payload)
    if (response.status === 200) {
      yield put({
        type: SEARCH_SUCCESS,
        result: {
          data: JSON.parse(response.data)
        }
      })
    } else {
      yield put({ type: SEARCH_ERROR, error: JSON.parse(response.data) })
    }
  } catch (error) {
    yield put({ type: SEARCH_ERROR, error: 'search error' })
  }
}

export default function* rootSaga() {
  yield all(
    [yield takeEvery(DATA_REQUEST, data)],
    [yield takeEvery(SEARCH_REQUEST, search)]
  )
}
