import { createStore, applyMiddleware, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { FilmsState } from './home/types'
import { VideoState } from './about/types'
import { MovieState } from './search/types'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

export interface AplicationState {
  films: FilmsState,
  video: VideoState,
  movie: MovieState
}

const SagaMiddleware = createSagaMiddleware()

const store: Store= createStore(rootReducer, applyMiddleware(SagaMiddleware))

SagaMiddleware.run(rootSaga)

export default store