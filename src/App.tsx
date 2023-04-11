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


  return (
    <div className="App">
      <label>
        <input value={txt} onChange={e => setTxt(e.target.value)}/>
        <button onClick={addToDo}>Add ToDo</button>
      </label>
      <ul>
        { todos.length > 0 &&
          todos.map(todo => <li key={todo.id}>
            <span>{todo.txt}</span>
            <span style={{color: 'red'}}>&times;</span>

          </li>)
        }
      </ul>
      
    </div>
  );
}

export default App;
