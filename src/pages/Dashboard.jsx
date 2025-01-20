import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
const Dashboard = () => {
    const navigate = useNavigate()
  return (
    <div className='min-h-screen'>
       {/*Navbar for recruiter panel */}
         <div className='shadow py-4'>
            <div className='px-5 flex justify-between items-center'>
                <img onClick={e=> navigate('/')} className='max-sm:w-32 cursor-pointer' src={assets.logo} alt=""></img>
                <div className='flex items-center gap-3'>
                    <p className='max-sm:hidden'>Welcome, sneha</p>
                    <div className='realtive group'>
                        <img className='w-8 border rounded-full' src={assets.company_icon} alt=""></img>
                        <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black'>
                            <ul className='list-none m-0 mt-[50px] mr-4 pt-2 bg-white rounded-md border text-sm'>
                                <li className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
         </div>
         <div className='flex items-start'>
            {/*Left sidebar with option to add job, manage jobs,view applications*/}
            <div className='inline-block min-h-screen border-r-2'>
                <ul className='flex flex-col items-start pt-5 text-gray-800'>
                    <NavLink className={({isActive})=>
                            `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`} to={'/dashboard/add-job'}>
                      <img className='min-w-4' src={assets.add_icon} alt=""></img>
                      <p className='max-sm:hidden'>Add Jobs</p>
                    </NavLink>
                    <NavLink className={({isActive})=>`flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`}  to={'/dashboard/manage-job'}>
                      <img className='min-w-4' src={assets.home_icon} alt=""></img>
                      <p className='max-sm:hidden'>Manage Jobs</p>
                    </NavLink>
                    <NavLink className={({isActive})=>`flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`}  to={'/dashboard/view-applications'}>
                      <img className='min-w-4' src={assets.person_tick_icon} alt=""></img>
                      <p className='max-sm:hidden'> View Applications</p>
                    </NavLink>
                </ul>
            </div>
            <div>
            <Outlet/> 
            </div>
         </div>
        
    </div>
  )
}

export default Dashboard