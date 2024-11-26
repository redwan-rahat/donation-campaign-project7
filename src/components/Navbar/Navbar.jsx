import { useState } from "react";
import { NavLink } from "react-router-dom";



const Navbar = () => {
        const  [active , setactive] = useState(true)
        const  [active1 , setactive1] = useState(false)
  
    return (
        <div>
            
            <div className="py-12  navbar md:justify-between md:w-10/12 m-auto ">
  
  <div className="w-auto navbar-start">

    {/* dropdown */}

    <div className="dropdown ">
      <div  tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="bg-white menu menu-lg dropdown-content  z-[1] p-2 shadow  rounded-lg h-48 w-44">
      <NavLink  to='/'  className={({isActive})=>{
            return  'px-4 text-black font-bold md:text-xl my-1 ' + (isActive ? 'text-red-600 lg:underline lg:underline-offset-4': '')
       }}><h1>Home</h1>
       </NavLink>
       <NavLink  to='/donation'  className={({isActive})=>{
            return  'px-4 text-black font-bold md:text-xl my-1 ' + (isActive ? 'text-red-600 lg:underline lg:underline-offset-4': '')
       }}><h1>Donations</h1>
       </NavLink>
       <NavLink  to='/statistics'  className={({isActive})=>{
            return  'px-4 text-black font-bold md:text-xl my-1 ' + (isActive ? 'text-red-600 lg:underline lg:underline-offset-4': '')
       }}><h1>Statistics</h1>
       </NavLink>
      </ul>
    </div>

    {/* dropdown end  */}
       <div className="w-48">
    <NavLink className='' to='/'><img src="https://i.postimg.cc/KzCfBwhX/Logo.png" alt="" /></NavLink>
    </div>
  </div>

  
  <div className="navbar-center hidden lg:flex">

 
       <NavLink  to='/'  className={({isActive})=>{
            return  'px-4 text-black font-bold md:text-xl my-1 ' + (isActive ? 'text-red-600 underline underline-offset-4': '')
       }}><h1>Home</h1>
       </NavLink>
       <NavLink  to='/donation'  className={({isActive})=>{
            return  'px-4 text-black font-bold md:text-xl my-1 ' + (isActive ? 'text-red-600 underline underline-offset-4': '')
       }}><h1>Donations</h1>
       </NavLink>
       <NavLink  to='/statistics'  className={({isActive})=>{
            return  'px-4 text-black font-bold md:text-xl my-1 ' + (isActive ? 'text-red-600 underline underline-offset-4': '')
       }}><h1>Statistics</h1>
       </NavLink>
      
    
  </div>
 
</div>
        </div>
    );
};

export default Navbar;