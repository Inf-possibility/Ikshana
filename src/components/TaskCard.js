

export const TaskCard = ({ task, handleDelete , bool_text}) => {
  return (
    <li
      key={task.id}
      className={bool_text}
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
