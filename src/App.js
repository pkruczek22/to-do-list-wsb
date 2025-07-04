import Header from "./components/Header";
import Section from "./components/Section";
import Form from "./components/Form"
import Tasks from "./components/Tasks";
import Container from "./components/Container"

const tasks = [
  { id: 1, content: "pozmywać naczynia", done: false },
  { id: 1, content: "wyjść na spacer", done: true }
]

function App() {
  return (
    <Container>
      <Header />
      <Section
        title="Add task"
        body={<Form />}
      />
      <Section
        title="Tasks list"
        body={<Tasks tasks={tasks}/>}
      />
    </Container>
  );
}

export default App;
