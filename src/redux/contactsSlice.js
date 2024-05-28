import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        const { id, name, number } = action.payload;

        if (Array.isArray(state)) {
          state.push({ id, name, number });
        } else if (typeof state === "object" && state !== null) {
          state[id] = { id, name, number };
        }
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      delete state[action.payload];
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
