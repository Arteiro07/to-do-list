import React from "react";
import './App.css';
import TaskList from './components/TaskList/TaskList';
import { TasksProvider } from './hooks/TasksContext';

//<TasksProvider/>Wraper for the task context, all the children have access to said context
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
