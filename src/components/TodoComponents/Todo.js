import React from 'react';

const Todo = props => {
    return (
        <div>
            <h1>{props.todo.task}</h1>
        </div>
    )
}

export default Todo;