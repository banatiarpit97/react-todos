import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import {addTodo, getTodos, editTodo} from './../../services/todos';

const TodoForm = (props) => {
    const {match, history} = props;
    const todoId = match.params.id;
    const [todo, setTodo] = useState({title: '', detail: '', createdAt: '', big: false, completed: false});
    const [error, setErrorState] = useState(false);


    useEffect(() => {
        if(todoId){
            const todos = getTodos();
            if(todos){
                setTodo(todos[todoId]);
            }
            else{
                history.push('/');
            }
        }
    }, []);

    const validateTodo = (e) => {
        e.preventDefault();
        if(todo.title && todo.detail){
            const date = new Date();
            const formattedDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
            if(todoId){
                setTodo({...todo, updatedAt:formattedDate})
                if(editTodo(todo, todoId)){
                    history.push('/todos');
                }
                else{
                    history.push('/');
                }
            }
            else{
                setTodo({...todo, createdAt:formattedDate})
                if(addTodo(todo)){
                    history.push('/todos');
                }
                else{
                    history.push('/');
                }
            }  
        }
        else{
          setErrorState(true);
        }
    }

    return (
        <div>
            <h1 className={styles.heading}>{`${match.params.id? 'Edit':'Create'}`} Todo</h1>
            <div className={styles.form}>
            <form onSubmit={validateTodo}>
                <div>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" value={todo.title} onChange={(e) => setTodo({...todo, title: e.target.value.trim()})}/>
                </div>
                <div>
                <label htmlFor="detail">Detail</label>
                <input type="text" name="detail" id="detail" value={todo.detail} onChange={(e) => setTodo({...todo, detail: e.target.value.trim()})}/>
                </div>
                <div>
                <input type="submit" value="Save" />
                </div>
            </form>
            {error && <p className="error">Enter title and detail of todo</p>}
            </div>
        </div>
    );
}
  

export default TodoForm;