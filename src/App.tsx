import {useState} from 'react';
import './App.css';

function App() {
  type TTodo = {id: string, txt: string, complited: boolean};
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

  const removeToDo = (IdTodo: string) => {
    setTodos(todos.filter(todo => todo.id !== IdTodo));

  }

  const toggleTodoComplete = (IdTodo: string) => {
   
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

    


  return (
    <div className="App">
      <label>
        <input value={txt} onChange={e => setTxt(e.target.value)}/>
        <button onClick={addToDo}>Add ToDo</button>
      </label>
      <ul>
        { todos.length > 0 &&
          todos.map(todo => <li key={todo.id}>
            <input 
                type={'checkbox'} checked={todo.complited} 
                onChange={() => toggleTodoComplete(todo.id)}/>
            <span>{todo.txt}</span>
            <span className='delete' onClick={() => removeToDo(todo.id)}>&times;</span>

          </li>)
        }
      </ul>
      
    </div>
  );
}

export default App;
