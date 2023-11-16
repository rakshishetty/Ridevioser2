import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookings: [],
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
    },
    updateBooking: (state, action) => {
      const { index, data } = action.payload;
      state.bookings[index] = data;
    },

    deleteBooking: (state, action) => {
      const index = action.payload;
      state.bookings.splice(index, 1);
    },
  },
});

export const { addBooking,updateBooking,deleteBooking } = bookingSlice.actions;
export const selectBookings = (state) => state.booking.bookings;

export default bookingSlice.reducer;
