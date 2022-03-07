import './App.css';
import Counter from './components/basicthings/Counter';
import Form from './components/basicthings/Form';
import List from './components/basicthings/List';
import TodoApp from './components/Todoapp/screens/TodoApp';


function App() {
  return (
    <div className="App">
      {/* <Form/> */}
      {/* <Counter/> */}
      {/* <List/> */}
      <TodoApp/>
    </div>
  );
}

export default App;