import React,{useState, useRef} from 'react'
import Form from './Form'
import {Link} from 'react-router-dom'
import './form.css'
import {db, storage} from "../Firebase"
import { collection, addDoc } from "firebase/firestore"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ref, uploadBytes} from "firebase/storage";
import {v4} from "uuid"

const NewDealForm = () => {
  const companyName = useRef(null)
  const amountRaised = useRef(null)
  const companyDescription = useRef(null)
  const performanceHistory = useRef(null)
  const preTax = useRef(null)
  const postRef = useRef(null)
  const tenure = useRef(null)
  const imgPath= useRef(null)

  const [logoUpload, setLogoUpload]  = useState(null);
  const [performanceGraph, setPerformanceGraph]  = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(logoUpload.name)
    if (!companyName.current.value|| !amountRaised.current.value || !companyDescription.current.value || !performanceHistory.current.value || !preTax.current.value || !postRef.current.value || !tenure.current.value) {
      return toast("PLease Enter all the required data")
    }else{
      try {
        if(logoUpload === null) {
          return toast("Please upload company logo")
        }else{
           const companyLogoRef = ref(storage,`logo/${logoUpload.name + v4()}`);
           const performanceGraphRef = ref(storage,`performance-graph/${logoUpload.name + v4()}`);
  
           uploadBytes(companyLogoRef,logoUpload).then(()=>{
              console.log("Logo uploaded")
           })
           uploadBytes(performanceGraphRef,performanceGraph).then(()=>{
            console.log("Graph uploaded")
         })
      }
        await addDoc(collection(db, 'deals'), {
          imgPath:imgPath.current.value,
          companyName:companyName.current.value,
          amountRaised:amountRaised.current.value,
          companyDescription:companyDescription.current.value,
          performanceHistory:performanceHistory.current.value,
          preTax:preTax.current.value,
          postRef:postRef.current.value,
          tenure:tenure.current.value
        }).then(()=>{
          companyName.current.value=''
          amountRaised.current.value=''
          companyDescription.current.value=''
          performanceHistory.current.value=''
          postRef.current.value=''
          preTax.current.value=''
          tenure.current.value=''
          return toast("Form Submited")
        })
      } catch (err) {
        alert(err)
      }
    }
    
  }
  toast.success( {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  return (
    <div className="form">
  <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
        <header className='header'>
            <h1 className="title">
               New Deals
            </h1>
            <div className="right-part">
                <div className="btn">
                    <Link to='/Deals'><button className='cancel-btn'>Cancel</button></Link>
                </div>
                <div className="btn">
                     <button className='live-btn' onClick={handleSubmit}>Make it Live</button>
                </div>
            </div>
        </header>
        <form>
            {/* Upload Image */}
        <div>
              <label className="block text-sm font-medium text-gray-700 capitalize">upload your company logo </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" ref={imgPath} onChange={(e) => {setLogoUpload(e.target.files[0]);}}/>
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
        </div>
        {/* Company name */}
        <div className="grid grid-cols-6 gap-3 w-full">
              <div className="col-span-6 sm:col-span-3">
                <label  className="block text-sm font-medium text-gray-700">Company Name <span className='red'>*</span></label>
                <input type="text" name="comapny-name" id="csomapny-name" autoComplete="given-name" className="input-form mt-1 h-1/2 block w-3/4 shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder='Eg: "Swiggy,Zomato"' required ref={companyName}/>
              </div>

              <div className="col-span-3 sm:col-span-3">
                <label  className="block text-sm font-medium text-gray-700">Amount to be raised  <span className='red'>*</span></label>
                <input type="text" name="amount-raised" id="amount-raised" autoComplete="family-name" className="input-form mt-1 h-1/2 block w-2/3 shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder='Eg: "₹100Crore or ₹150Crore"' ref={amountRaised} required/>
              </div>

        </div>
        {/* Company Description */}
        <div className='w-full'>
              <label htmlFor="about" className="block text-sm font-medium text-gray-700">Company Description </label>
              <div className="mt-1">
                <textarea id="company-description" className="shadow-sm input-form mt-1 block w-5/6 sm:text-sm border border-gray-300 rounded-md" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry." ref={companyDescription}></textarea>
              </div>
        </div>
        {/* Upload Graph Image */}
        <div>
              <label className="block text-sm font-medium text-gray-700 capitalize">Upload graph about performance history </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={(e) => {setPerformanceGraph(e.target.files[0]);}}/>
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
        </div>
        {/*Performance History */}
        <div className='w-full'>
              <label  className="block text-sm font-medium text-gray-700">Any other information about performance history </label>
              <div className="mt-1">
                <textarea id="performance-history" className="shadow-sm input-form mt-1 block w-5/6 sm:text-sm border border-gray-300 rounded-md" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry." ref={performanceHistory}></textarea>
              </div>
        </div>
        {/* Pre Tax */}
        <div className="grid grid-cols-6 gap-3 w-full">
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Pre Tax <span className='red'>*</span></label>
                <input type="text" name="pre-tax" id="pre-tax" autoComplete="given-name" className="input-form mt-1 h-1/2 block w-3/4 shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder='Eg: "5%,6%' ref={preTax} required/>
              </div>

              <div className="col-span-3 sm:col-span-3">
                <label htmlFor="post-tax" className="block text-sm font-medium text-gray-700">Post Tax  <span className='red'>*</span></label>
                <input type="text" name="post-tax" id="amount-raised" autoComplete="family-name" className="input-form mt-1 h-1/2 block w-2/3 shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder=' Eg: 5%,6%' ref={postRef} required/>
              </div>

              <div className="col-span-3 sm:col-span-3">
                <label htmlFor="amount-raised" className="block text-sm font-medium text-gray-700">Tenure  <span className='red'>*</span></label>
                <input type="text" name="amount-raised" id="amount-raised" autoComplete="family-name" className="input-form mt-1 h-1/2 block w-3/4 shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder=' Eg: 1yr,2yr' ref={tenure} required/>
              </div>

        </div>
        </form>
    </div>
  )
}

export default NewDealForm