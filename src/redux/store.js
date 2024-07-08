import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './slices/contactoSlice';

export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});