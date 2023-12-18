import { useState } from 'react';
import '../components/counterbox.css'

export const Counterbox = () => {
   //let count = 0;
  const [count , setcount ] =useState(0)

  function handleAdd(){
    setcount(count+1);
    console.log(count);
  }

  function handleSub(){
    setcount(count-1);
    console.log(count);
  }
    const boxname = 'counter '
  return (
    <div className='counterBox'>
    <h1>{boxname}</h1>
    <p>{count}</p>
    <button onClick={handleAdd} className='add'>ADD </button>
    <button onClick={handleSub} className='sub'>SUB </button>
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
