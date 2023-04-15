import React from 'react'
import { useSelector } from 'react-redux'
import { TTodo } from '../model/TodoProps'
import TodoItem from './TodoItem'

type Foo = {
    (): JSX.Element;
}

const TodoList: Foo = () => {  
    const todos = useSelector<any, TTodo[]>(state => state.todos.todos);
  return (
    <ul>
        {todos.map(todo => (
            <TodoItem 
                key={todo.id}
                {...todo}/>)
          )
        }
    </ul>
  )
}

export default TodoList