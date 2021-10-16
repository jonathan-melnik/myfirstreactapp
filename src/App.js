import './App.css';
import { TodoList } from './TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do list</h1>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
