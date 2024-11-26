import { useEffect, useState } from "react";
import ShowCards from "./ShowCards";


const Cards = ({data}) => {


    const [dData , setdData] = useState([])
    const [viewdata,setview] = useState([])

    useEffect(()=>{

        fetch('donating.json')
        .then(res => res.json())
        .then(data => setdData(data))

    },[data])

    useEffect(()=>{
        if(data){
            console.log(data)
           const Filtered =  dData.filter(filtering =>filtering.category.toLowerCase() == data.toLowerCase()
             )
           console.log(Filtered)
           setview(Filtered)
        }
        else{
            setview(dData)
        }

    },[dData])
   

    return (
        <div className="">

            <div className=" md:grid lg:grid-cols-4 md:grid-cols-2 gap-0 w-10/12 md:mt-24 m-auto">
            
            {
                viewdata.map(data => <ShowCards key={data.id} data ={data} ></ShowCards>)
            }
            </div>
        </div>
    );
};

export default Cards;