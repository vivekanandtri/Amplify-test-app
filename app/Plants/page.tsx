import React from 'react'
import Navbar from '../components/nav'
import Link from 'next/link'
import {PlantsArray} from '@/components/utils/Productdetl'
const Plants = () => {
    // let PlantsArray = [
    //     {
    //         id:'1',
    //         img_url:'https://images.pexels.com/photos/793012/pexels-photo-793012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //       name:'ALovera',
    //       price:'₹200'
    //     },
    //     {
    //         id:'2',
    //         img_url:'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //       name:'Rose',
    //       price:'₹300'
    //     },
    //     {
    //         id:'3',
    //         img_url:'https://images.pexels.com/photos/1141792/pexels-photo-1141792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //       name:'Random',
    //       price:'₹210'
    //     },
    //     {
    //         id:'4',
    //         img_url:'https://images.pexels.com/photos/1477166/pexels-photo-1477166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //       name:'red-lily',
    //       price:'₹250'
    //     },
    //     {
    //         id:'5',
    //         img_url:'https://images.pexels.com/photos/4138522/pexels-photo-4138522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //       name:'Lotus',
    //       price:'₹500'
    //     },
    // ]
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
    </div>
  )
}

export default Plants
