import { configureStore } from '@reduxjs/toolkit'
import {
    persistStore, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistReducer
} from "redux-persist";
import { baseApi } from './api/baseApi';
import storage from 'redux-persist/lib/storage';
import authSlice from './feature/auth/authSlice';

const configPersistor = {
    key: 'auth',
    storage
}


const persistedUser = persistReducer(configPersistor, authSlice)

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: persistedUser

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(baseApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)