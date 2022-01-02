function TodoItem({todo, onChange, onDelete}) {
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.isCompleted} onChange={(event) => {
                    onChange({
                        ...todo,
                        isCompleted: event.target.checked
                    })
                }}/>
                {todo.text}
                <button onClick={() => {onDelete(todo)}}>X</button>
            </label>
        </div>
    )
}

export default TodoItem;