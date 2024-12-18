import { createSlice } from "@reduxjs/toolkit"
  
export const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: []
    },
    reducers: {
        addNewContact: (state, action) => {
            state.items.push(action.payload);
        },

        deleteContact: (state, action) => {
            state.items = state.items.filter(
                (contact) => contact.id !== action.payload
            );
        },
    }
});

export const { addNewContact, deleteContact } = contactsSlice.actions;