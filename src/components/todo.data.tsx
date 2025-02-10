
// [1,2,3] // number[]
interface IProps {
    todos: {
        id: number;
        title: string;
        isComplete: boolean;
    }[];
    setListTodo: (todo: ITodo[]) => void;
    handleDeleteItem: (id: number) => void;
    owner?: string;
    age?: number;
    isDeveloper?: boolean;
}

interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;
}

// type TProps = {
//     todos: {
//         id: number;
//         title: string;
//         isComplete: boolean;
//     }[];
//     owner: string;
//     age: number;
//     isDeveloper: boolean;
// }
const TodoData = (props: IProps) => {

    //S const [updatedTodos] = useState<ITodo[]>([])
    const { todos, handleDeleteItem } = props;
    // console.log('>>>>> list to do in todo.data:', todos);

    //  console.log(">>>>>> check updatedTodos:", updatedTodos);
    return (
        <div>
            {
                todos.map(
                    (item, index) => {
                        return (
                            <div key={index}>
                                <div style={{ display: "flex", gap: "30px", margin: "5px auto" }}>
                                    <div>{item.id}-------------{item.title}</div>
                                    <button onClick={() => { handleDeleteItem(item.id) }}>Delete</button>
                                </div>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default TodoData;