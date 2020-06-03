import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todos = [
  {
    task: 'Clean kitchen',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state ={
        todos: todos
    };
  }

  toggleCompleted = todoId=>{
    this.setState({
      todos:this.state.todos.map(todo =>{
        if(todoId ===todo.id){
          return{
            ...todo, completed:!todo.completed
          }  
        }
        return todo;
      })
    })
  }

  addTodo=(e,todo)=>{
    e.preventDefault();
    const newTodo = {
      task: todo,
      id:Date.now(),
      completed: false
    }
    this.setState({
      todos:[...this.state.todos, newTodo]
    })
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList toggleCompleted = {this.toggleCompleted} todos ={this.state.todos}/>
      </div>
    );
  }
}

export default App;
