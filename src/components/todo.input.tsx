import { useEffect, useState } from "react";

interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;
}
interface IProps {
    name?: string;
    addListTodo: (todo: ITodo) => void
}

const getRandomArbitrary = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
}

const TodoInput = (props: IProps) => {
    const [todo, setTodo] = useState<ITodo>({ id: 1, title: "", isComplete: true });
    const { addListTodo } = props;

    const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({ id: getRandomArbitrary(1, 1000000), title: event.target.value, isComplete: true });
    }

    const handleEnterPress = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === "Enter") {
            alert(`You pressed Enter! Input:`);
        }
    };

    return (

        <div
            style={{
                display: "flex",
                gap: "20px",
                marginBottom: "20px"
            }}
        >
            <input
                value={todo.title} type="text"
                onChange={handleOnchange}
            />
            <button
                onClick={() => {
                    addListTodo(todo);
                    setTodo({ id: 1, title: "", isComplete: true });
                }}
                onKeyDown={handleEnterPress}

            >Add Todo</button>
        </div >
    )
}

export default TodoInput;