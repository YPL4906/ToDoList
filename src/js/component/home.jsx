import React, { useState } from 'react';
import '/workspaces/ToDoList/src/styles/index.css';

function home() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="todo-container">
        <input
          type="text"
          placeholder="Tareas"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={handleKeyPress}
          className="todo-input"
        />
        <ul className="todo-list">
          {tasks.map((task, index) => (
            <li key={index} className="todo-item">
              {task}
              <button
                onClick={() => deleteTask(index)}
                className="delete-button"
              >
                X
              </button>
            </li>
          ))}
        </ul>
        <p className="todo-counter">{tasks.length} item{tasks.length !== 1 ? 's' : ''} left</p>
      </div>
    </div>
  );
}

export default home;
