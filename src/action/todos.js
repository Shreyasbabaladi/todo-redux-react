import {ADD_TODO,REMOVE_TODO,UPDATE_TODO,ADD_TODO_LIST} from './actions-types';

export const addTodo = (todoItem) => ({
    type: ADD_TODO,
    payload: todoItem
})
export const addTodoList = (todos) => ({
    type: ADD_TODO_LIST,
    payload: todos
})

export const removeTodo = (id) => ({
    type:REMOVE_TODO,
    payload:id
})

export const updateTodo = (todoItem) => ({
    type:UPDATE_TODO,
    payload:todoItem
})