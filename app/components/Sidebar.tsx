import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import './page.css'
import { IoReorderThreeOutline } from 'react-icons/io5'
import Link from 'next/link'
const Sidebar = () => {
  return (
    <div className=''>
      <Sheet >
      <SheetTrigger asChild>
        <button className='trigger hidden'><div className="ml-[30px] text-[28px]">
          <IoReorderThreeOutline />
          </div></button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>PlantLand</SheetTitle>
          <SheetDescription>
            <ul className='grid grid-cols-1'>
                <Link href={'/'} className='hover:bg-[#349ecf] hover:text-white py-3 px-5 rounded-lg transition-colors '>Home</Link>
                <Link href={'/Plants'} className='hover:bg-[#349ecf] hover:text-white py-3 px-5 rounded-lg transition-colors '>Plants</Link>
                <Link href={'/About'} className='hover:bg-[#349ecf] hover:text-white py-3 px-5 rounded-lg transition-colors '>About us </Link >
                <Link href={'/'} className='hover:bg-[#349ecf] hover:text-white py-3 px-5 rounded-lg transition-colors '>Contece us </Link>
                <Link href={'/Login'} className='hover:bg-[#349ecf] hover:text-white py-3 px-5 rounded-lg transition-colors '>Login</Link>
                <Link href={'/'} className='hover:bg-[#349ecf] hover:text-white py-3 px-5 rounded-lg transition-colors '>Sign-Up</Link>
            </ul>
            
          </SheetDescription>
        </SheetHeader>
        
        <SheetFooter>
          
        </SheetFooter>
      </SheetContent>
    </Sheet>
    </div>
  )
}

export default Sidebar
