"use client"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import Image from "next/image"
import { useState } from "react"

const DropdownList = () => {
   const [selected, setSelected] = useState('Most Recent');
  return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button variant="outline">
               <Image src="/assets/icons/hamburger.svg" alt="Menu Icon" width={16} height={16} />
               <span>{selected}</span>
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent>
            <DropdownMenuRadioGroup onValueChange={(value) => setSelected(value)} value={selected}>
               {['Most Recent','Most Liked'].map((item) => (
                  <DropdownMenuRadioItem key={item} value={item}>{item}</DropdownMenuRadioItem>
               ))}
            </DropdownMenuRadioGroup>
         </DropdownMenuContent>
      </DropdownMenu>
  )
}
export default DropdownList