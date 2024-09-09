import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

export const Incomelit = () => {
  return (
    <div>
        <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Income" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">week income: $Rs</SelectItem>
    <SelectItem value="dark">month income: $Rs</SelectItem>
    <SelectItem value="system">year income: $Rs</SelectItem>
  </SelectContent>
</Select>

    </div>
  )
}
