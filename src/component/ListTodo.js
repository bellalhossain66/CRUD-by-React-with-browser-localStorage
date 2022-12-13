import React from 'react'

export default function ListTodo({option, todoToggle}) {
    function handleTodo(){
        todoToggle(option.name)
    }
  return (
    <div>
        <label>
            <input onChange={handleTodo} type="checkbox" checked={option.action}/>
            {option.name}
        </label>
    </div>
  )
}
