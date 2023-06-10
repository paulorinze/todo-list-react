import './App.css';
import { useState } from 'react';

function App() {
  //creating blank state 
  const [todoList,setTodoList] = useState([]);
  //Tracking the value inside the input
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    //creating a new TodoList array
    setTodoList([...todoList, newTask]);
  };

  return (
    <div className="App">
        <div className="addTasks">
          <input onChange={handleChange}/>
          <button onClick={addTask}> Add Task </button>
        </div>
        <div className="list"></div>
        {todoList.map((task) => {
          return <h1>{task}</h1>;
        })}
    </div>
  );
}

export default App;
