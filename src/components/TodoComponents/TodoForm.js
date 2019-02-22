import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <form onSubmit={props.handleAddTodo}>
                <input 
                type="text"
                value={props.value}
                onChange={props.changeTodo}
                name="todo"
                placeholder="todo"

                 />
                <button>Add Todo</button>
             </form>
      </div>
    )
}

export default TodoForm;