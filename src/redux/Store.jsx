

import { configureStore } from "@reduxjs/toolkit";
import  CounterSlice  from "./slices/CounterSlice";

//creating global store using configureStore function 
export const Store=configureStore({
    reducer: {
        counter: CounterSlice  //we defined a slice in teh reducer counter->slice, counterSlice->reducer
    },
})