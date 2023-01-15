import React from 'react'
import {SidebarData} from './SidebarData';
import {NavLink} from 'react-router-dom';

function Sidebar() {
    return (
        <>
            <div className="sidebar-list text-white w-40 bg-yellow-600 z-40 fixed h-full grid justify-items-center mb-4">
                <div className='mt-7 mb-14'><img className="rounded-full h-28 w-28 mx-auto" src="https://w7.pngwing.com/pngs/632/307/png-transparent-paper-planes-send-newsletter-icon-blue-tinker-thumbnail.png" alt=""/></div>
                <div className='mb-1'>
                {SidebarData.map((val, key)=>{
                        return(
                            <div className='mb-8' key={key}>
                                <NavLink to={val.path}
                                className="row"
                                id={window.location.pathname === val.path ? "active" : ""}
                                onClick={()=> {
                                    window.location.pathname = val.path}}
                                >
                                <div id="icon">{val.icon}</div>
                                <div id="title">{val.title}</div>
                                </NavLink>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </>
    )
}

export default Sidebar

