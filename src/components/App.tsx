import {useEffect, useRef, useState} from "react";
import {ITodo} from '../types/data';
import {TodoList} from "./TodoList";

const App: React.FC = () => {
    const [value, changeText] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);


    const addTodo = () => {
        if (value) {
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                complete: false
            }]);
            changeText('');
        };
    };

    const handleChangeText: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        changeText(e.target.value);
    }

    const handleKeyDown:  React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') addTodo();
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
            <div>
                <input value={value} onChange={handleChangeText} ref={inputRef} onKeyDown={handleKeyDown}/>
                <button onClick={addTodo}>Add Task</button>
            </div>
            <TodoList items={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
        </div>
    )
}

export {App};