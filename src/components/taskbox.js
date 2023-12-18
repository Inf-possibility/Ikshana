import { useState } from "react";
import "../components/taskbox.css";

  
export const Taskbox = () => {
  const [tasks, setTasks] = useState([
    { id: 5271, name: "Times of India", completed: true },
    { id: 7825, name: "CNN", completed: false },
    { id: 2222, name: "AL Jazeera", completed: false },
    { id: 3333, name: "Boston Globe", completed: false },
    { id: 4444, name: "Washington Times", completed: false },
  ]);
  const boxname = "Task List ";

  function handleDelete(id){
    console.log('deleteting the following' + id)
    setTasks(tasks.filter(task => id !== task.id ))
    }
  



  return (
    <div className="taskBox">
      <a>{boxname}</a>
      <ul>
        <li>
        <span>
              1111 - You cannot delete refresh if you want 
              <button onClick={() => handleDelete(3)} className="delete">Delete</button>
            </span>
        </li>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>
              {task.id} - {task.name}
              <button onClick={() => handleDelete(task.id)} className="delete">Delete</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};


