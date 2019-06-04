import React, { Component } from 'react';
import styles from './index.module.scss';
import {addTodo, getTodos, editTodo} from './../../services/todos';

class TodoForm extends Component {
    constructor(props){
        super(props);
            this.todoId = this.props.match.params.id;
            this.state = {
                todo: {title: '', detail: '', createdAt: '', big: false, completed: false},
                error: false
            }
    }

    componentDidMount(){
        if(this.todoId){
            const todos = getTodos();
            if(todos){
                this.setState({todo: todos[this.todoId]});
            }
            else{
                this.props.history.push('/');
            }
        }
    }

    validateTodo = (e) => {
        e.preventDefault();
        const {todo} = this.state
        const {history} = this.props;
        if(todo.title && todo.detail){
            const date = new Date();
            const formattedDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
            if(this.todoId){
                this.setState(state => ({...state, todo:{...state.todo, updatedAt:formattedDate}}),() => {
                    if(editTodo(this.state.todo, this.todoId)){
                        history.push('/todos');
                    }
                    else{
                        history.push('/');
                    }
                })
            }
            else{
                this.setState(state => ({...state, todo:{...state.todo, createdAt:formattedDate}}), () => {
                    if(addTodo(this.state.todo)){
                        history.push('/todos');
                    }
                    else{
                        history.push('/');
                    }
                });
            }  
        }
        else{
          this.setState({error: true});
        }
    }

    render(){
        const {todo, error} = this.state
        const {match} = this.props;
        return (
            <div>
                <h1 className={styles.heading}>{`${match.params.id? 'Edit':'Create'}`} Todo</h1>
                <div className={styles.form}>
                <form onSubmit={this.validateTodo}>
                    <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" value={todo.title} onChange={(e) => this.setState({...this.state, todo: {...this.state.todo, title: e.target.value.trim()}})}/>
                    </div>
                    <div>
                    <label htmlFor="detail">Detail</label>
                    <input type="text" name="detail" id="detail" value={todo.detail} onChange={(e) => this.setState({...this.state, todo: {...this.state.todo, detail: e.target.value.trim()}})}/>
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
}
  

export default TodoForm;