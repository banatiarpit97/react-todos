import { getLoggedinUser, logout } from './auth';

export function getTodos() {
    const [users, loggedinUserIndex] = getLoggedinUser();
    if(loggedinUserIndex !== -1){
        return users[loggedinUserIndex].todos;
    }
    else{
        logout();
        return false;
    }
}

export function addTodo(todo) {
    const [users, loggedinUserIndex] = getLoggedinUser();
    if(loggedinUserIndex !== -1){
        users[loggedinUserIndex].todos.push(todo);
        localStorage.setItem('users', JSON.stringify(users));
        return true;
    }
    else{
        logout();
        return false;
    }
}

export function editTodo(todo, index) {
    const [users, loggedinUserIndex] = getLoggedinUser();
    if(loggedinUserIndex !== -1){
        users[loggedinUserIndex].todos[index] = todo;
        localStorage.setItem('users', JSON.stringify(users));
        return true;
    }
    else{
        logout();
        return false;
    }
}

export function updateTodos(todos){
    const [users, loggedinUserIndex] = getLoggedinUser();
    if(loggedinUserIndex !== -1){
        users[loggedinUserIndex].todos = todos;
        localStorage.setItem('users', JSON.stringify(users));
        return true;
    }
    else{
        logout();
        return false;
    }
}