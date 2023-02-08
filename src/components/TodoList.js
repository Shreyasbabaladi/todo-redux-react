import React from 'react'
import TodoIteam from './TodoIteam'


const TodoList = ({todoOrder}) => {
  return (
    <ul>
        {
            todoOrder.map((todoIteam)=> <TodoIteam key={todoIteam.id} todoIteam={todoIteam}/>)
        }
    </ul>
  )
}

export default TodoList;