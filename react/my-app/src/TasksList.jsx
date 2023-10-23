import React, { Component } from 'react';
import Task from './Task';
import {
  createTask,
  fetchTasksList,
  updateTask,
  deleteTask,
} from './TasksGateway';
import CreateTaskInput from './CreateTaskInput';
class TodoList extends Component {
  state = {
    tasks: [
      // { text: 'Buy milk', done: false, id: 1 },
      //  { text: 'Visit party', done: true, id: 2 },
    ],
  };
  componentDidMount() {
    this.fetchTasks();
  }
  fetchTasks = () => {
    fetchTasksList().then((tasksList) => {
      this.setState({
        tasks:tasksList,
      });
    });
  };
  onCreate = (text) => {
    const newTask = {
      text,
      done: false,
    };
    createTask(newTask).then(() => this.fetchTasks());
  };

  handleTaskStatusChange = (id) => {
    const { done, text } = this.state.tasks.find((task) => task.id === id);
    {
      const updatedTask = {
        text,
        done: !done,
      };
      return updateTask(id, updatedTask).then(() => this.fetchTasks());
    }
  };

  handleTaskDelete = (id) => {
    deleteTask(id).then(() => this.fetchTasks());
  };
  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map((task) => (
            <Task
              key={task.id}
              {...task}
              onDelete={this.handleTaskDelete}
              onChange={this.handleTaskStatusChange}
            />
          ))}
        </ul>
      </div>
    );
  }
}
export default TodoList;
