import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
  import { Button } from "../ui/button";
  
  import React from "react";
  
  export const Cards = () => {
    return (
      <div className="max-w-lg mx-auto p-4">
        <Card>
          <CardHeader>
            <CardTitle>Name</CardTitle>
            <CardDescription>
              <input 
                type="text" 
                className="mt-1 block w-full rounded-md border border-black-400 shadow-sm sm:text-sm"
              />
            </CardDescription>
          </CardHeader>
  
          <CardContent>
            <CardTitle>Mobile Number</CardTitle>
            <CardDescription>
              <input 
                type="tel" 
                className="mt-1 block w-full rounded-md border border-black-400 shadow-sm sm:text-sm"
              />
            </CardDescription>
          </CardContent>
  
          <CardContent>
            <CardTitle>Apartment Number</CardTitle>
            <CardDescription>
              <input 
                type="text" 
                className="mt-1 block w-full rounded-md border border-black-400 shadow-sm sm:text-sm"
              />
            </CardDescription>
          </CardContent>
  
          <CardContent>
            <CardTitle>Building Number</CardTitle>
            <CardDescription>
              <input 
                type="text" 
                className="mt-1 block w-full rounded-md border border-black-400 shadow-sm sm:text-sm"
              />
            </CardDescription>
          </CardContent>
  
          <CardContent>
            <CardTitle>Zone Number</CardTitle>
            <CardDescription>
              <input 
                type="text" 
                className="mt-1 block w-full rounded-md border border-black-400 shadow-sm sm:text-sm"
              />
            </CardDescription>
          </CardContent>
  
          <CardContent>
            <CardTitle>Street Number</CardTitle>
            <CardDescription>
              <input 
                type="text" 
                className="mt-1 block w-full rounded-md border border-black-400 shadow-sm sm:text-sm"
              />
            </CardDescription>
          </CardContent>
  
          <CardFooter>

            <Button 
              type="submit" 
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Book
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  };
  