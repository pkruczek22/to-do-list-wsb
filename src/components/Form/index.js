import "./style.css";
import { useState } from "react";

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim())
        setNewTaskContent("")
    }

    return (
        <form
            className="form"
            onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                className="form__input"
                type="text"
                placeholder="What needs to be done?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            >
            </input>
            <button className="form__button">Add task</button>
        </form>
    );
}

export default Form;