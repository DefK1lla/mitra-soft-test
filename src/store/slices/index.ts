import { combineReducers } from 'redux'
import postsReducer from './post/postReducer'

import { all, fork } from 'redux-saga/effects'
import postsSagaWatcher from './post/postsSaga'

export const rootReducer = combineReducers({
  posts: postsReducer,
})

export function* rootSaga() {
  yield all([fork(postsSagaWatcher)])
}
