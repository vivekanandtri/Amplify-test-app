"use client";
import Link from "next/link";
import React, { useState } from "react";
import './page.css'
import Sidebar from "./Sidebar";


const Navbar = () => {
    
  return (

    <header className="text-gray-600 body-font">
        
      <div className="container mx-auto flex flex-wrap pt-5  flex-col md:flex-row items-center">
        <div className="main_container flex title-font font-medium items-center text-gray-900 md:mb-0">
        <Link href={'/'} className="flex items-center"> 
         <img
            src="https://imgs.search.brave.com/FeFkK5ZUM3OzNVngEry5o0WOC1yI392-CbqvCRdyODw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzAx/NTAvNjI2Mi9maWxl/cy90aGUtc2lsbF9T/bWFsbC1Nb25leS1U/cmVlX1NtYWxsX01h/cmNlbGxlLUdvbGRf/VmFyaWFudC5qcGc_/dj0xNjk5NDA0ODUy/JndpZHRoPTQwMA"
            alt="img"
            className="w-[40px] h-[40px] rounded-full"
          />
          <span className="ml-3 text-xl">PlantPura</span>
           </Link>
          <div className="">

          <Sidebar/>
          </div>
        </div>
        <nav className="nav md:ml-auto md:mr-auto mx-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className="mr-8 hover:text-gray-900">
            Home
          </Link>
          <Link href={'/Plants'} className="mr-8 hover:text-gray-900">Plants</Link>
          <Link href={"/About"} className="mr-8 hover:text-gray-900">
            About
          </Link>
          <a className="mr-8 hover:text-gray-900">Contect us</a>
        </nav>
        <div className="login flex ">
        <button className="inline-flex items-center mx-2 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          SignUp
        </button>
        <Link href={"/Login"}>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Login
          </button>
        </Link>
        </div>
        
      </div>
     
    </header>
  );
};

export default Navbar;
