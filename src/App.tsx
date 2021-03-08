import React from 'react';
import TaskList from "./containers/TasksList"
import { TasksContextProvider } from "./contexts/TasksContext"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TasksContextProvider>
          <TaskList />
        </TasksContextProvider>
      </header>
    </div>
  );
}

export default App;
