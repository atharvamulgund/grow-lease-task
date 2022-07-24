import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import { SideBarData } from './SideBarData'
import './Sidebar.css'

const Sidebar = () => {
    const [sideBar, setSideBar] = useState(false)
    const showSiderbar = () => setSideBar(!sideBar)
  return (
    <>
        <div className="sidebar">
          <Link to="#" className='menu-bars'>
            <FaIcons.FaBars onClick={showSiderbar}/>
          </Link>
          <div className="search">
            <AiIcons.AiOutlineSearch/>
            <input type='text' placeholder='Search for "Swiggy, Zomato"'/>
          </div>
          <div className="alert">
            <IoIcons.IoIosNotificationsOutline/>
          </div>
        </div>
        <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'  onClick={showSiderbar}>
                <li className="navbar-toggle">
                    <Link to='#' className='menu-bars'>
                      <AiIcons.AiOutlineClose/>
                    </Link>
                </li>
                <li className='nav-text heading'> 
                    <strong>GrowLease</strong>
                </li>
                <li className='nav-text mt-50'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReApl_g602XA2EcNl_8T_Edbq2HlrnbiMJGA&usqp=CAU" alt="user"/>
                    <div className="info">
                        <span className="name">Aniket Kumar Jha</span>
                        <span className="type">Admins</span>
                    </div>
                </li>
                {SideBarData.map((item, index)=>{
                        return(
                            <li key={index} className={item.className}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                      })}
            </ul>
        </nav>
    </>
  )
}

export default Sidebar