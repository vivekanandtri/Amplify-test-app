"use client";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import Navbar from "../components/nav";
import "@aws-amplify/ui-react/styles.css";
import { uploadData } from "aws-amplify/storage";
import { ChangeEvent, FormEvent, useState } from "react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "@/src/aws-exports";
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import Footer from "../components/Footer";
import { DataStore } from "aws-amplify/datastore";
Amplify.configure(awsExports);

const Create = () => {
  const [name, setname] = useState<string>("");
  const [Description, setDescription] = useState<string>("");
  const [Price, setPrice] = useState<string>("");
  const [File, setFile] = useState<string>("");
  const [popup , setpopup] =useState<boolean>(false)
  const handelUpload = (e: ChangeEvent<HTMLInputElement>) => {
    let file = e.target.files?.[0];
    if (file) {
      setFile(URL.createObjectURL(file));
    }
  };

  const Removefile = () => {
    setFile("");
  };

  const savedata = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const form = e.target as HTMLFormElement; // Type assertion
    // const fd = new FormData(form);
    // const formobj = Object.fromEntries(fd.entries());
    setname("");
    setDescription("");
    setPrice("");
    setFile("");
    setpopup(true)
    let response:any = await fetch("http://localhost:3000/api/upload",{
      method:"post",
      body: JSON.stringify({name, Price,Description,File }),
    })
    response = await response.json()
    if(response.success){
        alert("Success")
    }
    else{
      alert("Error")
    }
    console.log(Response)
  };

  

  return (
    <>
      {/* {popup && <div className="absolute h-[110%] w-[98%] flex items-center justify-center backdrop-blur-sm">
        <span className="bg-white w-[300px] h-[300px] flex flex-col  justify-center border">
           <div className="bg-blue-400 text-white p-5 rounded-full text-center">
              Submitted
           </div>
           <div onClick={()=>setpopup(false)} className="text-center my-5 cursor-pointer">
              close
           </div>

        </span>
      </div>} */}
      <Navbar />
      <main className="">
        <h1 className="text-center font-bold text-[22px] my-2">
          Add your plant
        </h1>
        <section className="mx-auto w-[50%] border-2 px-4 py-4 ">
          <form className="" onSubmit={savedata}>
            <div className="">
              <h2 className="text-center py-1 font-[500] ">
                Upload the picture of your plant
              </h2>
              <div className="h-[200px] w-full border rounded-lg flex items-center justify-center">
                <input
                  type="file"
                  hidden
                  name="Upload"
                  id="Upload"
                  onChange={handelUpload}
                />
                {File == "" && (
                  <label htmlFor="Upload" className="font-[600] ">
                    Click to Upload your plant picture
                  </label>
                )}
                {File && (
                  <div className="object-contain h-[200px] flex items-end">
                    <img src={File} alt="" className="h-[100%]" />
                    <button onClick={Removefile} className="px-5">
                      Remove
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="py-2">
              <div className="text-center py-2 font-[500]">
                Enter the name of the plant
              </div>
              <input
                onChange={(e) => setname(e.target.value)}
                value={name}
                type="text"
                id="name"
                className="w-full outline-blue-300 border-2 px-2 rounded-md py-2"
                name="name"
                placeholder="Enter the name"
              />
            </div>
            <div className="py-2">
              <div className="text-center py-2 font-[500]">
                Add the description
              </div>
              <textarea
                rows={2}
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
                id="description"
                className="w-full outline-blue-300 border-2 px-2 rounded-md py-2"
                name="description"
                placeholder="Enter here"
              />
            </div>
            <div className="py-2">
              <div className="text-center py-2 font-[500]">
                Set a price for your plant
              </div>
              <input
                type="number"
                value={Price}
                onChange={(e) => setPrice(e.target.value)}
                id="price"
                className="w-full outline-blue-300 border-2 px-2 rounded-md py-2"
                name="price"
                placeholder="Enter the price for your plant"
              />
            </div>
            <button
              type="submit"
              onClick={() => savedata}
              className="bg-[#38796f] text-white rounded-md w-full py-2 my-1"
            >
              Submit
            </button>
          </form>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default withAuthenticator(Create);
