import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default class Todo extends React.Component {
  completedItem = (id) => {
    this.props.completedItemHandler(id);
  };

  render() {
    const { toDo } = this.props;

    return (
      <div className="todo" onClick={() => this.completedItem(toDo.id)}>
        {toDo.name}
        <span>
          {toDo.completed === true ? (
            <AiOutlineCheckCircle className="checkbox" fontSize={18} />
          ) : (
            ""
          )}
        </span>
      </div>
    );
  }
}
