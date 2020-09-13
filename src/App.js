import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todos = [
  {
    todo: 'Clean kitchen',
    id: 1,
    completed: false
  },
  {
    todo: 'Bake Cookies',
    id: 2,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: todos
    };
  }

  toggleCompleted = todoId => {
    console.log(todoId);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo, completed: !todo.completed
          };
        }

        return todo;
      })

    });

  };

  addTodo = (e, todo) => {
    e.preventDefault();
    console.log(todo);
    const newTodo = {
      name: todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };



  clearCompleted = e => {
    e.preventDefault();
    console.log("clicked");
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });

  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2>My To-Do List</h2>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList toggleCompleted={this.toggleCompleted} todos={this.state.todos} clearCompleted={this.clearCompleted}
          todo={this.state.todo} />
      </div>

    );
  }
}

export default App;
