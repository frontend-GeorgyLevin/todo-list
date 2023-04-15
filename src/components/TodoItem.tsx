import React from 'react'
import { useDispatch } from 'react-redux'
import { todoActions } from './redux/todoSlice'
import { TTodo } from '../model/TodoProps'

const toggleTodoComplete = todoActions.toggleTodoComplete;
const removeTodo = todoActions.removeTodo;

type Foo = {
    (p: TTodo): JSX.Element;
}

const TodoItem: Foo = ({id, txt, complited}) => {
    const dispatch = useDispatch();
  return (
    <li>
        <input 
            type={'checkbox'} checked={complited} 
            onChange={() => dispatch(toggleTodoComplete({id}))}/>
        <span>{txt}</span>
        <span className='delete' onClick={() => dispatch(removeTodo({id}))}>&times;</span>
        
    </li>
  )
}

export default TodoItem