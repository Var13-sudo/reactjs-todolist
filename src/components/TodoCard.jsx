import React from 'react'

const TodoCard = (props) => {
  const {children, handleTodoDelete , index, handleTodoEdit} = props;
  
  
  return (
    <li  className='todoItem'>
      {children}
      <div className='actionContainer'> 
        <button onClick={() => {
          handleTodoEdit(index)
        }}>
      <i className="fa-regular fa-pen-to-square"></i>
      </button>
      <button onClick={() => {
        handleTodoDelete(index)
      }}>
      <i className="fa-solid fa-trash"></i>
      </button>
</div>
    </li>
     
  )
}

export default TodoCard