import { MdOutlineModeEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import "./index.css";

const TodoItem = (props) => {
  const { todoDetails } = props;
  const { todo, priority, status } = todoDetails;

  return (
    <li className="table-row">
      <p className="table-cell name-column">{todo}</p>
      <hr className="separator" />
      <p className="table-cell name-column">{priority}</p>
      <hr className="separator" />
      <p className="table-cell name-column">{status}</p>
      <hr className="separator" />
      <div className="buttons-container table-cell name-column">
        <button className="table-cell name-column edit-button" type="button">
          <MdOutlineModeEdit className="edit-icon" />
        </button>
        <button className="table-cell name-column edit-button" type="button">
          <MdOutlineDelete className="delete-icon" />
        </button>
      </div>
      
    </li>
  );
};

export default TodoItem;
