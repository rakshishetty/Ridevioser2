import { configureStore } from '@reduxjs/toolkit';
import dataSlice from '../features/reducers/dataSlice';

const store = configureStore({
  reducer: {
    booking: dataSlice,
  },
});

export default store;