import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useLoaderData, useParams } from "react-router-dom";
import { SavedDonate } from "../Donation/localSave";
import 'react-toastify/dist/ReactToastify.css';

const ViewDetails = () => {
    
   

    const LoadData = useLoaderData()
   
    const ShowToast = () =>{
        toast("You Have Donated Successfully")
    }
    
    const {id} = useParams()
   

    const DataFound = LoadData.find(load => load.id == id
    )
       
    const {picture,title,text_button_bg,price,description} = DataFound;
    console.log(picture)
    return (
        <div>
            <div className="w-10/12 m-auto mt-20">
                <div>
                    <div className="relative">
                <img className="w-full lg:h-[950px]" src={picture} alt="" />
                
                
                <div  className="absolute py-4 lg:py-10 -bottom-8 md:bottom-0 md:bg-gray-800 md:bg-opacity-50 w-full">
                  
                    <button  onClick={()=>{SavedDonate(DataFound);ShowToast()}} className="ml-2 md:ml-12 md:text-2xl text-sm font-semibold md:px-4 px-2 py-2 lg:py-4 rounded-md text-white" style={{backgroundColor: `${text_button_bg}`}} >Donate ${price}</button>
                    <ToastContainer />
                </div>

                </div>    
                </div>

                <div className="text-black my-20">
                    <h1 className="font-bold mb-8 text-3xl md:text-4xl">{title}</h1>
                    <h2 className="md:text-2xl">{description}</h2>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;