import { useEffect, useState } from "react";
import MakePie from "./MakePie";

const Statistics = () => {
            const [resutl1,setres1] = useState(null)
            const [resutl2,setres2] = useState(null)
    const donated = JSON.parse(localStorage.getItem('donation'))
   

    useEffect(()=>{

        if(donated){
            const len = donated.length;
         
            if(len<=12){
              const  res1 = ((len/12)*100).toFixed(2)
               const res2 = (((12-len)/12)*100).toFixed(2)
                setres1(res1)
                setres2(res2)
            }
        }

    },[])


   
    return (
        <div className="text-center">
           <MakePie resutl1={resutl1} resutl2={resutl2}></MakePie>
           <div className="lg:text-3xl md:flex m-auto justify-center md:gap-24 lg:gap-48"  >
            <div className="flex items-center">
            <h1 >Your Donation  </h1>
            <div className="w-44 h-3 lg:h-6 ml-6 lg:mt-2 bg-emerald-400"></div>
            </div>
           <div className="flex items-center">
            <h1>Total Donation </h1>
            <div className="w-44 h-3 lg:h-6 ml-6 lg:mt-2 bg-red-500 "></div>
            </div>
           </div>
        </div>
    );
};

export default Statistics;