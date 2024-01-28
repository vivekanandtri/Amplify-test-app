import Image from "next/image";
import Navbar from "./components/nav";

export default function Home() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className=" mx-[70px] py-[20px]">
       
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto flex flex-wrap items-center">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
              <h1 className="title-font font-medium text-3xl text-gray-900">
                Search for Your loving Plants
              </h1>
              <div className="flex items-center ">
                <input
                  type="search"
                  className="border-2 border-gray-400 outline-none mt-[30px] mb-[15px] py-[10px] w-[100%] rounded-lg px-[10px]"
                  placeholder="Search "
                />
                <button className=" border-2 h-[47px] bg-black text-white rounded-lg mt-[15px] px-[10px] border-black">
                  Search
                </button>
              </div>
              <div className="flex space-x-3 ">
                <div className="border-2 px-[10px] py-0.5 rounded-md cursor-pointer hover:py-[3px] hover:px-[12px] transition-all duration-300 ease-out">Rose</div>
                <div className="border-2 px-[10px] py-0.5 rounded-md cursor-pointer">Gardenia</div>
                <div className="border-2 px-[10px] py-0.5 rounded-md cursor-pointer">Easter Lily</div>
               
              </div>
              <p className="leading-relaxed mt-4">
                Poke slow-carb mixtape knausgaard, typewriter street art
                gentrify hammock starladder roathse. Craies vegan tousled etsy
                austin.
              </p>
            </div>
            
            <div className="mx-auto">
              <img
                src="https://imgs.search.brave.com/noPvQlwMSuOVR-voXvsScqy9WlqbqS4y0K_cqVTPhfk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ibG9v/bXNjYXBlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8x/MC8yMDIwMDkyM19C/bG9vbXNjYXBlX1Ry/aXNoX18wMDQ2XzEx/ODUlRTIlODAlOEEl/QzMlOTclRTIlODAl/OEExNTgyLTc2N3gx/MDI0LmpwZw"
                alt="photo"
                className="h-[500px] border-black border-4 rounded-[12px]"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
