import React, { Component } from 'react';
import styles from './index.module.scss';

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            showActions: false
        }
    }

    render(){
        const {data, deleteTodo, editTodo, doneTodo, showDetail} = this.props;
        const { showActions } = this.state;
        return (
            <div className={`${styles.todo} ${data.completed && styles.completed} ${data.big && styles.big}`} 
                onMouseOver={() => this.setState({showActions: true})}
                onMouseLeave={() => this.setState({showActions: false})}
                onClick={showDetail}
            >
                <div className={styles.information}>
                    <h4 className={styles.heading}>{data.title}</h4>
                    <p className={styles.detail}>{data.detail}</p>
                </div>

                { data.big && (<div>
                    <p><b>Created At</b>: &nbsp; {data.createdAt}</p>
                    {data.updatedAt && <p><b>Updated At</b>: &nbsp; {data.updatedAt}</p>}
                </div>)}

                {showActions && (!data.completed) && <div className={styles.actions}>
                    <button className={styles.edit} onClick={editTodo}>Edit</button>
                    <button className={styles.done} onClick={doneTodo}>Complete</button>
                </div>}

                {
                    showActions && <span className={styles.delete} onClick={deleteTodo}>&times;</span>
                }
            </div>
        );
    }
}

export default Todo;