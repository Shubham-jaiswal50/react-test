import axios from "axios";
import { useEffect, useState } from "react";
const Question5=()=>{

    const [mydata,setmydata]=useState([]);
    const loadData=()=>{
         let api="http://localhost:3000/attendence";
        axios.get(api).then((res)=>{
            setmydata(res.data);
            console.log(res);

        });
    }
    useEffect(()=>{
        loadData();
    },[])
    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.empid}</td>
                <td>{key.name}</td>
                <td>{key.designation}</td>
                <td>{key.department}</td>
                <td>{key.salary}</td>
            </tr>
</>
        )
    
    })
return(
    <>
    <table>
        <tr>
            <th> emp id</th>
            <th> emp name</th>
            <th> emp designation</th>
            <th> emp department</th>
            <th> emp salary</th>
            

        </tr>
        {ans}
    </table>
    </>
)

    }
       
export default Question5