import {useEffect, useRef, useState} from "react";
import {ITodo} from '../types/data';
import {TodoList} from "./TodoList";
import InputTodoText from "./InputTodoText";
import {useAppDispatch} from "../hook";
import {addTodo} from '../store/todoSlice';
import '../styles.css';

const App: React.FC = () => {
    const dispatch = useAppDispatch();
    const [value, changeText] = useState('');

    const addTask = () => {
        if (value) {
            dispatch(addTodo(value));
            changeText('');
        }
    }
    const handleChangeText = (str: string) => {
        changeText(str);
    }

    const handleKeyDown = () => {
        dispatch(addTodo(value));
        changeText('');
    }

    return (
        <div className="App">
            <InputTodoText value={value} handleChangeText={handleChangeText} addTask={addTask} handleKeyDown={handleKeyDown}/>
            <TodoList/>
        </div>
    )
}

export {App};