import React from 'react';
import Calender from '@/components/App Components/Calendar';
import Appoiments from '@/components/App Components/Appoiments';
import { Incomelit } from '@/components/App Components/Incomelit';
import { Footer } from '@/components/App Components/Footer';

const HomePage = () => {
  return (
    <div>
     
      <div className="flex font-bold my-4 justify-center text-3xl headline">
        Premier Home Cleaning
      </div>

     
      <div className="flex justify-center space-x-2">
        <p className="italic">• Top Experts</p>
        <p className="italic">• Pocket-Friendly Rates</p>
      </div>

      
      <div className="flex flex-col lg:flex-row lg:space-x-4 p-4">
        
        <div className="w-full lg:w-1/2">
          <Appoiments />
        </div>
        
      
        <div className="w-full lg:w-1/2">
          <Calender />
        </div>
      </div>

     
      <div className="flex justify-center items-center mt-6">
        <Incomelit />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default HomePage;
