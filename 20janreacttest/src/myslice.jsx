import { createSlice } from "@reduxjs/toolkit";
const myslice=createSlice({
    name:"mytest",
    initialState:{
   color:"red",
   count:0


    },
    reducers:{
        addcolor:(state,actions)=>{
            console.log(actions.payload)
            state.color=actions.payload
        },

        increment:(state)=>{
            state.count=state.count+1
        },
        decrement:(state)=>{
            state.count=state.count-1;
        }

    }
})
export const{addcolor, increment,decrement}=myslice.actions
export default myslice.reducer