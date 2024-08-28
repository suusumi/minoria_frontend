import {combineReducers, configureStore} from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import themeReducer from "./theme/themeSlice.ts"
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    theme: themeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store =  configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>
