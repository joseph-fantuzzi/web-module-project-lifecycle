import React from "react";
import TodoList from "./TodoList";
import Form from "./Form";
import axios from "axios";

const URL = "http://localhost:9000/api/todos";

const initialState = {
  successMessage: "",
  errorMessage: "",
  toDos: [],
  toDoInput: "",
};

export default class App extends React.Component {
  state = initialState;

  componentDidMount() {
    this.getToDos();
  }

  getToDos = () => {
    //GET REQUEST
    axios
      .get(URL)
      .then((res) => {
        this.setState({ ...this.state, toDos: res.data.data, successMessage: res.data.message });
      })
      .catch((err) => {
        this.setState({ ...this.state, errorMessage: err.response.data.message });
      });
  };

  onSubmitHandler = () => {
    //POST REQUEST
    const newToDo = {
      name: this.state.toDoInput,
      completed: false,
    };

    axios
      .post(URL, newToDo)
      .then((res) => {
        this.setState({
          ...this.state,
          toDos: [...this.state.toDos, res.data.data],
          successMessage: res.data.message,
          toDoInput: initialState.toDoInput,
        });
      })
      .catch((err) => {
        this.setState({ ...this.state, errorMessage: err.response.data.message });
      });
  };

  completedItemHandler = (id) => {
    //PATCH REQUEST
    axios
      .patch(`${URL}/${id}`)
      .then((res) => {
        this.setState({
          ...this.state,
          toDos: this.state.toDos.map((todo) => {
            return id === todo.id ? { ...todo, completed: res.data.data.completed } : todo;
          }),
          successMessage: res.data.message,
        });
      })
      .catch((err) => {
        console.error(err);
      });
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
