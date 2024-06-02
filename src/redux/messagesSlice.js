import { createSlice } from '@reduxjs/toolkit';

const initialState = { messages: [] };

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push({ id: Date.now(), text: action.payload });
    },
    removeMessage: (state, action) => {
      state.messages = state.messages.filter(
        message => message.id !== action.payload,
      );
    },
  },
});

export const { addMessage, removeMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
