import storage from "redux-persist/lib/storage";
import { persistReducer } from 'redux-persist'

export default (reducers) => {
    const persistedReducers = persistReducer(
        {
            key: 'Spotify02',
            storage,
        }, reducers
    )

    return persistedReducers
}