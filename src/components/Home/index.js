import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "../TodoItem";
import "./index.css";

class Home extends Component {
  state = {
    todosList: [
      {
        id: uuidv4(),
        todo: "Learn FLutter",
        priority: "HIGH",
        status: "TO DO",
      },
      {
        id: uuidv4(),
        todo: "Learn MongoDB",
        priority: "MEDIUM",
        status: "IN PROGRESS",
      },
      {
        id: uuidv4(),
        todo: "Prepare for Interview",
        priority: "HIGH",
        status: "DONE",
      },
    ],
    todo: "",
    priority: "",
    status: "",
  };

  onDeletingTodo = (id) => {
    const { todosList } = this.state;
    const filteredList = todosList.filter((eachTodo) => eachTodo.id !== id);
    this.setState({ todosList: filteredList });
  };

  onChangeTodoInput = (event) => {
    this.setState({ todo: event.target.value });
  };

  onChangePriority = (event) => {
    this.setState({ priority: event.target.value });
  };

  onChangeStatus = (event) => {
    this.setState({ status: event.target.value });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    const { todo, priority, status } = this.state;

    const newTodo = {
      id: uuidv4(),
      todo,
      priority,
      status,
    };

    this.setState((prevState) => ({
      todosList: [...prevState.todosList, newTodo],
      todo: "",
      priority: "",
      status: "",
    }));
  };

  renderInputElements = () => {
    const { todo, priority, status } = this.state;

    return (
      <div className="submit-form">
        <div className="inputGroup">
          <label htmlFor="todo">Todo:</label>
          <input
            type="text"
            id="todo"
            placeholder="Enter your Task"
            className="input"
            value={todo}
            onChange={this.onChangeTodoInput}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="priority">Priority</label>
          <input
            type="priority"
            id="priority"
            placeholder="Enter your Priority"
            className="input"
            value={priority}
            onChange={this.onChangePriority}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="status">Status:</label>
          <input
            type="text"
            id="status"
            placeholder="Enter Status"
            className="input"
            value={status}
            onChange={this.onChangeStatus}
          />
        </div>
      </div>
    );
  };

  renderForm = () => {
    return (
      <form onClick={this.onSubmitForm}>
        <div className="inputGroup-btn">
          <button type="submit" className="task-button">
            Add Task
          </button>
        </div>
      </form>
    );
  };

  render() {
    const { todosList } = this.state;

    return (
      <div className="home-container">
        <h1 className="heading">TODO APPLICATION</h1>
        <div className="form-login">
          {this.renderInputElements()}
          {this.renderForm()}
        </div>

        <ul className="list-container">
          <li className="table-header">
            <p className="table-header-cell name-column">TO DO</p>
            <hr className="separator" />
            <p className="table-header-cell name-column">Priority</p>
            <hr className="separator" />
            <p className="table-header-cell name-column">Status</p>
            <hr className="separator" />
            <p className="table-header-cell name-column">Actions</p>
          </li>
          {todosList.map((eachTodo) => (
            <TodoItem
              key={eachTodo.id}
              todoDetails={eachTodo}
              onDeletingTodo={this.onDeletingTodo}
            />
          ))}
        </ul>
        <div className="my-text-container">
          <h1 className="poori-text">
            By <br />
            Poornima Ranguri
          </h1>
        </div>
      </div>
    );
  }
}

export default Home;
