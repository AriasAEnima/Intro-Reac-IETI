import React from 'react';

export class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <li>
          {this.props.text.toString()} ,
          {this.props.priority.toString()} ,
          {this.props.dueDate.toString()}
          </li>
        );
    }

}
