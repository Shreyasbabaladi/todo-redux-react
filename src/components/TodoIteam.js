import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "../action/todos";

const TodoIteam = ({ removeTodo, updateTodo, todoIteam }) => {
  const [editing, setEditing] = useState(false);

  //handlers
  const handleMarked = (todoIteam) => {
    updateTodo((todoIteam["isComplete"] = !todoIteam.isComplete));
  };

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (e) => {
    if (e.key === "Enter") {
      setEditing(false);
    }
  };

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
        <li className='w-full bg-[#21212b] p-3  rounded-2xl my-6 relative'>
          <div style={viewMode} className='flex  items-center'>
            <input
              type="checkbox"
              className="w-6 h-6 mx-2 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              checked={todoIteam.isComplete}
              onChange={() => handleMarked(todoIteam)}
            />
            <span className="bg-Black-light px-3">{todoIteam.todoTitle}</span>
          </div>

          <input 
          type='text' 
          style={editMode}
          value={todoIteam.todoTitle}
          className='bg-pink p-3  rounded-2xl '
          onChange={ e => updateTodo({...todoIteam, todoTitle: e.target.value})}
          onKeyDown={handleUpdatedDone}
          />
          <button onClick={() => removeTodo(todoIteam.id)}
            className=' absolute right-[3%] -top-1/4 px-2 lg:px-3 py-1 rounded-xl bg-pink text-Black-dark font-bold'
          > Remove</button>
          <button onClick={handleEditing}
          className=' absolute right-[27%] sm:right-[20%] md:right-[16%] lg:right-[15%] -top-1/4 px-2 lg:px-3 py-1 rounded-xl bg-pink text-Black-dark font-bold'
          > Update</button>
        </li>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatachToProps = (dispatach) => ({
  addTodo: (todoIteam) => {
    dispatach(addTodo(todoIteam));
  },
  removeTodo: (id) => {
    dispatach(removeTodo(id));
  },
  updateTodo: (todoIteam) => {
    dispatach(updateTodo(todoIteam));
  },
});

export default connect(mapStateToProps, mapDispatachToProps)(TodoIteam);
