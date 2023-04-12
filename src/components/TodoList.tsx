import React from 'react'
import { TTodo } from '../model/TodoProps'
import { ToggleRemoveType } from '../model/ToggleRemoveType'
import TodoItem from './TodoItem'
type Props = {
    todos: TTodo[];
    toggleTodoComplete: ToggleRemoveType;
    removeToDo: ToggleRemoveType;
}

function TodoList(i: Props): JSX.Element { 
  return (
    <ul>
        {i.todos.map(todo => (
            <TodoItem 
                key={todo.id} 
                toggleTodoComplete={i.toggleTodoComplete}
                removeToDo={i.removeToDo}
                todo={todo}/>)
          )
        }
    </ul>
  )
}

export default TodoList
