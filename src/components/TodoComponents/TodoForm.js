import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <form>
                <input 
                type="text"
                value={props.value}
                onChange={props.changeTodo}
                name="todo"
                placeholder="todo"

                 />
                <button onClick={props.handleAddTodo}>Add Todo</button>
                <button>Clear Completed</button>
             </form>
      </div>
    )
}

export default TodoForm;