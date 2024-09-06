import { configureStore } from '@reduxjs/toolkit'
import AppointmentReducer from './slices/AppointmentSlice'

export default configureStore({
  reducer: {
    appointment: AppointmentReducer
  }
})