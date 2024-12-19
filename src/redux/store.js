import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { contactsSlice } from "./contactsSlice";
import { filtersSlice } from "./filtersSlice";

const rootReducers = combineReducers({
    contacts: contactsSlice.reducer,
    filters: filtersSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
});