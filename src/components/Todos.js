import React, { useEffect, useState } from 'react'

//redux
import { connect } from 'react-redux'
import { addTodo, removeTodo, updateTodo } from '../action/todos';

//components
import Buttons from './Buttons';
import Counter from './Counter';
import Header from './Header';
import TodoForm from './TodoForm'
import TodoList from './TodoList'


function Todos({todos}) {
  const [ todoOrder, setTodoOrder ] = useState(todos);


  useEffect(()=>{

    setTodoOrder(todos);

  },[todos])

//   handlers
  const allTasksHander = () =>{ setTodoOrder(todos) };
  const activeTasksHander = () =>{ setTodoOrder(todos.filter((todoIteam) => !todoIteam.isComplete)) };
  const completedHander = () =>{ setTodoOrder(todos.filter((todoIteam) => todoIteam.isComplete)) };

  return (
    <div className='bg-[#181820] text-gray-50' >
      <div className='container w-11/12 max-w-4xl mx-auto'>
        <Header />
        <TodoForm />
        <Counter />
        <Buttons 
            allTasksHander={allTasksHander} 
            activeTasksHander={activeTasksHander} 
            completedHander={completedHander} />
        <TodoList todoOrder={todoOrder}/>
      </div>  
    </div>
  )
}

const mapStateToProps = (state) => ({
    todos:state.todos,
})


export default connect(mapStateToProps)(Todos);