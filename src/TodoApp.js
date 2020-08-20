import React from 'react';
import {TodoList} from './TodoList';
export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: props.items, text: '' ,priority: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList todoList={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            Ingrese Texto
          </label>
          <input
            id="new-todo"
            name="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <label>
                          Ingrese Prioridad:
              </label>
          <select name="priority" value={this.state.priority} onChange={this.handleChange} >
          <option value="1">Uno</option>
                   <option value="2">Dos</option>
                   <option value="3">Tres</option>
                   <option value="4">Cuatro</option>
                   <option value="5">Cinco</option>
          </select>


          <p>
          <button>
            Add #{this.state.items.length + 1}
          </button>
          </p>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      priority: this.state.priority,
      dueDate: new Date(),
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: '',priority: ''
    }));
  }
}
