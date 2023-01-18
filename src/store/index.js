import { legacy_createStore as createStore } from 'redux'
import { persistStore } from 'redux-persist'
import rootReducer from './reducers/index'
import persistedReducers from './reduxPersist'
import { composeWithDevTools } from 'redux-devtools-extension'


const store = createStore(persistedReducers(rootReducer), composeWithDevTools())

export const persistor = persistStore(store)
export default store