import './App.css';
import {useState} from 'react'
import Todo from './components/Todo'

function App() {
  
  const [todo, setTodo] = useState("");
  const [time, setTime] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {

    setTodoList([...todoList, {todo: todo, time: time} ])

    //console.log(todoList)
    setTodo("");
    setTime("");
  }

  return (
    <div className="App">
      <div className='container'>
        <h1>React TodoList</h1>

        <label>What to do:</label>
        <input type="text" value={todo} onChange={(e)=>{

          setTodo(e.target.value)
          //console.log(todo)
        }} />

        <label>Time needed:</label>
        <input type="text" value={time} onChange={(e)=>{

          setTime(e.target.value)
        }} />

        <button onClick={addTodo}>Add</button>
      </div>

      {
        todoList.map(t => {

          return <Todo todo={t.todo} time={t.time} />
        })
      }
    </div>
  );
}

export default App;
