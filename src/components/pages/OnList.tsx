import {useState} from 'react';
import { useDispatch } from 'react-redux';
import TodoList from '../TodoList';
import InputField from '../InputField';
import { todoActions } from '../redux/todoSlice';

export const OnList: React.FC = () =>  {

    const [txt, setTxt] = useState('');
    const dispatch = useDispatch();
    const addTodo = () => {
      dispatch(todoActions.addTodo({txt}));
      setTxt('');
    }
    

    return <div className='App'>
    <InputField 
        txt={txt}
        setTxt={setTxt}
        addTodo={addTodo}
        />
    <TodoList />
  </div> 
}