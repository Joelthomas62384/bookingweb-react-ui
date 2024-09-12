import React from 'react'

export const FullpersonDetails = () => {
  return (
    <div>

<Table className="min-w-full shadow-lg border-2 rounded-lg ">
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="whitespace-nowrap">Name</TableHead>
                <TableHead className="whitespace-nowrap">Appartment Number</TableHead>
                <TableHead className="whitespace-nowrap">Contact Number</TableHead>
                <TableHead className="whitespace-nowrap text-right">Building Number</TableHead>
                <TableHead className="whitespace-nowrap text-right">Zone Number</TableHead>
                <TableHead className="whitespace-nowrap text-right">street Number</TableHead>
                 <TableHead className="whitespace-nowrap text-right">Assigned Staff Name</TableHead>   
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium text-start">Aromal</TableCell>
                <TableCell>573</TableCell>
                <TableCell>92073357</TableCell>
                <TableCell>757</TableCell>
                <TableCell>689123</TableCell>
                <TableCell>55</TableCell>
                <TableCell>Nikesh staff</TableCell>    
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            
            </TableBody>
          </Table>

    </div>
  )
}
