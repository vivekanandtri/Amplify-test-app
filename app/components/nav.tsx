"use client";
import Link from "next/link";
import React from "react";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="https://imgs.search.brave.com/FeFkK5ZUM3OzNVngEry5o0WOC1yI392-CbqvCRdyODw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzAx/NTAvNjI2Mi9maWxl/cy90aGUtc2lsbF9T/bWFsbC1Nb25leS1U/cmVlX1NtYWxsX01h/cmNlbGxlLUdvbGRf/VmFyaWFudC5qcGc_/dj0xNjk5NDA0ODUy/JndpZHRoPTQwMA" alt="img" className="w-[40px] h-[40px] rounded-full" />
      <span className="ml-3 text-xl">Tailblocks</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={'/'} className="mr-8 hover:text-gray-900">Home</Link>
      <Link href={'/About'} className="mr-8 hover:text-gray-900">About</Link>
      <a className="mr-8 hover:text-gray-900">Contect us</a>
      <a className="mr-8 hover:text-gray-900">Blogs</a>
    </nav>
    <button className="inline-flex items-center mx-2 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">SignUp
      
    </button>
    <Link href={'/Login'}>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
      
    </button>
    </Link>
  </div>
</header>
  );
};

export default Navbar;
