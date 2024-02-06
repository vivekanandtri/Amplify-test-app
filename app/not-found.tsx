import Link from 'next/link'
import '@/app/page.css'

export default function NotFound() {
  return (
    <div className='text-center my-14'>
      <img src='./404.png' alt='404' className='  ' />
      <p className='font-[500] text-[25px] text-[#4d4141] '>Looks like you are Lost</p>
      
        <div className=" w-full ">
           
            <img src="./404_panda.png" alt="" className='w-[300px] mx-auto h-[250px] mb-4 rounded-lg'/>
        </div>
      <Link href="/" className='bg-[#377a90] text-white border-2 border-black rounded-[12px] px-5 py-2 my-5'>Go to home page</Link>
    </div>
  )
}