import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import rootReducer from './modules/rootReducer'
import persistedReducers from './modules/reduxPersist'
import { composeWithDevTools } from 'redux-devtools-extension'



const store = createStore(persistedReducers(rootReducer), composeWithDevTools())

export const persistor = persistStore(store)
export default store