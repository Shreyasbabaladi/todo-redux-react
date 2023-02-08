/* eslint-disable import/no-anonymous-default-export */

import { ADD_TODO, REMOVE_TODO,UPDATE_TODO,ADD_TODO_LIST } from "../action/actions-types";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((todoIteam) => todoIteam.id !== action.payload);
    case UPDATE_TODO:
      return state.map((todoIteam) => todoIteam.id === action.payload.id? action.payload : todoIteam);
      case ADD_TODO_LIST:
        return action.payload
    default:
      return state;
  }
};
