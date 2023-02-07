import {ADD_TODO,REMOVE_TODO,UPDATE_TODO} from './actions-types';

export const addTodo = (todoItem) => ({
    type: ADD_TODO,
    payload: todoItem
})

export const removeTodo = (id) => ({
    type:REMOVE_TODO,
    payload:id
})

export const updateTodo = (todoItem) => ({
    type:UPDATE_TODO,
    payload:todoItem
})