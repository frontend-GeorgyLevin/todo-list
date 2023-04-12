import React from 'react'
import { TTodo } from '../model/TodoProps'
import { ToggleRemoveType } from '../model/ToggleRemoveType'

type Props = {
    todo: TTodo;
    toggleTodoComplete: ToggleRemoveType;
    removeToDo: ToggleRemoveType;
}

function TodoItem(i: Props): JSX.Element {
  return (
    <li>
        <input 
            type={'checkbox'} checked={i.todo.complited} 
            onChange={() => i.toggleTodoComplete(i.todo.id)}/>
        <span>{i.todo.txt}</span>
        <span className='delete' onClick={() => i.removeToDo(i.todo.id)}>&times;</span>
        
    </li>
  )
}

export default TodoItem