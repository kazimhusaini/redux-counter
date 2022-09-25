//Redux Toolkit
import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter ++;
    },
    decrement(state, action) {
      state.counter --;
    },
    addby(state, action) {
      state.counter += action.payload;
    },
  },
});
export const actions =counterSlice.actions;
const store=configureStore({
        reducer:counterSlice.reducer
})
export default store;

//Redux
// import { createStore } from "redux";

// const reducerFunction = (state = { counter: 10 }, action) => {
//     //synchnorus funtion
//     //we should not change  the orignal state
//     if(action.type==="INC"){
//         return{counter:state.counter+1}
//     }
//     if(action.type==="DEC"){
//         return{counter:state.counter-1}
//     }

//     if(action.type==="ADDBYVALUE"){
//         return{counter:state.counter+action.payload}
//     }

//     return state};

// const store = createStore(reducerFunction);
// export default store;
