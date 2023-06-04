import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'

import createSagaMiddleware from 'redux-saga'
import { rootReducer, rootSaga } from './slices'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
