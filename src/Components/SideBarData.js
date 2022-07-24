import React from 'react';
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as MdIcons from "react-icons/md"


export const SideBarData = [
    {
        title:'Dashboard',
        path:'/',
        icon:<MdIcons.MdSpaceDashboard/>,
        className:'nav-text',
    },
    {
        title:'Deals',
        path:'/Deals',
        icon:<FaIcons.FaDatabase/>,
        className:'nav-text',
    },
    {
        title:'Emails',
        path:'/',
        icon:<AiIcons.AiOutlineMail/>,
        className:'nav-text',
    },
    {
        title:'Investors',
        path:'/',
        icon:<AiIcons.AiOutlineUser/>,
        className:'nav-text',
    },
    {
        title:'Chat',
        path:'/',
        icon:<MdIcons.MdChatBubbleOutline/>,
        className:'nav-text',
    },
    {
        title:'Finances',
        path:'/',
        icon:<MdIcons.MdAutoGraph/>,
        className:'nav-text',
    },
    {
        title:'Settings',
        path:'/',
        icon:<AiIcons.AiOutlineSetting/>,
        className:'nav-text borderTop',
    },
]