import { useSelector,useDispatch } from "react-redux"
import { addcolor } from "./myslice"
import { useState } from "react"
const Question4=()=>{
    const dispatch = useDispatch()
    const[val,setval]=useState("")
    const mycolor=useSelector((state)=>state.mytest.color)
    console.log(mycolor)
    return(
        <>
        <h1>this is question 4</h1>
        Enter color: <input type="text" value={val} onChange={(e)=>{setval(e.target.value)}}/>
        <button onClick={()=>{dispatch(addcolor(val))}}>change color</button>
        <div style={{height:"300px",width:"300px",backgroundColor:`${mycolor}`}}></div>
    


        </>
    )
}
export default Question4