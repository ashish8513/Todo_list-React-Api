
function todoReducers(state, actions) {
    if (actions.type == 'add_todo') {
        let todoText = actions.payload.todoText;
        return [
            ...state, { id: state.length + 1, todoData: todoText, finished: false }
        ]
    } else if (actions.type == 'edit_todo') {
        let todo = actions.payload.todo;
        let todoText = actions.payload.todoText;
        const updateList = state.map(t => {
            if (t.id == todo.id) {
                todo.todoData = todoText;
            }
            return t;
        })
        return updateList;
    } else if (actions.type == 'delete_todo') {
        let todo = actions.payload.todo;
        const updatedList = state.filter(t => t.id != todo.id)
        return updatedList;
    } else if (actions.type == 'finished_todo') {
        let todo = actions.payload.todo;
        let isFinished=actions.payload.isFinished
        const updatedList = state.map(t => {
            if (t.id == todo.id) {
                todo.finished = isFinished
            }
            return t;
    })
    return updatedList;
}else{
    return state;
}
    return (
        <div>

        </div>
    )
}

export default todoReducers
