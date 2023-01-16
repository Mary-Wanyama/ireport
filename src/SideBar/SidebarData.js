import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouseChimney, faRightFromBracket, faPhoneFlip, faLocationDot, faPlus} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';


export const SidebarData=[
    {
        title: "Home",
        path: "/",
        icon: <FontAwesomeIcon icon={faHouseChimney} />,
      },
      {
        title: "Profile",
        path: "/profile",
        icon: <FontAwesomeIcon icon={faUser} />,
      },

      {
        title: "New Report",
        path: "/newreport",
        icon:<FontAwesomeIcon icon={faPlus} />,
      },
     
      {
        title: "Maps",
        path: "/map",
        icon: <FontAwesomeIcon icon={faLocationDot} />,
      },
      {
        title: "Contact Us",
        path: "/contact",
        icon: <FontAwesomeIcon icon={faPhoneFlip} />,
      },
  
      {
        title: "Logout",
        path: "/register",
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
      },
]









