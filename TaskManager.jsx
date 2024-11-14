// src/TaskManager.js
import React, { Component } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './App.css';

class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, text: 'Complete React assignment', completed: false },
        { id: 2, text: 'Prepare for meeting', completed: false },
      ],
    };
  }

  addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    this.setState({ tasks: [...this.state.tasks, newTask] });
  };

  toggleTaskCompletion = (id) => {
    this.setState({
      tasks: this.state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    });
  };

  deleteTask = (id) => {
    this.setState({ tasks: this.state.tasks.filter((task) => task.id !== id) });
  };

  render() {
    return (
      <div className="task-manager">
        <h1>Task Manager</h1>
        <TaskForm addTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          toggleTaskCompletion={this.toggleTaskCompletion}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

export default TaskManager;
 
