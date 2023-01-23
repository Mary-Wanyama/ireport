import { useState } from "react"
import React from 'react'
import Sidebar from "../SideBar/SideBar";

function NewReport() {

  // const [formData, setFormData]=useState([{
  //   title:"",
  //   // category:"",
  //   // evidence: "",
  //   // address: "",
  //   message:"",
  //   user_id: "",
  // }])


  const handleSaveReport = (e) => {
        e.preventDefault();

    const formData = new FormData();
    formData.append('report[report_category]', e.target.report_category.value)
    formData.append('report[report_title]', e.target.report_title.value)
    formData.append('report[report_address]', e.target.report_address.value)
    formData.append('report[report_message]', e.target.report_message.value)
    for (let i = 0; i < e.target.evidence.files.length; i++) {
    formData.append("report[evidences][]", e.target.evidence.files[i], e.target.evidence.files[i].name)}
    submitToAPI(formData);


    function submitToAPI(formData) {
      fetch("http://localhost:3000/reports", {
        method: "POST",
        body: formData
      })
      .then((response) => response.json())
      .then((formData) => { setFormData(formData)
        // if (data.ok) {
        //   setRegistered(true);}
      });
  };

    };

  // function handleChange(e){
  //   setFormData({...formData, [e.target.name]:e.target.value})
  // }


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
<form className='w-96 place-self-center text-black' onSubmit ={(e)=> {handleSaveReport(e)}}>
 
      <label htmlFor="report_category" class="block mb-1">
        <span class="block text-lg font-medium text-white text-center">Choose Category</span>
      <div className="relative" >
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Red Flag (An incident linked to corruption)</option>
          <option>Intervention (A call for a government agency to intervene e.g repair bad road sections, collapsed bridges).</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center  text-gray-700">
          <svg class="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
      </label>

      <label htmlFor="report_title" class="block mb-1">
        <span class="block text-lg font-medium text-white text-center">Title</span>
        <input type="text" name="report_title" 
        // value={formData.title} onChange={handleChange} 
        class="my-1 block w-full px-3 py-1 
        bg-gray-300 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-black
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
      </label>

      <label htmlFor="evidence" class="grid my-1">
        {/* <span class="sr-only">Choose profile photo</span> */}
        <span class="block text-lg font-medium text-white text-center">Evidence</span>
        <input type="file" name="evidence" 
        // value={formData.evidence} onChange={handleChange} 
        class="block place-self-center my-1 w-full text-base text-black
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-gray-100 file:text-black
          hover:file:bg-violet-100
        "/>
      </label>

      <label htmlFor="report_address" class="block my-1">
        <span class="block text-lg font-medium text-white text-center">Address</span>
        <input type="text" name="report_address" 
        // value={formData.address} onChange={handleChange} 
        class="my-1 bg-gray-300 block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-black
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        "/>
      </label>

      <label htmlFor="report_message" className='grid my-1'>
      <span class="block text-lg text-center font-medium text-white">Describe your Complaint:</span>
      <textarea name="report_message" 
      // value={formData.message} onChange={handleChange} 
      className='rounded my-1 bg-gray-300 text-black place-self-center' placeholder='Your message' cols="60" rows="6"> </textarea>
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









// import { useState } from "react"
// import React from 'react'
// import Sidebar from "../SideBar/SideBar";

// function NewReport() {

//   const [formData,setFormData]=useState([{
//     title:"",
//     // category:"",
//     // evidence: "",
//     // address: "",
//     message:"",
//     user_id: "",
//   }])


//   const handleSaveReport = async (e) => {
//         e.preventDefault();
//         console.log(formData);
//             const res = await fetch("https://reporting-production.up.railway.app/reveals", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     title: formData.title,
//                     // category: formData.category,
//                     // evidence: formData.file,
//                     // address: formData.address,
//                     message: formData.message,
//                     user_id: 1,
//                 }),
//             });
//             const response = await res.json();
//             // handleNewReport(response);
//             setFormData([{
//               title:"",
//               // file: "",
//               // address: "",
//               message:"",
//               user_id: 1,
//             }]);
//     };

//   function handleChange(e){
//     setFormData({...formData, [e.target.name]:e.target.value})
//   }


//   return (
//     <div className='newreport-body flex-row'>
//       <Sidebar/>
//       <div className='newreport-div ml-20 grid'>
//       <div className='flex place-self-center gap-4 my-7'>
//       <h1 className='text-5xl py-9 text-yellow-400'>New Report</h1>
//       {/* <figure class="rounded-lg p-8 md:p-0 dark:bg-slate-900"> */}
//             <div className="flex rounded-xl p-2 dark:bg-slate-900 pr-4">
//   <img className="rounded-full h-24 w-24 mx-auto" src='https://w7.pngwing.com/pngs/632/307/png-transparent-paper-planes-send-newsletter-icon-blue-tinker-thumbnail.png' alt=""/>
//   </div>
//   {/* </figure> */}
//   </div>
// <form className='w-96 place-self-center text-black' onSubmit={handleSaveReport}>
 
//       <label class="block mb-1">
//         <span class="block text-lg font-medium text-white text-center">Choose Category</span>
//       <div className="relative" >
//         <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
//           <option>Red Flag (An incident linked to corruption)</option>
//           <option>Intervention (A call for a government agency to intervene e.g repair bad road sections, collapsed bridges).</option>
//         </select>
//         <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center  text-gray-700">
//           <svg class="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
//         </div>
//       </div>
//       </label>

//       <label class="block mb-1">
//         <span class="block text-lg font-medium text-white text-center">Title</span>
//         <input type="text" value={formData.title} name="title" onChange={handleChange} class="my-1 block w-full px-3 py-1 bg-gray-300 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-black
//           focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
//       </label>

//       <label class="grid my-1">
//         {/* <span class="sr-only">Choose profile photo</span> */}
//         <span class="block text-lg font-medium text-white text-center">Evidence</span>
//         <input value={formData.evidence} type="file" name="file" onChange={handleChange} class="block place-self-center my-1 w-full text-base text-black
//           file:mr-4 file:py-2 file:px-4
//           file:rounded-full file:border-0
//           file:text-sm file:font-semibold
//           file:bg-gray-100 file:text-black
//           hover:file:bg-violet-100
//         "/>
//       </label>

//       <label class="block my-1">
//         <span class="block text-lg font-medium text-white text-center">Address</span>
//         <input type="text" value={formData.address} name="address" onChange={handleChange} class="my-1 bg-gray-300 block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-black
//           focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
//         "/>
//       </label>

//       <label className='grid my-1'>
//       <span class="block text-lg text-center font-medium text-white">Describe your Complaint:</span>
//       <textarea value={formData.message} name="message" onChange={handleChange} className='rounded my-1 bg-gray-300 text-black place-self-center' placeholder='Your message' cols="60" rows="6"> </textarea>
//       </label>

//       <button class="flex-shrink-0 bg-gray-100 w-28 place-self-center hover:bg-yellow-500  border-gray-100 hover:border-yellow-500 text-lg border-4 text-black py-1 px-4 rounded-md mb-11" type="submit">
//         Submit
//       </button>
//     </form>
//     </div>
//     </div>
//   )
// }

// export default NewReport