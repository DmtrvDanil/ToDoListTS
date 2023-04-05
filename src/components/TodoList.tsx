import {TodoItem} from "./TodoItem";
import {useAppSelector} from "../hook";


const TodoList: React.FC = (props) => {
    const todos = useAppSelector(state => state.todos.list);

    return (
        <ul>
            {
                todos.map((item) => {
                  return <TodoItem key={item.id}
                                   {...item}/>
                })
            }
        </ul>
    )
};

export {TodoList};