import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouseChimney} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';




export const SidebarData=[
    // {
    //     title: "Home",
    //     path: "/home",
    //     icon: <FaIcons.FaHome />,
    //   },
      {
        title: "Profile",
        path: "/profile",
        icon: <FontAwesomeIcon icon={faUser} />,
      },

      {
        title: "New Report",
        path: "/newreport",
        icon:<FontAwesomeIcon icon={faHouseChimney} />,
      },
     
    //   {
    //     title: "Invitation",
    //     path: "/studentinvitationform",
    //     icon: <MdIcons.MdInsertInvitation />,
    //   },
    //   {
    //     title: "Reviews",
    //     path: "/reviews",
    //     icon: <MdIcons.MdOutlineReviews />,
    //   },
  
    //   {
    //     title: "Logout",
    //     path: "/",
    //     icon: <MdIcons. MdLogout />,
    //   },
]









