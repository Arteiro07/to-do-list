import React from "react";
import './App.css';
import Auth from "./components/Auth/Auth";
import TaskList from './components/TaskList/TaskList';
import { TasksProvider } from './hooks/TasksContext';

//<TasksProvider/>Wraper for the task context, all the children have access to said context
function App() {
  return (
    <div className="App">
      <Auth/>
      <TasksProvider>
        <TaskList/>
      </TasksProvider>
    </div>
  );
}

export default App;
