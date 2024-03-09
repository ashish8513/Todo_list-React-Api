
import {  useState } from 'react';
import './App.css'
import AddTodo from './Components/AddTodo/AddTodo'
import TodoList from './Components/TodoList/TodoList'
import TodoContext from './Context/TodoContext';

function App() {
  const [list, setList] = useState([
    { id: 1, todoData: 'todo 1',finished: false},
    { id: 2, todoData: 'todo 2',finished: true},
  ]);

  return (
    <TodoContext.Provider value={{list,setList}}>
      <AddTodo updateList={(todo)=>setList([
        ...list,{id:list.length+1, todoData:todo,finished:false}
        ])} />
      <TodoList />
    </TodoContext.Provider>
  )
}

export default App
