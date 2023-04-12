import {useState} from 'react';
import './App.css';
import { TTodo } from './model/TodoProps';
import { ToggleRemoveType } from './model/ToggleRemoveType';
import TodoList from './components/TodoList';
import InputField from './components/InputField';

function App(): JSX.Element {
  const [todos, setTodos] = useState<TTodo[]>([]);
  const [txt, setTxt] = useState('');

  const addToDo = () => {
    if(txt.trim().length) {
    setTodos([ ...todos,
      {
      id: new Date().toISOString(),
      txt,
      complited: false,
      }
    ])
    setTxt('');
    }
  };

  const removeToDo: ToggleRemoveType = (IdTodo)  => {
    setTodos(todos.filter(todo => todo.id !== IdTodo));
  }
 
    const toggleTodoComplete: ToggleRemoveType = (IdTodo) => {
    setTodos(todos.map(todo => {
      if(todo.id !== IdTodo) return todo;
      return {
        ...todo,
        complited: !todo.complited
          }
        }    
      )
    )
  }

  return <div className='App'>
      <InputField 
          txt={txt}
          setTxt={setTxt}
          addToDo={addToDo}
          />
      <TodoList      
          todos = {todos}
          toggleTodoComplete={toggleTodoComplete}
          removeToDo={removeToDo}
      />
    </div> 
}

export default App;
