import React,{useEffect,useState} from 'react'
import Form from './Form'
import { Link } from 'react-router-dom'
import './display-form.css'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import { db } from '../Firebase'
const DisplayForm = () => {
    const [getData, setGetData] = useState({})
    useEffect(() => {
        const q = query(collection(db, 'deals'))
        onSnapshot(q, (querySnapshot) => {
          setGetData(querySnapshot.docs.map(doc => ({
            data: doc.data()
          })))
        })
    },[])

    const [selectedItem, setSelectedItem] = useState({})
    console.log(selectedItem)

    const [close, setClose] = useState(false)


  return (   
    <>
   

    {!close && 
          <div className="table">
          <div className="heading">
              <ul className='heading-list'>
                  <li className="heading-items"><input type="checkbox" name="" id="" /></li>
                  <li className="heading-items">Name of the company</li>
                  <li className="heading-items">Company Description</li>
                  <li className="heading-items">Amount to be raised</li>
                  <li className="heading-items">Performance History</li>
                  <li className="heading-items">pre Tax</li>
                  <li className="heading-items">post tax</li>
                  <li className="heading-items">Tenure</li>
              </ul>
          </div>
          <div className="userdata">
          <ul className='userdata-list'>
                  {getData.length>0 ?getData.map((items,key)=>{
                      return(
                          // <Link to='/user-form'>
                          <div key={key} className='flex justify-center items-center w-full text-center' onClick={()=>{setSelectedItem(items.data); setClose(true)}}>
                          <li className="userdata-items"><input type="checkbox" name="" id="" /></li>
                         <li className="heading-items">{items.data.companyName}</li>
                          <li className="heading-items">{items.data.companyDescription}</li>
                          <li className="heading-items">{items.data.amountRaised}</li>
                          <li className="heading-items">{items.data.performanceHistory}</li>
                          <li className="heading-items">{items.data.preTax}</li>
                          <li className="heading-items">{items.data.postRef}</li>
                          <li className="heading-items">{items.data.tenure}</li>
                          </div>
                      //    </Link>
                      )
                  }):''}
          </ul>
          </div>
      </div>
    }
        {close && 
<Form rowData={selectedItem} onClose={(e)=>{setClose(e)}} close={close}/>
}
    </>
  )
}

export default DisplayForm