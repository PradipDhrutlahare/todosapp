

import { ADD_TODO, REMOVE_TODO } from "./action.types";


//Brain of reducer
const Reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
        return [...state, action.payload ]; //id
    case REMOVE_TODO:
        return state.filter(todo => todo.id  !== action.payload)   
       
  
    default:
      return state;
  }
}

export default Reducer;
