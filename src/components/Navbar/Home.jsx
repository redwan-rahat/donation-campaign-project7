import { useState } from "react";
import Cards from "../Home/Cards";

import Nav from "../Home/Nav";

const Home = () => {
    
    const [shared,setshared]  = useState(null)

    const  DataShare = (newData) =>{
        setshared(newData);
    }   

    return (
        <div>
            <Nav SharingData = {DataShare}></Nav>
            <Cards data ={shared}></Cards>
          
        </div>
    );
};

export default Home;