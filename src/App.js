import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

// import '../Todo.css'

const todos =[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }

]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor () {
  super ();
  this.state = {
    todos: todos,
    todo: ""
  };
}

// setState with new todo at the end of the array

addTodo = e => {
  e.preventDefault (); // Prevents browser refresh on button click
  const newTodo = {
    task: this.state.todo,
    id: Date.now(),
    completed: false
  }
  this.setState({
    todos: [...this.state.todos, newTodo],
    todo: ''
  })
};

  handleChanges = e => {
    console.log(e.target);
    this.setState ({
      [e.target.name]: e.target.value
    });
  };

  toggleItem = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    })
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          todos={this.state.todos}
          toggleItem={this.toggleItem}
        />
        <TodoForm 
          handleAddTodo={this.addTodo}
          value={this.state.todo}
          changeTodo={this.handleChanges}
        />
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
