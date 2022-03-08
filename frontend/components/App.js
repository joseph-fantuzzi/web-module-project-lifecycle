import React from "react";
import TodoList from "./TodoList";
import Form from "./Form";

const URL = "http://localhost:9000/api/todos";

const initialState = {
  toDos: [],
  toDoInput: "",
};

export default class App extends React.Component {
  state = initialState;

  getTodos = () => {
    //GET REQUEST
  };

  onSubmitHandler = () => {
    //POST REQUEST
  };

  completedItemHandler = (id) => {
    //PATCH REQUEST
  };

  onChangeHandler = (key, value) => {
    this.setState({
      ...this.state,
      [key]: value,
    });
  };

  onClearCompletedHandler = () => {
    this.setState({
      ...this.state,
      toDos: this.state.toDos.filter((todo) => {
        return todo.completed === false;
      }),
    });
  };

  render() {
    const { toDos, toDoInput } = this.state;

    return (
      <>
        <TodoList toDos={toDos} completedItemHandler={this.completedItemHandler} />
        <Form
          toDoInput={toDoInput}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
          onClearCompletedHandler={this.onClearCompletedHandler}
        />
      </>
    );
  }
}
