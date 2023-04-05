import {useAppDispatch} from "../hook";
import {toggleComplete, removeTodo} from '../store/todoSlice';


interface TodoItemProps {
    id: string;
    title: string;
    completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
    const {id, title, completed} = props;
    const dispatch = useAppDispatch();
    return (
        <div>
            <input type="checkbox" checked={completed} onChange={() => dispatch(toggleComplete(id))}/>
            {title}
            <button onClick={() => dispatch(removeTodo(id))}>&times;</button>
        </div>
    )
};

export {TodoItem};