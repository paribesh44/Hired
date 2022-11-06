import React from 'react'
import {MdHome} from 'react-icons/md';
import {MdOutlineHistory} from 'react-icons/md';
import {IoMdBookmark} from 'react-icons/io';
import {MdEventNote} from 'react-icons/md';

 export const usersidebardata=[
    {
        title:"Home",
        icon:   <MdHome size={45}/>,
        selected:true,

        link:"/UserHomeTab"
    },
    {
        title:"History",
        icon:   <MdOutlineHistory size={45}/>,
        selected:false,

        link:"/UserHistory"
    },
    {
        title:"Saved",
        icon:   <IoMdBookmark size={45}/>,
        selected:false,

        link:"/ApplyJob"
    },
    {
        title:"Assesment",
        icon:   <MdEventNote size={45} />,
        selected:false,

        link:"/UserAssesment"
    }

 ]

