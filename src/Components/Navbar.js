import React from 'react'
import { Link } from 'react-router-dom'
import auth from '../Config/Firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useContext } from "react";
import { dataContext } from "../Context/Datacontext";

function Navbar() {

   let {isloggedin} = useContext(dataContext)
    
  let navigate = useNavigate();


  async function handleLogout(){
    const confirmLogout = window.confirm("Are you sure you want to logout?")
    if(confirmLogout){
    //  signout is async 
   await signOut(auth);
    navigate("/login")
    }
  }

  function handleBlog(){
    if(isloggedin){
      navigate("/blogs")
    }else{
      alert("Please login to view Blogs :)")
    }
  }
  
  return (
    <div className='flex items-center justify-between text-white bg-slate-600 py-4 px-5 sticky top-0 z-50 md:px-8'>
      <h1 className=' text-xl md:text-3xl font-bold'>Blog-Portfolio</h1>

      <div className='flex items-center  gap-3 md:gap-10 md:text-xl'>
        <Link to={'/'} className='hover:underline hover:text-orange-400'>Home</Link>
        <button onClick={handleBlog} className='hover:underline hover:text-orange-400'>Blogs</button>
        <Link to={'/#about'}  className='hover:underline hover:text-orange-400'>About</Link>
       { isloggedin? 
         <button  onClick={handleLogout}  className='bg-orange-400 p-1 rounded-md'>Logout</button>
        :<Link to={'/login'} className='bg-fuchsia-500 px-2 p-1 rounded-md'>Login</Link>}
      </div>
    </div>
  )
}

export default Navbar