import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar } from '@/components/ui/calendar';
import { updateDate } from '@/redux/slices/AppointmentSlice';

const Calender = () => {
  const dateString = useSelector((state) => state.appointment.date);
  const dispatch = useDispatch();


  const selectedDate = dateString ? new Date(dateString) : new Date();

  const setDate = (selectedDate) => {
    if (selectedDate) {
      dispatch(updateDate(selectedDate.toISOString())); 
    }
  };

  return (
    <Calendar
      mode="single"
      selected={selectedDate}
      onSelect={setDate}
      className="rounded-md"
    />
  );
};

export default Calender;
