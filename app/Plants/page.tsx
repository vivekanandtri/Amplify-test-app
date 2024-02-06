import React from 'react'
import Navbar from '../components/nav'
import Link from 'next/link'
import {PlantsArray} from '@/components/utils/Productdetl'
import Footer from '../components/Footer'
const Plants = () => {
    
  return (

    <div>
        <Navbar/>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-9 mx-auto">
    <div className="flex flex-wrap -m-4">
      {PlantsArray.map((plant)=>{
        return(
       <div key={plant.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={`./Products/${plant.id}`} className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={plant.img_url} />
        </Link>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">{plant.name}</h2>
          <p className="mt-1">{plant.price}</p>
        </div>
      </div>)})}
     
    </div>
  </div>
</section>
<Footer/>
    </div>
  )
}

export default Plants
