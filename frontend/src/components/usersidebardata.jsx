import React from 'react'
import {MdHome} from 'react-icons/md';
import {MdOutlineHistory} from 'react-icons/md';
import {IoMdBookmark} from 'react-icons/io';
import {MdEventNote} from 'react-icons/md';

 export const usersidebardata=[
    {
        title:"Home",
        icon:   <MdHome size={38}/>,
        selected:true,

        link:"/UserHomeTab"
    },
    {
        title:"History",
        icon:   <MdOutlineHistory size={38}/>,
        selected:false,

        link:"/UserHistory"
    },
    {
        title:"Saved",
        icon:   <IoMdBookmark size={38}/>,
        selected:false,

        link:"/UserSaved"
    },
    {
        title:"Assesment",
        icon:   <MdEventNote size={38} />,
        selected:false,

        link:"/UserAssesment"
    }

 ]

