import React from 'react'

function NewReport() {
  return (
    <div className='newreport-div grid'>
      <div className='flex place-self-center gap-4 my-7'>
      <h1 className='text-5xl py-9 text-yellow-400'>New Report</h1>
      {/* <figure class="rounded-lg p-8 md:p-0 dark:bg-slate-900"> */}
            <div className="flex rounded-xl p-2 dark:bg-slate-900 pr-4">
  <img className="rounded-full h-24 w-24 mx-auto" src='https://w7.pngwing.com/pngs/632/307/png-transparent-paper-planes-send-newsletter-icon-blue-tinker-thumbnail.png' alt=""/>
  </div>
  {/* </figure> */}
  </div>
<form className='w-96 place-self-center'>
      <label class="block mb-6">
        <span class="block text-lg font-medium text-white">Title</span>
        <input type="text" value="" class="my-1 block w-full px-3 py-1 bg-gray-300 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
      </label>

      <label class="grid my-6">
        {/* <span class="sr-only">Choose profile photo</span> */}
        <span class="block text-lg font-medium text-white">File</span>
        <input type="file" class="block place-self-center my-1 w-full text-base text-black
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-gray-100 file:text-black
          hover:file:bg-violet-100
        "/>
      </label>

      <label class="block my-6">
        <span class="block text-lg font-medium text-white">Address</span>
        <input type="text" value="" class="my-1 bg-gray-300 block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
        "/>
      </label>

      <label className='grid my-6'>
      <span class="block text-lg font-medium text-white">Describe your Complaint:</span>
      <textarea className='rounded my-1 bg-gray-300 place-self-center' placeholder='Your message' cols="60" rows="6"> </textarea>
      </label>

      {/* <button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
      Save changes
      </button> */}

      <button class="flex-shrink-0 bg-gray-100 hover:bg-yellow-500  border-gray-100 hover:border-yellow-500 text-lg border-4 text-black py-1 px-4 rounded-md mb-11" type="submit">
        Submit
      </button>
    </form>
    </div>
  )
}

export default NewReport