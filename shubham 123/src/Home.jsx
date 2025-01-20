import axios from "axios"
import { useState,useEffect } from "react"

const Home=()=>{

    const[mydata,setmydata]=useState([])

    const loaddata=()=>{
        let api='http://localhost:5000/cars'
      axios.get(api).then((res)=>{
        setmydata(res.data)

    })
    }
    useEffect(()=>{
        loaddata();
    },[])

    let ans=mydata.map((key)=>{
        return(
            <>
                <div class="box1">
               
                <div>{key.name}</div>
                <div>{key.designation}</div>
                <div>{key.department}</div>
              

                
                <div>{key.salary}</div>
                </div>

            
            
            
            </>
        )
    })
    
    return(
        

  

        <>
       


        <div class="product">

            {ans}


        </div>
        
        </>
    )
}
export default Home