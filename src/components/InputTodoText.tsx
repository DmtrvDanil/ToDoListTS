import {addTodo} from "../store/todoSlice";
import {useAppDispatch} from "../hook";


interface AddTodoItemProps {
    value: string;
    handleChangeText: (str: string) => void;
    addTask: () => void;
}

const InputTodoText: React.FC<AddTodoItemProps> = (props) => {
    const {value, handleChangeText, addTask} = props;
    return (
        <label>
            <input value={value} onChange={(e) => handleChangeText(e.target.value)}/>
            <span onClick={addTask}>Add Task</span>
        </label>
    )
}

export default InputTodoText