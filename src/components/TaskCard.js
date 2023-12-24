

export const TaskCard = ( {task , handleDelete}) => {
  return (
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
  )
}
