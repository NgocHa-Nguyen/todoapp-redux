import React, { Component } from 'react';
import TodoItem from './TodoItem';
import AddItem from './AddItem';

class TodoList extends Component {
    render() {
        return (
            <div>
                <TodoItem></TodoItem>
                <AddItem></AddItem>
            </div>
        );
    }
}

export default TodoList;