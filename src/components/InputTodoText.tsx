import {useEffect, useRef} from "react";

interface AddTodoItemProps {
    value: string;
    handleChangeText: (str: string) => void;
    addTask: () => void;
    handleKeyDown: () => void;
}

const InputTodoText: React.FC<AddTodoItemProps> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [])
    const {value, handleChangeText, addTask} = props;
    return (
        <label>
            <input value={value} onChange={(e) => handleChangeText(e.target.value)}
                   onKeyDown={(e) => {
                    if (e.key === 'Enter') addTask();
            }} ref={inputRef}/>
            <span onClick={addTask}>Add Task</span>
        </label>
    )
}

export default InputTodoText