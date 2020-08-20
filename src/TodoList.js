import React from 'react';
import {Todo} from './Todo';



export class TodoList extends React.Component {

    constructor(props) {
        super(props);
        console.log(props.todoList);
    }

    render() {
        return (
            <ul>
            {this.props.todoList.map((item) =>
                <Todo key={item.dueDate} text={item.text} priority={item.priority} dueDate={item.dueDate}/>
              )
            }

            </ul>
        );
    }

}
