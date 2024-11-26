import { useState } from "react";
import PropTypes from 'prop-types';



const Nav = ({SharingData}) => {
    const [searched , setsearched] = useState('');
   
    const bg = {
        backgroundImage: 'url("https://i.postimg.cc/wBvQPg68/Clothing.png")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        zIndex: -1

    }
  

    const  Submitting =(e)=>{
        e.preventDefault()
        console.log(searched)
        SharingData(searched)

    }

    
    return (
        <div   className="text-center pt-20 md:pt-32 pb-80 relative">
            <div>
                
            </div>
             <div style={bg} className="-top-44 w-full h-[800px] absolute opacity-10">
            </div>

            <h1 className="text-3xl w-9/12 md:w-full m-auto lg:text-5xl text-black font-bold mb-20 ">I Grow By Helping People In Need</h1>
            <div className="">
             <form onSubmit={Submitting}>
            <input type="text"placeholder="Type here"  onChange={(event)=>setsearched(event.target.value)}
             className=" mb-8 md:mb-0 input text-xl w-4/5 md:w-full md:h-14  max-w-xs border-opacity-30 border-black md:rounded-tr-none md:rounded-br-none  bg-white " />
             <button   className="bg-red-600 md:text-xl text-white px-8 rounded-lg md:rounded-tl-none md:rounded-bl-none py-2 md:py-4">Search</button>
             </form>   
            </div>
           
        </div>
    );
};

Nav.propTypes = {
   
    handleSaving:PropTypes.func
};
export default Nav;