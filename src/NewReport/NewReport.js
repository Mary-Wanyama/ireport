import React from 'react'

function NewReport() {
  return (
    <div className='newreport-div text-yellow-400'>NewReport

<form className='w-96'>
      <label class="block mb-6">
        <span class="block text-lg font-medium text-white">Title</span>
        <input type="text" value="" class="my-1 block w-full px-3 py-1 bg-gray-200 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
        "/>
      </label>

      <label class="block my-6">
        {/* <span class="sr-only">Choose profile photo</span> */}
        <span class="block text-lg font-medium text-white">File</span>
        <input type="file" class="block my-1 w-full text-sm text-black
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-black
          hover:file:bg-violet-100
        "/>
      </label>

      <label class="block my-6">
        <span class="block text-lg font-medium text-white">Address</span>
        <input type="text" value="" class="my-1 bg-gray-200 block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
        "/>
      </label>

      <label className='block my-6'>
      <span class="block text-lg font-medium text-white">Description</span>
      <textarea className='rounded my-1 bg-gray-200' placeholder='Your message' cols="60" rows="6"> </textarea>
      </label>

      {/* <button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
      Save changes
      </button> */}

      <button class="flex-shrink-0 bg-gray-100 hover:bg-teal-500 font-bold border-gray-200 hover:border-teal-500 bold text-lg border-4 text-black py-1 px-4 rounded-md mb-11" type="submit">
        Submit
      </button>
    </form>
    </div>
  )
}

export default NewReport