

let arr = []

const SavedDonate = (save)=>{

    const parsesave = JSON.parse(localStorage.getItem("donation"))


    if(parsesave)
    {
      
    parsesave.push(save)
     
       localStorage.setItem("donation",JSON.stringify(parsesave))

    }
    else{
      arr = [];
      arr.push(save)

      localStorage.setItem("donation",JSON.stringify(arr))
    }
    
    

}


export {SavedDonate}
 