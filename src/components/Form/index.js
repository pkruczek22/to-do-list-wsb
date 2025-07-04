import "./style.css";

const Form = () => (
    <form className="form">
        <input className="form__input" type="text" placeholder="What needs to be done?"></input>
        <button className="form__button">Add task</button>
    </form>
);

export default Form;