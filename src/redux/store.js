import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from "redux-persist";

import { contactsSlice } from "./contactsSlice";
import { filtersSlice } from "./filtersSlice";

const LOCAL_STORAGE_KEY = "redux-persist-contacts";

const rootReducers = combineReducers({
    contacts: contactsSlice.reducer,
    filters: filtersSlice.reducer,
});

const reduxPersistConfig = {
    key: LOCAL_STORAGE_KEY,
    version: 1,
    storage,
    whitelist: ['contacts'],
};

const persistedReducer = persistReducer(reduxPersistConfig, rootReducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }),
});

export const persistor = persistStore(store);