import React from 'react'
import TodoIteam from './TodoIteam'


const TodoList = ({todoOrder}) => {
  return (
    <ul>
        {
            todoOrder.map((todoIteam)=> <TodoIteam todoIteam={todoIteam}/>)
        }
    </ul>
  )
}

export default TodoList;