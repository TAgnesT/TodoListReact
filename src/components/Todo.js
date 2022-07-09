const Todo = ({todo, time}) => {
  return (
    <div className="todoContainer">
        <h3>Todo: {todo}</h3>
        <span>Time needed: {time}</span>
    </div>
  )
}

export default Todo