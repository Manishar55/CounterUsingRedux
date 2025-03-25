
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices/CounterSlice';

function Counter() {

    // useSelector is used for fetching data from a slice
    const count=useSelector((state)=>state.counter.value);
    const dispatch=useDispatch();  //increment decrement ki value action creator me fetch kar liye the uss values ko call karne k liye useDispatch()  hook use hoga

  return (
    <div>
        <button onClick={()=>dispatch(increment())}>
            Increment
        </button>

        <br></br><br></br>

        <div>
            {count}
        </div>
        <br></br>

        <button onClick={()=>dispatch(decrement())}>
            Decrement
        </button>
    </div>
  )
}

export default Counter