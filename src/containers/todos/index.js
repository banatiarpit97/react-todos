import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import {getTodos, updateTodos} from './../../services/todos';
import Todo from './../../components/todo';

const Todos = (props) => {
    const {history} = props;
    const [todos, setTodos] = useState([]);
    

    useEffect(() => {
        const todos = getTodos();
        if(!todos){
            history.push('/');
        }
        else{
            setTodos(todos);
        }
    }, [])


    const setTodosInStorage = (todos) => {
        if(!updateTodos(todos)){
            history.push('/');
        }
    }
   
    const deleteTodo = (e, index) => {
        e.stopPropagation();
        const newTodos = todos.filter((val, i) => index !== i);
        setTodos(newTodos);
        setTodosInStorage(todos);
    }

    const editTodo = (e, index) => {
        history.push(`/todo-form/${index}`);
    }

    const doneTodo = (e, index) => {
        e.stopPropagation();
        const newTodos = todos.map((todo, i) => index === i?{...todo, completed:true}:todo)
        setTodos(newTodos)
        setTodosInStorage(todos);
    }

    const showDetail = (e, index) => {
        const newTodos = todos.map((todo, i) => index === i?{...todo, big:!todo.big}:{...todo, big:false})
        setTodos(newTodos)
        setTodosInStorage(todos);
    }

    return(
        <div className={styles['todos-list']}>
            {todos.length ?
                todos.map((todo, index) => <Todo key={todo.title} data={todo} 
                    deleteTodo={(e) => deleteTodo(e, index)}
                    editTodo={(e) => editTodo(e, index)}
                    doneTodo={(e) => doneTodo(e, index)}
                    showDetail={(e) => showDetail(e, index)}
                    />):
                <div>
                    <p>No todos to show</p>
                    <Link to='/todo-form'>Create one now</Link>
                </div>
            }
        </div>
    );
}

export default Todos;