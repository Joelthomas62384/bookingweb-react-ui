import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: new Date().toISOString(),
};

const AppointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    updateDate: (state, action) => {
      state.date = action.payload; 
    },
  },
});

export const { updateDate } = AppointmentSlice.actions;
export default AppointmentSlice.reducer;
