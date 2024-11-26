import { NavLink } from "react-router-dom";
import ViewDetails from "../ViewDetails/ViewDetails";

const ShowCards = ({data}) => {

        const {id,picture,title,category,category_bg,
            card_bg,text_button_bg,description,price}  = data
 
         
     const ShowDonate = ({data}) =>{

      

     }
     

    return (
        <div className="hover:cursor-pointer "  >
          <NavLink to={`/details/${id}` } onClick={()=><ViewDetails  ></ViewDetails>}>
            <div style={{backgroundColor:` ${card_bg} `}} className={`mb-7 card md:w-60 lg:w-[370px]  m-auto ` }  >
  <figure><img className="w-full " src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <div className="mb-2 items-center">
    <h2 className='inline items-center  font-bold textarea-md md:text-lg px-4 py-2 rounded-lg'  style={{backgroundColor: `${category_bg}`,color: `${text_button_bg}`}}  >
      {category}
    </h2>
    </div>
    <h1 style={{color: `${text_button_bg}`}} className=" md:text-2xl font-bold ">{title}</h1>
    
  </div>
</div>

</NavLink>

</div>

       
    );
};

export default ShowCards;