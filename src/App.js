import Header from "./components/Header";
import Section from "./components/Section";
import Form from "./components/Form"
import Tasks from "./components/Tasks";
import Container from "./components/Container";
import { useState } from "react";


function App() {
  const [tasks, setTasks] = useState([
    { id: 1, content: "pozmywać naczynia", done: false },
    { id: 2, content: "wyjść na spacer", done: true }
  ]);

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        content,
        done:false
      }
    ])
  }

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }

      return task;
    }))
  }

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id))
  };

  return (
    <Container>
      <Header />
      <Section
        title="Add task"
        body={<Form addNewTask={addNewTask}/>}
      />
      <Section
        title="Tasks list"
        body={
          <Tasks
            tasks={tasks}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone} />}
      />
    </Container>
  );
}

export default App;
