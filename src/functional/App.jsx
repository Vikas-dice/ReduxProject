
import React from 'react'
import { useSelector } from 'react-redux'

export default function App() {
//    let globalstate= useSelector((state)=>state);
//    console.log(globalstate);

let counter =useSelector((state)=>state.counter)
console.log(counter);

  return (
    <div>App


        <p>Counter : {counter}</p>
        <button>increment</button>
        <button>decrement</button>
    </div>
  )
}
