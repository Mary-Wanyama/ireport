import React from 'react'
import { useState, useEffect } from 'react'

function Test() {
    const navItems = [{item: "All Reports", link:"/allreports"}, {item:"My Reports", link:"/myreports"}, {items:"My Alerts", link:"/myalerts"},]

    const [data, setData] = useState([])
    // const [name, setName] =useState('')
    // const [image, setImage] = useState('')
    // const [message, setMessage] = useState('')
    // const [identity, setIdentity] =useState(1)
    const url = "http://localhost:3000/reveals"
    // const urlpath = url + "/" + identity
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(json =>{
            setData(json)
            
        })
    }, [])

  return (
    <div className='bg-slate-200 grid'>
    <div className="divide-y w-1/2 rounded-xl p-9 md:p-0 dark:bg-slate-900 shadow-2xl my-5">
    <nav className="py-4 px-6 text-sm font-medium  bg-slate-100">
      <ul className="flex space-x-3">

      <li>
        <a
            href='/newreport'
            className={`block px-3 py-2 rounded-md`}
        >
            New Releases
        </a>
        </li>
        {navItems.map((nav) => (
        <li>
        <a
            href={nav.link}
            className={`block px-3 py-2 rounded-md 'bg-sky-500 text-white`}
        >
            {nav.item}
        </a>
        </li>
        ))}

      </ul>
    </nav>

    <ul className="divide-y divide-slate-100">
    {data.map((report) => (



        <article className="flex items-start space-x-6 p-6 mb-1  bg-slate-100">
        <img src={report.report_image} alt="" width="80" height="88" className="flex-none rounded-md bg-slate-100" />
        <div className="min-w-0 relative flex-auto">
        <div>
            <h2 className="font-medium text-3xl text-slate-900 truncate ml-0">{report.report_title}</h2>
            </div>
            <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
            <div className="absolute top-0 right-0 flex items-center space-x-1">
                <dt className="text-sky-500">
                <span className="sr-only">Star rating</span>
                <svg width="16" height="20" fill="currentColor">
                    <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                </svg>
                </dt>
                <dd>Resolved</dd>
            </div>
            <div>
                <dt className="sr-only">Rating</dt>
                <dd className="px-1.5 ring-1 ring-slate-200 bg-gray-200 rounded">Category: Red Flag</dd>
            </div>
            {/* <div className="ml-2">
                <dt className="sr-only">Year</dt>
                <dd></dd>
            </div> */}
            <div>
                <dt className="sr-only">Genre</dt>
                <dd className="flex items-center">
                <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true">
                    <circle cx="1" cy="1" r="1" />
                </svg>
                Address
                </dd>
            </div>
            <div>
                <dt className="sr-only">Runtime</dt>
                <dd className="flex items-center">
                <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true">
                    <circle cx="1" cy="1" r="1" />
                </svg>
                {/* {report.report_title} */}
                </dd>
            </div>
            <div className="flex-none w-full mt-2 font-normal">
                <dt className="sr-only">Cast</dt>
                <dd className="text-slate-600">Created on: </dd>
                <dd className="text-slate-500 text-base">by George Watson</dd>
            </div>
            </dl>
        </div>
        </article>
    ))}




    </ul>
    {/* <Nav>
      <NavItem href="/new" isActive>New Releases</NavItem>
      <NavItem href="/top">Top Rated</NavItem>
      <NavItem href="/picks">Vincent’s Picks</NavItem>
    </Nav>
    <List>
      {movies.map((movie) => (
        <ListItem key={movie.id} movie={movie} />
      ))}
    </List> */}

  </div>
  </div>
  )
}

export default Test