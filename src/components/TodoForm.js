import React from 'react';
import { render } from '@testing-library/react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ""
        };
    }
    handleChanges = e => {
        this.setState({ todo: e.target.value });
    };
    submitTodo = e => {
        e.preventDefault();
        this.props.addTodo(e, this.state.todo);
    };

    render() {
        return (
            <form onSubmit={this.submitTodo}>
                <input
                    type="text"
                    value={this.state.todo}
                    name="todo"
                    onChange={this.handleChanges}
                />
                <button>Enter</button>
            </form>
        );
    }
};
export default TodoForm;


