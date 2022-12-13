import React from 'react'
import ListTodo from './ListTodo'
export default function TodoList({todo, todoToggle}) {
  return (
    <div>
      <h4>Total todo list= {todo.length}</h4>
      {todo.map((option, i) => {
        return (
            <ListTodo key={i} option={option} todoToggle={todoToggle}/>
        )
      })}
    </div>
  )
}
