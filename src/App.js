import Header from "./components/Header";
import Section from "./components/Section";
import Form from "./components/Form"
import Tasks from "./components/Tasks";
import Container from "./components/Container"

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
        body={<Tasks />}
      />
    </Container>
  );
}

export default App;
