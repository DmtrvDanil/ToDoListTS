import {ITodo} from '../types/data';
import {TodoItem} from "./TodoItem";

interface ITodoListProps {
    items: ITodo[];
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = (props) => {
    const {items, toggleTodo, deleteTodo} = props;
    return (
        <div>
            {
                props.items.map((item) => {
                  return <TodoItem key={item.id}
                                   toggleTodo={toggleTodo}
                                   deleteTodo={deleteTodo}
                                   {...item}/>
                })
            }
        </div>
    )
};

export {TodoList};