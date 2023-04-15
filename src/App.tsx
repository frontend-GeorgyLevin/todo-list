import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { RouteType } from './model/RouteType';
import { todoActions } from './components/redux/todoSlice';
import './App.css';
import TodoList from './components/TodoList';
import InputField from './components/InputField';
import { OnList } from './components/pages/OnList';
import { Page } from './components/pages/Page';
import { Pages } from './components/pages/Pages';
import { Navigator } from './components/navigators/Navigator';

function App() {

  // const [txt, setTxt] = useState('');
  // const dispatch = useDispatch();
  // const addTodo = () => {
  //   dispatch(todoActions.addTodo({txt}));
  //   setTxt('');
  // };


  return <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigator/>} />

          
          <Route index element={<OnList/>} />
          {/* <Route element={<Pages/>} /> */}
        </Routes>
      </BrowserRouter>
    
}

export default App;
