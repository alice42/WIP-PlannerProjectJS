import { all, fork } from 'redux-saga/effects'
import dataSaga from './dataSaga'

function* rootSaga() {
  yield all([fork(dataSaga)])
}
export default rootSaga
