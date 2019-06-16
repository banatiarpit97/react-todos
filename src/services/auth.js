export function login(email, password){
    const users = JSON.parse(localStorage.getItem('users'));
    for(let i=0;i<users.length;i++){
        if(users[i].email === email && users[i].password === password){
            users[i].loggedIn = true;
            localStorage.setItem('users', JSON.stringify(users));
            return true;
        }
    }
    return false;
}

export function logout(){
    const users = JSON.parse(localStorage.getItem('users'));
    for(let i=0;i<users.length;i++){
        users[i].loggedIn = false;
    }
    localStorage.setItem('users', JSON.stringify(users));
    return true;
}

export function getLoggedinUser(){
    const users = JSON.parse(localStorage.getItem('users'));
    for(let i=0;i<users.length;i++){
        if(users[i].loggedIn){
            return [users,i];
        }
    }
    return [users,-1];
}