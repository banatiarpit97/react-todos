import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import {getTodos, updateTodos} from './../../services/todos';
import Todo from './../../components/todo';

class Todos extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
        }
    }
    

    componentDidMount(){
        const todos = getTodos();
        if(!todos){
            this.props.history.push('/');
        }
        else{
            this.setState({todos});
        }
    }
   
    deleteTodo = (e, index) => {
        e.stopPropagation();
        const newTodos = this.state.todos.filter((val, i) => index !== i);
        this.setState({todos: newTodos}, () => {
            this.setTodos(this.state.todos);
        });
    }

    editTodo = (e, index) => {
        this.props.history.push(`/todo-form/${index}`);
    }

    doneTodo = (e, index) => {
        e.stopPropagation();
        const {todos} = this.state;
        const newTodos = todos.map((todo, i) => index === i?{...todo, completed:true}:todo)
        this.setState({todos: newTodos}, () => {
            this.setTodos(this.state.todos);
        });

    }

    showDetail = (e, index) => {
        const {todos} = this.state;
        const newTodos = todos.map((todo, i) => index === i?{...todo, big:!todo.big}:{...todo, big:false})
        this.setState({todos: newTodos}, () => {
            this.setTodos(this.state.todos);
        });

    }

    setTodos = (todos) => {
        if(!updateTodos(todos)){
            this.props.history.push('/');
        }
    }

    render() {
        const {todos} = this.state;
        return(
            <div className={styles['todos-list']}>
                {todos.length ?
                    todos.map((todo, index) => <Todo data={todo} 
                        deleteTodo={(e) => this.deleteTodo(e, index)}
                        editTodo={(e) => this.editTodo(e, index)}
                        doneTodo={(e) => this.doneTodo(e, index)}
                        showDetail={(e) => this.showDetail(e, index)}
                        />):
                    <div>
                        <p>No todos to show</p>
                        <Link to='/todo-form'>Create one now</Link>
                    </div>
                }
            </div>
        );
    }
}

export default Todos;