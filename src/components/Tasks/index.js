import "./style.css";

const Tasks = () => (
    <ul className="tasks">
        <li className="tasks__item">
            <button className="tasks__button tasks__button--done"></button>
            <span className="tasks__content">Tasks content</span>
            <button className="tasks__button tasks__button--delete">🗑</button>
        </li>
    </ul>
);

export default Tasks;