import { createSlice } from "@reduxjs/toolkit";
const myslice=createSlice({
    name:"mytest",
    initialState:{
   color:"red",
   square: 0,
    cube: 0,
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
        },
        square1: (state, action) => {
            state.square = action.payload * action.payload;
          },
          cube1: (state, action) => {
            state.cube = action.payload * action.payload * action.payload;
          }


    }
})
export const{addcolor, increment,decrement,square1,cube1}=myslice.actions
export default myslice.reducer