import React, { useState } from 'react';
import styles from './index.module.scss';

const Todo = (props) => {
    const [actions, setActionsVisibility] = useState(false)
    const {data, deleteTodo, editTodo, doneTodo, showDetail} = props;

    return (
        <div className={`${styles.todo} ${data.completed && styles.completed} ${data.big && styles.big}`} 
            onMouseOver={() => setActionsVisibility(true)}
            onMouseLeave={() => setActionsVisibility(false)}
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

            {actions && (!data.completed) && <div className={styles.actions}>
                <button className={styles.edit} onClick={editTodo}>Edit</button>
                <button className={styles.done} onClick={doneTodo}>Complete</button>
            </div>}

            {
                actions && <span className={styles.delete} onClick={deleteTodo}>&times;</span>
            }
        </div>
    );
}

export default Todo;