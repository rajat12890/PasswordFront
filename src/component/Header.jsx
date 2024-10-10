import React from 'react'
import { useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
function Header({type}) {
    const ref=useRef()
    const navigate=useNavigate()
    // const[login]
    function toogle(){
        if (ref.current) {
            ref.current.style.display = ref.current.style.display === 'block' ? 'none' : 'block';
      
          }
    }
    const handleLogout = () => {
      localStorage.removeItem("user");
      navigate("/login");
    }
  return (
   <>
   <nav className='bg-slate-800 w-full text-white flex justify-between  h-16 px-5 md:px-16 py-5'>
    <div className='flex  justify-between'>
     <h1 className=' font-black text-xl mb-1 hover:text-green-500 font-serif group transition duration-3000 md:transition duration-2000'>{`${type}`} Manager
     </h1>
    
     </div>
     <button onClick={toogle} ref={ref} className=' absolute right-1 top-4 '><svg class="h-8 w-8 text-slate-100"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
</svg></button>

<ul className=' hidden flex justify-between  text-white'  ref={ref} >
        <div className='flex justify-between '>
        <NavLink to="/">  <li className='mr-4 md:mr-8 lg:mr-12 font-medium hover:text-red-500 group transition duration-3000'>Home
       <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-800' /></li> </NavLink>
    <NavLink to="/login"> <li className='mr-4 md:mr-8 lg:mr-12 font-medium hover:text-blue-500 group transition duration-3000' >Login
       <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600' />
        </li>
        </NavLink>
        <button onClick={handleLogout}><li className='mr-4 md:mr-8 lg:mr-12 font-medium hover:text-yellow-500 group transition duration-3000' >Logout
       <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-600' />
        </li>
        </button>
       </div>   
     </ul>
   </nav>
   </>
  )
}

export default Header
