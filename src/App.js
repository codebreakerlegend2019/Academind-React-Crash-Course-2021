import Todo from './components/Todo';

function App() {

  const model1 = 'Learn React'
  const model2 = 'Be a Fullstack Web Developer';

  return (
    <div>
      <h1>My Todos</h1>
      <Todo text= {model1}/>
      <Todo text= {model2}/>
    </div>
  );
}

export default App;
