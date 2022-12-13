import React,{ useState, useRef, useEffect } from "react";
import TodoList from "./component/TodoList"
const LOCAL_STORAGE_KEY = 'imthelocalkey'

function App() {
  const [todo, setTodo] = useState([])
  const listName = useRef()

  useEffect(() => {
    const local_todo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(local_todo) setTodo(local_todo)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todo))
  }, [todo])

  function addList(e) {
    let name = listName.current.value
    if(name === '') return
    setTodo(pre_todo => {
      return [...todo, {name: name, action: false}]
    })
    listName.current.value = null
  }

  function todoToggle(name){
    let newTodo = [...todo]
    let todo1 = newTodo.find(todo => todo.name === name)
    todo1.action = !todo1.action
    setTodo(newTodo)
  }

  function handleDelete(){
    setTodo(todo.filter(todoos => !todoos.action))
  }

  return (
    <div>
      <h1>This is todo-list</h1>
      <TodoList todo={todo} todoToggle={todoToggle}/>
      <input ref={listName} type="text"/>
      <button onClick={addList}>Add New</button>
      <button onClick={handleDelete}>Delete </button>
      <div>{todo.filter(todoss => !todoss.action).length} left to do</div>
    </div>
  );
}

export default App;
