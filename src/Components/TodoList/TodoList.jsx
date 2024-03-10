import { useContext } from 'react'
import Todo from '../Todo/Todo'
import TodoContext from '../../Context/TodoContext'
import TodoDispatchContext from '../../Context/TodoDispatchContext'


function TodoList() {
    
    const { list } = useContext(TodoContext)
    const {dispatch}=useContext(TodoDispatchContext)


    function onFinished(isFinished, todo) {
        dispatch({type:'finished_todo' ,payload:{todo,isFinished:true}})
        // const updatedList = list.map(t => {
        //     if (t.id == todo.id) {
        //         todo.finished = isFinished
        //     }
        //     return t;
        // })
        // setList(updatedList)
    };

    function onDelete(todo) {
        dispatch({type:'delete_todo',payload:{todo}})
        // const updatedList = list.filter(t => t.id != todo.id)
        // setList(updatedList)
    }
    function onEdit(todo, todoText) {
        dispatch({type:'edit_todo',payload:{todo,todoText}})
        // const updatedList = list.map(t => {
        //     if (t.id == todo.id) {
        //         todo.todoData = todoText
        //     }
        //     return t;
        // })
        // setList(updatedList)
    }

    return (
        <div>
            {list.length > 0 &&
                list.map(todo => <Todo
                    key={todo.id}
                    id={todo.id}
                    isFinished={todo.finished}
                    todoData={todo.todoData}
                    changeFinished={(isFinished) => onFinished(todo, isFinished)}
                    onDelete={() => onDelete(todo)}

                    onEdit={(todoText) => onEdit(todo, todoText)}
                />
                )}
        </div>
    )
}

export default TodoList
