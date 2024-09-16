import React from 'react';
import Appoiments from '@/components/App Components/Appoiments';
import { Incomelit } from '@/components/App Components/Incomelit';

export const HomePage = () => {
  return (
    <>
      <div className="container w-full md:w-3/4 lg:w-2/3 mx-auto px-4">
        <div className="text-center font-bold my-7 text-2xl md:text-3xl">
          Premier Home Cleaning
        </div>

        <div className="mt-6">
          <Incomelit />
        </div>

        <div className="mt-8">
          <Appoiments />
        </div>
      </div>
    </>
  );
};

export default HomePage;
