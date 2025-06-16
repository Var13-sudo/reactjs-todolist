import Todoinput from "./components/Todoinput"
import TodoList from "./components/TodoList"
import { useState, useEffect } from "react";
function App() {
 

  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState("")
  
function persistData(newList){
localStorage.setItem('todos', JSON.stringify({todos : newList}))
}



  function handleTodoUpdate(newTodo){
    const newTodoList = [...todos,newTodo];
    persistData(newTodoList)
    setTodos(newTodoList);
  }
  const handleTodoDelete = (index) =>{
     const newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index)
     persistData(newTodoList)
     setTodos(newTodoList);
  }
  const handleTodoEdit = (index) =>{
     const newTodo = todos[index]
    setTodoValue(newTodo)
    handleTodoDelete(index);   
  }
  

  useEffect(() => {
    if(!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos')
    if(!localTodos) {
      return 
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos);

  },[]) 
  return (
   <main>
    <Todoinput handleTodoUpdate={handleTodoUpdate} todoValue = {todoValue} setTodoValue = {setTodoValue} />
    <TodoList todos={todos} handleTodoDelete={handleTodoDelete} handleTodoEdit={handleTodoEdit}/>

   </main>
  );
}

export default App
