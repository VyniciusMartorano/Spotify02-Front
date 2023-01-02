import storage from "redux-persist/lib/storage";
import { persistReducer } from 'redux-persist'

export default (reducers) => {
    const persistedReducers = persistReducer(
        {
            key: 'Spotify02',
            storage,
            whitelist: ['127.0.0.1']
        }, reducers
    )

    return persistedReducers
}