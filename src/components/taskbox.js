import { useState } from 'react';
import '../components/taskbox.css'

export const Taskbox = () => {
    const [tasks, setTasks] = useState([
        {id: 5271, name: "Record React Lectures", completed: true}
      ]);
    const boxname = 'Task List '
  return (
    <div className='taskBox'>
      <h1>{boxname}</h1>
      <ul>
        { tasks.map((task) => (
          <li key={task.id}>
            <span>{task.id} - {task.name}</span>
            <button className='delete'>Delete</button>
          </li>
        )) }
      </ul>
    </div>
  )
}


function App() {
  const [tasks, setTasks] = useState([
    {id: 5271, name: "Record React Lectures", completed: true}, 
    {id: 7825, name: "Edit React Lectures", completed: false}, 
    {id: 8391, name: "Watch Lectures", completed: false}
  ]);

  return (
    <div className="App">
      <h1>Task List</h1>
      <ul>
        { tasks.map((task) => (
          <li key={task.id}>
            <span>{task.id} - {task.name}</span>
            <button className='delete'>Delete</button>
          </li>
        )) }
      </ul>
    </div>
  );
}

export default App;
