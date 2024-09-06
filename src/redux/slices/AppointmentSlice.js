import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: new Date().toISOString(), // Default to today's date
};

const AppointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    updateDate: (state, action) => {
      state.date = action.payload; // Expect ISO string format
    },
  },
});

export const { updateDate } = AppointmentSlice.actions;
export default AppointmentSlice.reducer;
