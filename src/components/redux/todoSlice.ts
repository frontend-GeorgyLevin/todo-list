import { createSlice } from "@reduxjs/toolkit";
import { TTodo } from "../../model/TodoProps";
const initialState: {todos: TTodo[]} = {
    todos: []
}
const todoSlice = createSlice({
    initialState,
    name: "todos",
    reducers: {
        addTodo: (state, data) => {
            state.todos.push({
                id: new Date().toISOString(),
                txt: data.payload.txt,
                complited: false,
            });
        },
        removeTodo: (state, data) => {
            state.todos = state.todos.filter(todo => todo.id !== data.payload.id)
        },
        toggleTodoComplete: (state, data) => {
            const toggledTodo = state.todos.find(todo => todo.id === data.payload.id);
            toggledTodo!.complited = !toggledTodo!.complited; 
        }
    }
})
export const todoReducer = todoSlice.reducer;
export const todoActions = todoSlice.actions;
