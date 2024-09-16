import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/Input';

// const Input = ({ type, name, placeholder }) => (
//   <input
//     type={type}
//     name={name}
//     placeholder={placeholder}
//     className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//   />
// );

const Formss = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input type="text" name="customerName" placeholder="Customer Name" />
        </div>
        <div>
          <Input type="tel" name="mobileNumber" placeholder="Mobile Number" />
        </div>
        <div>
          <Input type="text" name="apartmentNumber" placeholder="Apartment Number" />
        </div>
        <div>
          <Input type="text" name="buildingNumber" placeholder="Building Number" />
        </div>
        <div>
          <Input type="text" name="zoneNumber" placeholder="Zone Number" />
        </div>
        <div>
          <Input type="text" name="streetNumber" placeholder="Street Number" />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Formss;
