import "./style.css";

const Tasks = ({ tasks, removeTask, toggleTaskDone}) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li className="tasks__item">
                <button 
                className="tasks__button tasks__button--done"
                onClick={()=> toggleTaskDone(task.id)}>
                    {task.done ? "✔" : ""}
                </button>
                <span
                    className={`tasks__content${task.done ? " tasks__content--done" : ""}`}
                >
                    {task.content}
                </span>
                <button
                    className="tasks__button tasks__button--delete"
                    onClick={() => removeTask(task.id)}
                >🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;