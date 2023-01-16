import { useState } from "react"
import React from 'react'
import Sidebar from "../SideBar/SideBar";

function NewReport() {

  const [formData,setFormData]=useState([{
    title:"",
    file: "",
    address: "",
    message:"",
  }])


  const handleSaveReport = async (e) => {
        e.preventDefault();
        console.log(formData);
            const res = await fetch("https://my-json-server.typicode.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: formData.title,
                    file: formData.file,
                    address: formData.address,
                    message: formData.message,
                }),
            });
            // const response = await res.json();
            // handleNewReport(response);
            // setFormData([{
            //   title:"",
            //   file: "",
            //   address: "",
            //   message:"",
            // }]);
    };

  function handleChange(e){
    setFormData({...formData, [e.target.name]:e.target.value})
  }


  return (
    <div className='newreport-body flex-row'>
      <Sidebar/>
      <div className='newreport-div ml-20 grid'>
      <div className='flex place-self-center gap-4 my-7'>
      <h1 className='text-5xl py-9 text-yellow-400'>New Report</h1>
      {/* <figure class="rounded-lg p-8 md:p-0 dark:bg-slate-900"> */}
            <div className="flex rounded-xl p-2 dark:bg-slate-900 pr-4">
  <img className="rounded-full h-24 w-24 mx-auto" src='https://w7.pngwing.com/pngs/632/307/png-transparent-paper-planes-send-newsletter-icon-blue-tinker-thumbnail.png' alt=""/>
  </div>
  {/* </figure> */}
  </div>
<form className='w-96 place-self-center text-black' onSubmit={handleSaveReport}>
      <label class="block mb-1">
        <span class="block text-lg font-medium text-white text-center">Title</span>
        <input type="text" value={formData.title} name="title" onChange={handleChange} class="my-1 block w-full px-3 py-1 bg-gray-300 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-black
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
      </label>

      <label class="grid my-1">
        {/* <span class="sr-only">Choose profile photo</span> */}
        <span class="block text-lg font-medium text-white text-center">File</span>
        <input value={formData.file} type="file" name="file" onChange={handleChange} class="block place-self-center my-1 w-full text-base text-black
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-gray-100 file:text-black
          hover:file:bg-violet-100
        "/>
      </label>

      <label class="block my-1">
        <span class="block text-lg font-medium text-white text-center">Address</span>
        <input type="text" value={formData.address} name="address" onChange={handleChange} class="my-1 bg-gray-300 block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-black
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        "/>
      </label>

      <label className='grid my-1'>
      <span class="block text-lg text-center font-medium text-white">Describe your Complaint:</span>
      <textarea value={formData.message} name="message" onChange={handleChange} className='rounded my-1 bg-gray-300 text-black place-self-center' placeholder='Your message' cols="60" rows="6"> </textarea>
      </label>

      <button class="flex-shrink-0 bg-gray-100 w-28 place-self-center hover:bg-yellow-500  border-gray-100 hover:border-yellow-500 text-lg border-4 text-black py-1 px-4 rounded-md mb-11" type="submit">
        Submit
      </button>
    </form>
    </div>
    </div>
  )
}

export default NewReport