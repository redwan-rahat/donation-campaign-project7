import { useEffect, useState } from "react";
import ShowDonation from "./ShowDonation";


const Donation = () => {
        const [showall,setshowall] = useState(false)

    const DonateData = JSON.parse(localStorage.getItem("donation"))

    return (
        <div>
        <div className="grid lg:grid-cols-2 w-10/12 m-auto gap-8 py-20">
          
        {
           !showall ? DonateData && DonateData.slice(0,4).map(donate => <ShowDonation donate = {donate} ></ShowDonation>) : DonateData && DonateData.map(donate => <ShowDonation donate = {donate} ></ShowDonation>)
        }
        </div>
        {
            DonateData &&  DonateData.length>4 && !showall && <div className="text-center">
            <button onClick={()=> setshowall(true)} className="bg-green-600 text-white font-bold text-xl px-5 py-3 rounded-lg ">Show All </button>
        </div>
        }
        

        </div>
    );
};

export default Donation;