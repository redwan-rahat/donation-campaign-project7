import { NavLink } from "react-router-dom";
import ViewDetails from "../ViewDetails/ViewDetails";
const ShowDonation = ({donate}) => {
    const {id,picture,title,category,category_bg,
        card_bg,text_button_bg,price} = donate
    console.log(donate)
    return (
        <div>


<div className=""  >
          
            <div style={{backgroundColor:` ${card_bg} `}} className="md:flex  card md:h-64  m-auto md:flex-row"    >
                <div>
  <figure><img className="md:w-72 md:h-64 " src={picture} alt="donate" /></figure></div>
  <div className="card-body">
    <div className="mb-2 items-center">
    <h2 className='inline items-center  font-bold text-sm md:text-lg md:px-4 px-2 py-1 md:py-2 rounded-lg'  style={{backgroundColor: `${category_bg}`,color: `${text_button_bg}`}}  >
      {category}
    </h2>
    </div>
    <h1 style={{color: `${text_button_bg}`}} className=" md:text-2xl font-bold ">{title}</h1>
    <h1 style={{color: `${text_button_bg}`}} className="font-bold md:text-xl mb-2">${price}</h1>
    <NavLink to={`/details/${id}` } onClick={()=><ViewDetails ></ViewDetails>}> 
    <button className=" md:text-2xl font-semibold px-5 py-3 rounded-md text-white" style={{backgroundColor: `${text_button_bg}`}}>
       View Details</button> </NavLink>
  </div>

</div>



</div>

        </div>
    );
};

export default ShowDonation;