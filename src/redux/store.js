import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './messagesSlice';

const store = configureStore({ reducer: messagesReducer });

export default store;
