import React,{useState} from 'react'
import Navbar from '../components/Navbar'

const Applications = () => {

  const[isEdit ,setEdit]= useState(false)
  return (
   <>
     <Navbar/>
     <div className='container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10'>
      <h2 className='text-xl font-semibold'>Your Resume</h2>
      <div className='flex gap-2 mb-6 mt-3'>
       {
        isEdit?
        <>

        </>: 
         <div>
           <a href="">
            Resume
           </a>
           <button>
            Edit
           </button>
         </div>
       }
      </div>
     </div>
   </>
  )
}

export default Applications