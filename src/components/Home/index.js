import { Component } from "react";
import TodoItem from "../TodoItem";
import "./index.css";

class Home extends Component {
  state = {
    todosList: [
      {
        id: 1,
        todo: "Learn FLutter",
        priority: "HIGH",
        status: "TO DO",
      },
    ],
  };

  render() {
    const { todosList } = this.state;

    return (
      <div className="home-container">
        <h1 className="heading">TODO APPLICATION</h1>
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
            <TodoItem key={eachTodo.id} todoDetails={eachTodo} />
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
