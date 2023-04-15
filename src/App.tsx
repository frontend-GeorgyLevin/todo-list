import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { todoActions } from './components/redux/todoSlice';
import './App.css';
import TodoList from './components/TodoList';
import InputField from './components/InputField';

function App(): JSX.Element {
  const [txt, setTxt] = useState('');
  const dispatch = useDispatch();
  const addTodo = () => {
    dispatch(todoActions.addTodo({txt}));
    setTxt('');
  };


  return <div className='App'>
      <InputField 
          txt={txt}
          setTxt={setTxt}
          addTodo={addTodo}
          />
      <TodoList />
    </div> 
}

export default App;
