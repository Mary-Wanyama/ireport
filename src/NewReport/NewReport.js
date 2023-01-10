import React from 'react'

function NewReport() {
  return (
    <div className='newreport-div'>NewReport

<form className='w-96'>
      <label class="block">
        <span class="block text-lg font-medium text-white">Title</span>
        <input type="text" value="" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
        "/>
      </label>

      <label class="block">
        {/* <span class="sr-only">Choose profile photo</span> */}
        <span class="block text-lg font-medium text-white">File</span>
        <input type="file" class="block w-full text-sm text-slate-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100
        "/>
      </label>

      {/* <button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
      Save changes
      </button> */}

      <button class="flex-shrink-0 bg-gray-300 hover:bg-teal-500 border-gray-300 hover:border-teal-500 text-lg border-4 text-black py-1 px-4 rounded-md" type="submit">
        Submit
      </button>
    </form>
    </div>
  )
}

export default NewReport