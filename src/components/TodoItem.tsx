import React from 'react'
import { TTodo } from '../model/TodoProps'
import { ToggleRemoveType } from '../model/ToggleRemoveType'

type Props = {
    todo: TTodo;
    toggleTodoComplete: ToggleRemoveType;
    removeToDo: ToggleRemoveType;
}

type Foo = {
    (p: Props): JSX.Element;
}

const TodoItem: Foo = ({todo, toggleTodoComplete,removeToDo}) => {
  return (
    <li>
        <input 
            type={'checkbox'} checked={todo.complited} 
            onChange={() => toggleTodoComplete(todo.id)}/>
        <span>{todo.txt}</span>
        <span className='delete' onClick={() => removeToDo(todo.id)}>&times;</span>
        
    </li>
  )
}

export default TodoItem