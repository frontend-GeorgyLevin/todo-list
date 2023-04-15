import { NavLink, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { TTodo } from "../../model/TodoProps"
export const Navigator: React.FC = () => {
    const todos = useSelector<any, TTodo[]>(state => state.todos.todos);

    return <div>
        <nav>
            <ul>
                {getNavItem(todos)}
            </ul>

        </nav>
        <Outlet></Outlet>    
    </div>

    
}

function getNavItem(todos: TTodo[]): React.ReactNode {
    return todos.map((todo, index) => <li key={index}>
        <NavLink to={todo.txt}>{todo.txt}</NavLink>
    </li>)

}