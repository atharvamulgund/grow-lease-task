import React from 'react'
import { Link } from 'react-router-dom'
import * as IoIcons from "react-icons/io"
import './deals.css'
import DisplayForm from './DisplayForm'
const Deals = () => {
  return (
    <div className='deals'> 
      <header className='header'>
      <h1 className="title">
        Deals
      </h1>
      <div className="right-part">
        <div className="filter">Company: <span>All </span><IoIcons.IoMdArrowDropdown/></div>
        <div className="btn-1">
        <Link to='/New-investment'><button ><IoIcons.IoIosAdd/>Add New Deal</button></Link>
        </div>
      </div>
      </header>
      <DisplayForm />
    </div>
  )
}

export default Deals