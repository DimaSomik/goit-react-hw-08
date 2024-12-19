import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = "https://67636ebb17ec5852cae8e7e5.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(URL);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newContact, { rejectWithValue }) => {
      try {
        const response = await axios.post(URL, newContact);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
);
  
export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, { rejectWithValue }) => {
      try {
        await axios.delete(`${URL}/${id}`);
        return id;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
);
