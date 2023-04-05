import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type Todo = {
    id: string;
    title: string;
    completed: boolean;
}

type TodoState = {
    list: Todo[];
}

const initialState: TodoState = {
    list: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            state.list.push({
                id: new Date().toISOString(),
                title: action.payload,
                completed: false
            })
        },
        toggleComplete(state, action: PayloadAction<string>) {
            const toggleTodo = state.list.find(item => item.id === action.payload);
            if (toggleTodo) {
                toggleTodo.completed = !toggleTodo.completed;
            }
        },
        removeTodo(state, action: PayloadAction<string>) {
            state.list = state.list.filter(item => item.id !== action.payload);
        }
    }
})

export const {addTodo, toggleComplete, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;