import React from 'react'
import { TTodo } from '../model/TodoProps'
import { ToggleRemoveType } from '../model/ToggleRemoveType'
import TodoItem from './TodoItem'
type Props = {
    todos: TTodo[];
    toggleTodoComplete: ToggleRemoveType;
    removeToDo: ToggleRemoveType;
}

type Foo = {
    (p: Props): JSX.Element;
}

const TodoList: Foo = ({todos, toggleTodoComplete,removeToDo}) => {  

  return (
    <ul>
        {todos.map(todo => (
            <TodoItem 
                key={todo.id} 
                toggleTodoComplete={toggleTodoComplete}
                removeToDo={removeToDo}
                todo={todo}/>)
          )
        }
    </ul>
  )
}

export default TodoList
