import React from "react";

export default class Form extends React.Component {
  onChange = (evt) => {
    const { name, value } = evt.target;
    this.props.onChangeHandler(name, value);
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmitHandler();
  };

  onClearCompleted = (evt) => {
    evt.preventDefault();
    this.props.onClearCompletedHandler();
  };

  showCompleted = (evt) => {
    evt.preventDefault();
    this.props.showCompletedHandler();
  };

  render() {
    const { toDoInput, toggleButton } = this.props;

    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input
            placeholder="Type todo"
            type="text"
            name="toDoInput"
            value={toDoInput}
            onChange={this.onChange}
          />
          <button>Submit</button>
        </form>
        {!toggleButton && <button onClick={this.onClearCompleted}>Clear Completed</button>}
        {toggleButton && <button onClick={this.showCompleted}>Show Completed</button>}
      </>
    );
  }
}
