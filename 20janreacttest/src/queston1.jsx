import { useSelector,useDispatch } from "react-redux"

import { increment,decrement } from "./myslice"

const Question1=()=>{
    const dispatch=useDispatch()
    const mycount=useSelector((state)=>state.mytest.count)
    console.log(mycount);
    return(
        <>
        <h1>this is question 1</h1>
        <button onClick={()=>{dispatch(increment())}}>Increment</button>
        {mycount}
        <button onClick={()=>{dispatch(decrement())}}>decrement</button>

        </>
    )
}
export default Question1