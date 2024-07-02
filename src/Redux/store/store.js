import { createStore } from "redux";
import { CounterReducer } from "../Reducer/counter.reducer";

let store=createStore(CounterReducer)


export default store;