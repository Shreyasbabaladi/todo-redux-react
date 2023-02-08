import React from 'react'

const Buttons = ({allTasksHander, activeTasksHander, completedHander }) => {
  return (
    <div className='flex flex-col sm:flex-row  justify-center items-center '>
        <button data-type='allTasks' className='py-1 px-2 mx-2 my-2 rounded-xl bg-pink text-Black-dark font-bold' onClick={allTasksHander}>Show all tasks</button>
        <button data-type='activeTasks' className='py-1 px-2 mx-2 my-2 rounded-xl bg-pink text-Black-dark font-bold' onClick={activeTasksHander}>Show active tasks</button> 
        <button data-type='completedTasks' className='py-1 px-2 mx-2 my-2 rounded-xl bg-pink text-Black-dark font-bold' onClick={completedHander}>Show completed tasks</button>
    </div>
  )
}

export default Buttons