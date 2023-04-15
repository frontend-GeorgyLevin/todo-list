import {useSelector} from 'react-redux';
import { TTodo } from '../../model/TodoProps';
import { Page } from './Page';
export const Pages: React.FC = () => {
    const todos = useSelector<any,TTodo[]>(state => state.todos.todos);


    return <div>

    </div>

}