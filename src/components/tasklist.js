import { useState } from "react";
import { TaskCard } from './TaskCard';
import { BoxCard } from "./BoxCard";
import "../components/css/tasklist.css";

export const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 5271, name: "Times of India", completed: true },
    { id: 7825, name: "CNN", completed: false },
    { id: 2222, name: "AL Jazeera", completed: false },
    { id: 3333, name: "Boston Globe", completed: true },
    { id: 4444, name: "Washington Times", completed: false },
    { id: 5555, name: "Chennai Express", completed: false },
    { id: 6666, name: "EEnaduu aaanadu", completed: true },
    { id: 7777, name: "Deccan Chronicles", completed: false },
  ]);

  const [show, setShow] = useState(false);
  const boxname = "Task List ";

  function handleDelete(id) {
    console.log("deleteting the following" + id);
    setTasks(tasks.filter((task) => id !== task.id));
  }

  return (
   <>
    <ul className="taskBox">
        <button className="trigger" onClick={() => setShow(!show)}>
          Toggle {boxname}
        </button>
        {show &&
          tasks.map((task) => (
          <TaskCard 
          key={task.id}
          task={task} handleDelete={handleDelete}/>
          ))}
      </ul>
      <BoxCard  result="success">
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="description"> :  amet consectetur adipisicing.</p>
        </BoxCard>
        <BoxCard result='warning'>
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="description"> :  amet consectetur adipisicing.</p>
        <p>  amet consectetur adipisicing.</p>
        </BoxCard>

  </>
  );
};
