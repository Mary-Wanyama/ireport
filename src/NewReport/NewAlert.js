import { useState } from "react"
import React from 'react'
import Sidebar from "../SideBar/SideBar";
import Axios  from "axios";

function NewAlert() {
    const url = "https://report-production-8d93.up.railway.app/alerts"
  const [data, setData]=useState([{
    title:"",
    image: "",
    message: "",
    lat: "",
    lng: ""
  }])


  function handleSaveReport(e) {
    e.preventDefault();
    Axios.post(url,{
        title: data.title,
        message: data.message,
        image: data.image,
        lat: parseFloat(data.lat),
        lng: parseFloat(data.lng)
    })
    .then(res=>console.log(res))

    e.target.reset()
  }

  function handleChange(e){
    const newData = {...data}
    newData[e.target.id] = [e.target.value]
    setData(newData)
    console.log(newData)
  }


  return (
    <div className='newreport-body flex-row'>
      <Sidebar/>
      <div className='newreport-div ml-20 grid'>
      <div className='flex place-self-center gap-4 my-7'>
      <h1 className='text-5xl py-9 text-yellow-400'>New Report</h1>
    
            <div className="flex rounded-xl p-2 dark:bg-slate-900 pr-4">
  <img className="rounded-full h-24 w-24 mx-auto" src='https://w7.pngwing.com/pngs/632/307/png-transparent-paper-planes-send-newsletter-icon-blue-tinker-thumbnail.png' alt=""/>
  </div>
  {/* </figure> */}
  </div>
<form className='w-96 place-self-center text-black' onSubmit={handleSaveReport}>
      <label className="block mb-1">
        <span className="block text-lg font-medium text-white text-center">Title</span>
        <input type="text" value={data.title} name="title" id="title" onChange={(e)=>handleChange(e)} className="my-1 block w-full px-3 py-1 bg-gray-300 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-black
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
      </label>

      <label className="grid my-1">
        
        <span className="block text-lg font-medium text-white text-center">File</span>
        <input value={data.image} type="file" name="image" id="image" onChange={handleChange} className="block place-self-center my-1 w-full text-base text-black
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-gray-100 file:text-black
          hover:file:bg-violet-100
        "/>
      </label>

      <label className="block my-1 flex">

        <div>
        <span className="block text-lg font-medium text-white text-center">Latitude</span>
        <input type="number" value={data.lat} name="lat" id="lat" onChange={handleChange} className="my-1 bg-gray-300 block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-black
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        "/>
        </div>
        <span className="w-5"></span>
        <div>
        <span className="block text-lg font-medium text-white text-center">Longitude</span>
        <input type="number" value={data.lng} id="lng" name="lng" onChange={handleChange} className="my-1 bg-gray-300 block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-black
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        "/>
        </div>
      </label>

      <label className='grid my-1'>
      <span className="block text-lg text-center font-medium text-white">Describe your Complaint:</span>
      <textarea value={data.message} name="message" id="message" onChange={handleChange} className='rounded my-1 bg-gray-300 text-black place-self-center' placeholder='Your message' cols="60" rows="6"> </textarea>
      </label>

      <button className="flex-shrink-0 bg-gray-100 w-28 place-self-center hover:bg-yellow-500  border-gray-100 hover:border-yellow-500 text-lg border-4 text-black py-1 px-4 rounded-md mb-11" type="submit">
        Submit
      </button>
    </form>
    </div>
    </div>
  )
}

export default NewAlert