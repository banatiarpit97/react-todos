import React, { useState, useContext } from 'react';
import styles from './index.module.scss';
import {login} from './../../services/auth';
import {GlobalContext} from './../../shared/global-provider';

const App = (props) => {
const {changeStatus} = useContext(GlobalContext);
const [credentials, setCredentials] = useState({email: '', password: ''});
const [error, setErrorState] = useState(false);

const checkCredentials = (e, changeStatus) => {
    e.preventDefault();
    if(login(credentials.email, credentials.password)){
        setErrorState(false);
        changeStatus(true);
        props.history.push('/todos')
    }
    else{
        setErrorState(true);
    }
}

return (
    <div className={styles.login}>
        <form onSubmit={(e) => checkCredentials(e, changeStatus)}>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={credentials.email} onChange={(e) => setCredentials({...credentials, email: e.target.value})}/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
        </div>
        <div>
            <input type="submit" value="Login" />
        </div>
        </form>
        {error && <p className="error">Email or password is incorrect</p>}
    </div>
)
            
}

export default App;
