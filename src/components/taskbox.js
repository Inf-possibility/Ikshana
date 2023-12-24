import { useState } from "react";
import "../components/taskbox.css";

export const Taskbox = () => {
  const [tasks, setTasks] = useState([
    { id: 5271, name: "Times of India", completed: true },
    { id: 7825, name: "CNN", completed: false },
    { id: 2222, name: "AL Jazeera", completed: false },
    { id: 3333, name: "Boston Globe", completed: true },
    { id: 4444, name: "Washington Times", completed: false },
  ]);

  const [show, setShow] = useState(false);
  const boxname = "Task List ";

  function handleDelete(id) {
    console.log("deleteting the following" + id);
    setTasks(tasks.filter((task) => id !== task.id));
  }

  return (
    <div className="taskBox">
      <a>
        <button className="trigger" onClick={() => setShow(!show)}>
          Toggle {boxname}
        </button>
      </a>
      <ul>
        {show &&
          tasks.map((task) => (
            <li
              key={task.id}
              className={task.completed ? "completed" : "incomplete"}
            >
              <span>
                {task.id} - {task.name}
                <button
                  onClick={() => handleDelete(task.id)}
                  className="delete"
                >
                  Delete
                </button>
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};