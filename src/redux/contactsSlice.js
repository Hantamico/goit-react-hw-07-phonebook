import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';
import { addContact } from './operations';
import { deleteContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
    isLoading: false,
    error: false,
  },
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending](state, _) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts = action.payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected](state, _) {
      state.isLoading = false;
      state.error = true;
      console.log(state.error)
    },

    [addContact.pending](state, _) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.contacts.push(action.payload);
      state.isLoading = false;
    },
    [addContact.rejected](state, _) {
      state.isLoading = false;
      state.error = true;
    },

    [deleteContact.pending](state, _) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
    [deleteContact.rejected](state, _) {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const filterContacts = contactsSlice.actions.filterContacts;

export const contactsReducer = contactsSlice.reducer;