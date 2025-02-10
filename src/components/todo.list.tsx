import { useState } from "react";
import TodoData from "./todo.data";
import TodoInput from "./todo.input";

interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;
}
const TodoList = () => {

    // const todos = [
    //     {
    //         id: 1,
    //         title: "Learn React TypeScript",
    //         isComplete: false
    //     },
    //     {
    //         id: 2,
    //         title: "Subscribe Youtube HoiDanIT",
    //         isComplete: true
    //     },
    //     {
    //         id: 3,
    //         title: "Learn English",
    //         isComplete: true
    //     },
    // ]
    const [listTodo, setListTodo] = useState<ITodo[]>([])
    const addListTodo = (todo: ITodo) => {
        const newListTodo = [...listTodo, todo];
        setListTodo(newListTodo);
    }

    const handleDeleteItem = (id: number) => {
        console.log('>>>>>>> check todo list before delete:', listTodo);
        setListTodo(listTodo.filter((item) => item.id !== id));
        console.log('>>>>>> check todo list after delete:', listTodo);

    }

    return (
        <div style={{
            width: "600px",
            margin: "50px auto",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "10px",
        }}
        >
            <div
                style={{
                    padding: "10px 0",
                    borderBottomWidth: 1,
                    borderBottomColor: "#ccc",
                    borderBottomStyle: "solid"

                }}
            >My Todo Data list</div>

            <br />
            <TodoInput
                addListTodo={addListTodo}
            />
            <TodoData
                todos={listTodo}
                setListTodo={setListTodo}
                handleDeleteItem={handleDeleteItem}
            />
        </div >
    )
}

export default TodoList;