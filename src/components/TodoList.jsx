import React from 'react'
import TodoCard from './TodoCard';

const TodoList = (props) => {
  const { todos } = props;
 
  return (
   <ul>
    {todos.map((todo, todoIndex) => {
      return (
       <TodoCard {...props} key={todoIndex} index = {todoIndex}>
        <p>{todo}</p>
       </TodoCard>
      );
    })}
   </ul>
  )
}

export default TodoList