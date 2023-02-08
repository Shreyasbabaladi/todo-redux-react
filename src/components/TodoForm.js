import React,{useState} from 'react';
import { connect } from 'react-redux'

import {v4} from 'uuid';
import { addTodo, updateTodo } from '../action/todos';


const TodoForm = ({addTodo,updateTodo}) => {

    const todoModule = {
        id:"",
        todoTitle:"",
        isComplete:false
    }


    const [ todo,setTodo ] = useState(todoModule);
    

    const handleTitle = (e) => setTodo({...todo, todoTitle:e.target.value});
    const handleSubmit = (e) => {
        e.preventDefault();
        setTodo(todo['id'] = v4());
        addTodo(todo);
        setTodo(todoModule);
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className="relative">
            <input type='test' 
            value={todo.todoTitle} 
            placeholder="Add Todo" 
            onChange={handleTitle} 
            className='w-full bg-Black-light p-3  rounded-2xl'/> 

            <button 
            onSubmit={handleSubmit} 
            className=' absolute right-0  w-1/4 py-3 px-4 rounded-[0_1rem_1rem_0] bg-[#fc76a1] text-[#181820] font-bold'>
                ADD
                </button>
        </form>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatachToProps = (dispatach) => ({
    addTodo:(todoIteam)=>{
        dispatach(addTodo(todoIteam));
    },
    updateTodo: (todoIteam) =>{
        dispatach(updateTodo(todoIteam))
    }
})

export default connect(mapStateToProps,mapDispatachToProps)(TodoForm);;