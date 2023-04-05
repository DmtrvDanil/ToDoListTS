import {useEffect, useRef, useState} from "react";
import {ITodo} from '../types/data';
import {TodoList} from "./TodoList";
import InputTodoText from "./InputTodoText";
import {useAppDispatch} from "../hook";
import {addTodo} from '../store/todoSlice';

const App: React.FC = () => {
    const dispatch = useAppDispatch();
    const [value, changeText] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);


    const addTask = () => {
        dispatch(addTodo(value));
    }
    const handleChangeText = (str: string) => {
        changeText(str);
    }

    const handleKeyDown = (str: string) => {
        dispatch(addTodo(str));
    }

    const deleteTodo = (id: number): void => {
        setTodos(todos.filter((todo) => {
            return todo.id !== id;
        }))
    }
    const toggleTodo = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) return todo;
            return {
                ...todo,
                complete: !todo.complete
            }
        }))
    }

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [])

    return (
        <div>
            <InputTodoText value={value} handleChangeText={handleChangeText} addTask={addTask}/>
            <TodoList/>
        </div>
    )
}

export {App};