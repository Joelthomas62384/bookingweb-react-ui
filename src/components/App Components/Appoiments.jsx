import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Appoiments = () => {
  return (
    <div className="w-full flex justify-center border-2 rounded shadow-lg my-8">
      <div className="w-full max-w-full p-2">
        <ScrollArea className="overflow-x-auto">
          <Table className="min-w-full">
            <TableCaption>A list of your recent jobs.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="whitespace-nowrap">Name</TableHead>
                <TableHead className="whitespace-nowrap">Status</TableHead>
                <TableHead className="whitespace-nowrap">Contact</TableHead>
                <TableHead className="whitespace-nowrap text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium text-start">Aromal</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>92073357</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Joel</TableCell>
                <TableCell>Pending</TableCell>
                <TableCell>65879878</TableCell>
                <TableCell className="text-right">$150.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Roshan</TableCell>
                <TableCell>Pending</TableCell>
                <TableCell>34765788</TableCell>
                <TableCell className="text-right">$150.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Nithin</TableCell>
                <TableCell>Pending</TableCell>
                <TableCell>965456743</TableCell>
                <TableCell className="text-right">$150.00</TableCell>
              </TableRow>
              {/* Add more rows as needed */}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Appoiments;
