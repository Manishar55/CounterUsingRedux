
import {createSlice} from "@reduxjs/toolkit"

//we need to send an object in this function, and 3 values in that object
const initialState={
    value:0,
}
export const CounterSlice = createSlice({
    name:"counter",
    initialState,
    
    reducers:{ //we will define functionalities here
        increment:(state)=>{
            state.value+=1;
        },
        decrement:(state)=>{
            state.value-=1;
        }
    }

});

//if we need to take out the implementations of functions from the slice, then we can take that from action creator
export const {increment, decrement} = CounterSlice.actions;
//taking out the reducer/functionality
export default CounterSlice.reducer;