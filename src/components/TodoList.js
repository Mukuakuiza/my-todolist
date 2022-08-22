import Todo from './Todo'
const TodoList =(props)=>{
    return (
        <div className="todo-container">
            <ul className="todo-list"> 
                {props.filteredTodos.map((todo)=>( <Todo key={todo.id} todos={props.todos} todo={todo} setTodos= {props.setTodos} text={todo.text}/>))}
            </ul>
        </div>
    )
}

export default TodoList;