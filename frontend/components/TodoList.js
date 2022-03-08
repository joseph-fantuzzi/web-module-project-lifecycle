import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  render() {
    const { toDos, completedItemHandler } = this.props;

    return (
      <div>
        <h2>Todos:</h2>
        {toDos.map((toDo) => {
          return <Todo key={toDo.id} toDo={toDo} completedItemHandler={completedItemHandler} />;
        })}
      </div>
    );
  }
}
