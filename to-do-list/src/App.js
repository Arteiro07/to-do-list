import './App.css';
import TaskList from './components/TaskList/TaskList';
import { TasksProvider } from './hooks/TasksContext';

function App() {
  return (
    <div className="App">
      <TasksProvider>
        <TaskList/>
      </TasksProvider>
    </div>
  );
}

export default App;
