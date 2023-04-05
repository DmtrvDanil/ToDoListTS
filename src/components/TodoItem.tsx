import {ITodo} from '../types/data';

interface TodoItem extends ITodo {
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}
const TodoItem: React.FC<TodoItem> = (props) => {
    const {id, title, complete} = props;
    return (
        <div>
            <input type="checkbox" checked={complete} onChange={() => props.toggleTodo(id)}/>
            {title}
            <button onClick={() => props.deleteTodo(id)}>X</button>
        </div>
    )
};

export {TodoItem};