import React, {useContext} from 'react';
import styles from './index.module.scss';
import {NavLink, withRouter} from 'react-router-dom';
import {logout} from './../../services/auth.js';
import {GlobalContext} from './../../shared/global-provider';


const Header = (props) => {

    const {loggedIn, changeStatus} = useContext(GlobalContext);
    function onLogout(changeStatus){
        if(logout()){
            changeStatus(false);
            props.history.push('/');
        }
    }
    
    return (
        loggedIn && 
            <header>
                <div><h3>TODOS APP</h3></div>
                <div className={styles.actions}>
                    <NavLink to='/todos' activeClassName={styles.activeLink} className={styles.link}><span>View Todos</span></NavLink>
                    <NavLink to='/todo-form' activeClassName={styles.activeLink} className={styles.link}><span>Add New</span></NavLink>
                    <span onClick={() => onLogout(changeStatus)} className={styles.link}>Logout</span>
                </div>  
            </header>
    )
}

export default withRouter(Header);