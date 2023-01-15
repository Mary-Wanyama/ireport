import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../SideBar/SideBar'

function Profile() {
  return (
    <div className='bg-gray-200'>
      <Sidebar/>
    <p className=' text-5xl ml-20 text-green-700 font-bold py-9'>My Profile</p>
    <div className='grid justify-items-center ml-20 mb-4'>
        <div className="bg-slate-100 w-1/2 rounded-xl p-9 md:p-0 dark:bg-slate-900 shadow-2xl my-5">
            <figure class="bg-slate-100 rounded-lg p-8 md:p-0 dark:bg-slate-900">
            <div className="flex-col bg-slate-100 rounded-xl p-9 dark:bg-slate-900">
              {/* {user-image} */}
  <img className="rounded-full h-32 w-32 mx-auto" src="https://w7.pngwing.com/pngs/632/307/png-transparent-paper-planes-send-newsletter-icon-blue-tinker-thumbnail.png" alt=""/>
  <div className="pt-6 flex-initial w-96 text-center mx-auto space-y-4">
    <blockquote>
    <div className="text-teal-500 font-semibold text-2xl my-7">
      {/* {username} */}
        Fred Matiang'i
      </div>
      <p className="text-black">
        {/* {body} */}
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repudiandae iste quos illo quisquam mollitia libero accusamus exercitationem eius sequi, sapiente maxime quaerat officiis saepe, recusandae necessitatibus, hic illum est adipisci nobis laboriosam ab molestias id. Animi dolor vero et dolorem, cum nam pariatur velit voluptatem dignissimos sapiente, dolorum laboriosam numquam libero ullam ratione ad ipsam nostrum in modi. Quam quae autem eaque delectus perferendis, nam quia est voluptatem blanditiis voluptate adipisci sint dolor, qui ipsa deserunt nesciunt nulla nostrum dolorem, necessitatibus explicabo accusamus. Aliquid sed consequuntur est ex facilis vitae dolore excepturi eligendi tempora molestias accusantium qui esse laborum, non hic distinctio soluta sunt ducimus velit illum aliquam libero asperiores! Est recusandae corrupti quam voluptas possimus    
      </p>
      <Link to={'/newreport'}>
      <h1 className='text-2xl font-semibold mt-16 text-green-700'>Add New Report</h1>
            <div className="flex rounded-xl p-2 dark:bg-slate-900">
  <img className="rounded-full h-14 w-14 mx-auto" src='https://cdn-icons-png.flaticon.com/128/1828/1828817.png' alt=""/>
  </div>
  </Link>
    </blockquote>
  </div>
</div>
</figure>
        </div>
   </div>
    </div>
  )
}

export default Profile